"use client";

import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {project_type} from "@/types";
import Link from "next/link";
import { FollowerPointerCard } from './ui/following-pointer';

const TitleComponent = ({
    title,
}: {
    title: string;
}) => (
    <div className="flex space-x-2 items-center">
        <p>{title}</p>
    </div>
);


export default function Projects_PC({data: ProjectsArr}: {data: project_type[]}) {
    return (
            <div className='flex flex-wrap items-center justify-center'>
                {ProjectsArr.map((project) => (
                    <CardContainer className="inter-var my-2 mx-2 sm:mx-0" key={project.title}>
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[29rem] h-auto rounded-xl p-4 sm:p-6 border  ">
                            {/* <FollowerPointerCard title={<TitleComponent title={project.title} />} > */}
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {project.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {project.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-2 sm:mt-4">
                                    {/* <a href={project.url} target='_blank'> */}
                                    <Image
                                        src={project.image_data}
                                        height="1000"
                                        width="1000"
                                        className="h-56 w-full object-scale-down rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    {/* </a> */}
                                </CardItem>
                                <div className="flex justify-end items-center mt-0 sm:mt-5">
                                    <CardItem
                                        translateZ={20}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-base font-normal dark:text-white"
                                    >
                                        <a href={project.url} target='_blank'>View →</a>

                                    </CardItem>
                                </div>
                            {/* </ FollowerPointerCard> */}
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
    )
}
