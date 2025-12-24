'use client'

import { useRef } from 'react'

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
        <h1 className="text-4xl mt-10 mb-5">Timeline</h1>

        <div
            ref={timelineRef}
            onWheel={handleWheel}
            className="
                overflow-x-auto
                overscroll-x-contain
                overscroll-y-contain
                cursor-grab
            "
            >
            <div className="flex w-max gap-10 px-6 py-4">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                key={i}
                className="min-w-[220px] shrink-0 text-center"
                >
                <div className="mx-auto h-3 w-3 rounded-full bg-black" />
                <div className="h-10 w-px bg-gray-300 mx-auto my-2" />
                <p className="font-medium">Year {2000 + i}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Timeline
