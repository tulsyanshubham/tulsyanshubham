"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import { FlipWords } from "./flip-words";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./button";
import { Tech } from "@/data/tech";
import { Icons } from "@/assets/assets";
import Link from "next/link";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [innerWidth, setInnerWidth] = useState(0);
    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);
    const firstRow = innerWidth > 700 ? products.slice(0, 5) : products.slice(0, 4);
    const secondRow = innerWidth > 700 ? products.slice(5, 10) : products.slice(4, 8);
    const thirdRow = innerWidth > 700 ? products.slice(10, 15) : products.slice(8, 12);
    const fourthRow = innerWidth > 700 ? products.slice(15, 20) : products.slice(12, 16);

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );

    if (innerWidth > 700) {
        var tx = [-50, 300];
        var txr = [50, -300];
        var ty = [-750, 200];
    }
    else {
        var tx = [0, 300];
        var txr = [0, -300];
        var ty = [-550, 0];
    }

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], tx), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], txr), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], ty), springConfig);

    return (
        <div
            ref={ref}
            className="h-[157vh] md:h-[270vh] pt-40 pb-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]" id="home"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 mb-10 md:mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-10 md:mb-20 space-x-10 md:space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse mb-10 md:mb-20 space-x-reverse space-x-10 md:space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                {innerWidth < 700 ? (<motion.div className="flex flex-row space-x-10 md:space-x-20 ">
                    {fourthRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>) : ""}
            </motion.div>
            <div className="z-10 absolute bottom-0 right-[33%] sm:right-[46%]">
                <Drawer>
                    <DrawerTrigger>
                        <div className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                View All
                            </div>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent className="pb-5">
                        <DrawerHeader>
                            <DrawerTitle className="text-center text-2xl sm:text-4xl">My Bagpack</DrawerTitle>
                            <DrawerDescription className="text-sm text-center sm:text-base">Here&apos;s what I have learnt so far</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex flex-wrap items-center justify-center">
                            {Tech.map((tech) => (
                                <Image
                                    key={tech.title}
                                    src={tech.thumbnail}
                                    alt={tech.title}
                                    height="50"
                                    width="50"
                                    className="m-4"
                                />
                            ))}
                        </div>
                        <DrawerFooter>
                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
};

export const Header = () => {
    const words = ["Full-Stack-Developer", "Software-Engineer", "UI/UX-Designer", "Problem-Solver"];
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-10 px-4 w-full left-0 top-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold dark:text-white text-center z-10">
                Shubham Tulsyan
            </h1>
            <h2 className="text-2xl md:text-5xl font-bold z-10">
                <FlipWords words={words} /> <br />
            </h2>
            <p className="max-w-2xl text-base md:text-xl mt-2 md:mt-8 dark:text-neutral-200 text-center z-10">
                Based in Bangalore with a strong foundation in technical skills and a passion for problem-solving.
            </p>
            <div className="flex items-center justify-center mt-2 z-10">
                {Icons.map((icon) => (
                    <Link href={icon.url} key={icon.title} target="_blank">
                        <Button className="rounded-full p-6 mx-2 bg-transparent" variant="outline">
                            <Image
                                src={icon.thumbnail}
                                alt="arrow-down"
                                height="25"
                                width="25"
                                className="dark:invert"
                            />
                        </Button>
                    </Link>
                ))}
            </div>
            <h2 className="text-xl md:text-3xl text-teal-600 font-semibold tracking-wide uppercase text-center mt-10 z-10">
                Here&apos;s what I have learned so far
            </h2>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-32 w-32 md:h-72 md:w-72 relative flex-shrink-0"
        >
            <Image
                src={product.thumbnail}
                height="600"
                width="600"
                className="object-contain object-left-top absolute h-full w-full inset-0 p-4 hover:opacity-50"
                alt={product.title}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 bg-white/30 pointer-events-none"></div>

            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-xl sm:text-4xl text-black dark:text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
