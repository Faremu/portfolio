'use client'

import { useRef } from 'react'
import timeline from "@/data/timeline.json"

const Timeline = () => {
    const timelineRef = useRef<HTMLDivElement>(null)
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const el = timelineRef.current
        if (!el) return

        const canScrollHorizontally =
            el.scrollWidth > el.clientWidth

        if (!canScrollHorizontally) return

        e.preventDefault()
        e.stopPropagation()

        el.scrollLeft += e.deltaY
    }

    return (
        <div id="Timeline" className="shadow-md rounded-4xl w-full p-5">
        <h1 className="text-4xl mt-10 mb-5">My Developer Journey</h1>

        <div
            ref={timelineRef}
            onWheel={handleWheel}
            className="
                overflow-x-auto
                overscroll-x-contain
                overscroll-y-contain
            "
            >
            <div className="relative flex w-max gap-10 px-6 py-8">
                <div
                className="
                    absolute
                    top-10
                    left-0
                    right-0
                    h-1
                    bg-gray-500
                "
                />
            {timeline.map((item, i) => (
                <div
                key={i}
                className="min-w-[220px] shrink-0 text-center"
                >
                <div className="mx-auto h-5 w-5 rounded-full bg-black relative z-10 hover:cursor-pointer hover:scale-110" />
                <div className="h-10 w-px bg-gray-300 mx-auto my-2" />
                <p className="font-medium">{item.title}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Timeline
