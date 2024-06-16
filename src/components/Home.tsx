"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import {Tech} from "@/data/tech";

export function Home() {
  return(
    <>
     <HeroParallax products={Tech} />
    </>
  );
}
