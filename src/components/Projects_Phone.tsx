"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { project_type } from "@/types";

export default function Projects_Phone({data: ProjectsArr}: {data: project_type[]}) {
  const [active, setActive] = useState<(typeof ProjectsArr)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
                bottom : -10,
              }}
              animate={{
                opacity: 1,
                bottom : 15,
              }}
              exit={{
                opacity: 0,
                bottom : -10,
                transition: {
                  duration: 0.1,
                },
              }}
              className="flex absolute right-5 lg:hidden items-center justify-center bg-gray-700 rounded-xl h-14 w-[90vw] text-white"
              onClick={() => setActive(null)}
            >
              <span className="text-xl">Close</span>
              {/* <CloseIcon /> */}
              {/* <button className="text-black dark:text-white">X</button> */}
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="">
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.image_data}
                  alt={active.title}
                  className="w-full h-70 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.url}
                    target="_blank"
                    className="px-4 py-2 mt-4 text-base rounded-full font-bold bg-green-700 text-white"
                  >
                    View
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-sm lg:text-base h-[38vh] text-justify md:h-fit px-3 pb-3 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] leading-relaxed"
                  >
                    {active.content ? active.content : active.description}
                    {/* {typeof active.content === "function"
                      ? active.content()
                      : active.content} */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {ProjectsArr.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row md:flex-col ">
              <motion.div layoutId={`image-${card.title}-${id}`} className="w-[80%]">
                <Image
                  width={140}
                  src={card.image_data}
                  alt={card.title}
                  className=" rounded-lg object-contain object-center"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 text-left md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-sm dark:text-neutral-400 text-left md:text-center"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {/* <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              Visit
            </motion.button> */}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white bg-gray-500 text-2xl"
    >
      {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" /> */}
      Close
    </motion.svg>
  );
};