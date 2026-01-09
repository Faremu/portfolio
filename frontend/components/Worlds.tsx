'use client'

import worlds from "@/data/worlds.json"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface MyWorldsType {
  name: string
  description: string
  image: string
}

const Worlds = () => {
  const router = useRouter()
  const myWorlds: MyWorldsType[] = worlds

  return (
    <div>
      <h1 className="text-4xl mt-10 mb-8">My worlds</h1>

      {/* Perspective container */}
      <div className="flex gap-12 perspective-[1400px]">
        {myWorlds.map((item, idx) => (
          <motion.div
            key={item.name + idx}
            className="
              relative w-[220px] h-[220px]
              rounded-full cursor-pointer
              [transform-style:preserve-3d]
            "

            whileHover={{
              rotateX: 18,
              rotateY: -18,
              scale: 1.15,
              z: 80,
            }}

            whileTap={{
              scale: 3,
              rotateY: 90,
              opacity: 0,
            }}

            transition={{ duration: 0.5, ease: "easeOut" }}

            onClick={() => router.push(`/world/${idx}`)}
          >
            {/* WORLD IMAGE */}
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="rounded-full object-cover"
            />

            {/* SHADOW / LIGHT */}
            <div
              className="
                absolute inset-0 rounded-full
                shadow-[inset_-30px_0_40px_rgba(0,0,0,0.7)]
                pointer-events-none
              "
            />

            {/* NAME FLOATING IN 3D */}
            <div
              className="
                absolute bottom-[-40px] left-1/2 -translate-x-1/2
                text-white font-semibold
                translate-z-[60px]
              "
            >
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Worlds
