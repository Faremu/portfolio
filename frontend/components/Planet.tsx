'use client'

import { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, Vector3 } from 'three'
import * as THREE from 'three'

interface PlanetProps {
  texture: string
  onSelect: (position: Vector3) => void
}

export default function Planet({ texture, onSelect }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const map = useLoader(TextureLoader, texture)

  useFrame((_, delta) => {
    meshRef.current.rotation.y += hovered ? delta * 1.2 : delta * 0.2
  })

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() =>
        onSelect(meshRef.current.position.clone())
      }
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={map} />
    </mesh>
  )
}
