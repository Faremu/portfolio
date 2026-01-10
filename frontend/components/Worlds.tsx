'use client'

import worlds from '@/data/worlds.json'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { Vector3 } from 'three'
import Planet from './Planet'

interface WorldType {
  name: string
  description: string
  image: string
}

/* CAMERA CONTROLLER */
function CameraRig({
  target,
  onArrive,
}: {
  target: Vector3 | null
  onArrive: () => void
}) {
  const { camera } = useThree()
  const arrived = useRef(false)

  useFrame(() => {
    if (!target || arrived.current) return

    const destination = target
      .clone()
      .add(new Vector3(0, 0, 1.8))

    camera.position.lerp(destination, 0.08)
    camera.lookAt(target)

    if (camera.position.distanceTo(destination) < 0.05) {
      arrived.current = true
      onArrive()
    }
  })

  return null
}

export default function Worlds() {
  const router = useRouter()
  const myWorlds: WorldType[] = worlds

  const [selectedTarget, setSelectedTarget] =
    useState<Vector3 | null>(null)
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null)

  return (
    <div className="h-screen bg-black text-white">
      <h1 className="text-4xl p-10">My Worlds</h1>

      <div className="grid grid-cols-2 gap-12 px-10">
        {myWorlds.map((world, idx) => (
          <div key={idx} className="h-[320px]">
            <Canvas camera={{ position: [0, 0, 3] }}>
              {/* LIGHTS */}
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1} />

              {/* PLANET */}
              <Planet
                texture={world.image}
                onSelect={(pos) => {
                  setSelectedTarget(pos)
                  setSelectedIndex(idx)
                }}
              />

              {/* CAMERA ZOOM */}
              <CameraRig
                target={selectedTarget}
                onArrive={() => {
                  if (selectedIndex !== null) {
                    router.push(`/world/${selectedIndex}`)
                  }
                }}
              />

              {/* Disable manual control */}
              <OrbitControls
                enableZoom={false}
                enableRotate={false}
              />
            </Canvas>

            <p className="text-center mt-4 font-semibold">
              {world.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
