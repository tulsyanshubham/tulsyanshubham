"use client";

import React, { useEffect, useState } from 'react'
import { ProjectsArr } from '@/data/projects'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FollowerPointerCard } from './ui/following-pointer';
import Projects_PC from './Projects_PC';
import Projects_Phone from './Projects_Phone';

const TitleComponent = ({
    title,
}: {
    title: string;
}) => (
    <div className="flex space-x-2 items-center">
        <p>{title}</p>
    </div>
);

export default function Projects() {
    const [innerWidth, setInnerWidth] = useState(0);
    useEffect(() => {
        // console.log(window.innerWidth) //debug
        setInnerWidth(window.innerWidth);
    }, []);
    return (
        <div className='flex flex-col items-center justify-center my-20' id='projects'>
            <div className='mb-16'>
                <h2 className="text-4xl sm:text-5xl font-bold text-center">My Projects</h2>
                <h2 className="text-lg md:text-xl text-teal-600 font-semibold tracking-wide text-center mt-2">
                    A selection of projects I have worked on recently and in the past.
                </h2>
            </div>
            { innerWidth > 640 ? <Projects_PC data={ProjectsArr} /> :
            <Projects_Phone data={ProjectsArr} />}
        </div>
    )
}
