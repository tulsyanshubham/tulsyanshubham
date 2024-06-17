'use client';
import React from 'react'
import { TracingBeam } from './ui/tracing-beam'
import { TimelineData } from '@/data/timeline'
import { BackgroundGradient } from './ui/background-gradient'

export default function Timeline() {
  return (
    <div className='mx-2 my-10' id='timeline'>
      <TracingBeam className="px-6">
        <div className='flex flex-col items-center justify-center ps-3 py-7'>
          <div className='mb-10'>
            <h2 className="text-4xl sm:text-5xl font-bold text-center">Timeline</h2>
            <h2 className="text-base md:text-xl text-teal-600 font-semibold tracking-wide mt-2 text-center">
              A selection of projects I have worked on recently and in the past.
            </h2>
          </div>
          {TimelineData.map((timeline) => (
            <div className="my-5 w-full md:w-fit" key={timeline.title}>
              <BackgroundGradient className="rounded-[22px] w-xl p-5 px-7 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col shadow-lg">
                <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {timeline.title}
                </p>
                {timeline.course ? (<p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                  {timeline.course}
                </p>) : ""}
                <p className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-300 mt-4">
                  {timeline.place}
                </p>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                  Year of completion: <span className="font-semibold text-gray-700 dark:text-gray-200">{timeline.yoc}</span>
                </p>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
                  {timeline.score < 10 ? "CGPA till now:" : "Percentage"} <span className="font-semibold text-gray-700 dark:text-gray-200">{timeline.score}</span>
                </p>
              </BackgroundGradient>
            </div>
          ))}

        </div>
      </TracingBeam>
    </div>
  )
}
