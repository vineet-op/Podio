"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/app/components/ui/grid-pattern";
import Link from "next/link";

export function Background() {
    return (
        <div className="relative flex flex-col size-full bg-black h-screen items-center justify-center overflow-hidden rounded-lg">
            <div className="flex flex-col gap-10 text-center">
                <p className="z-10 -mt-30 font-semibold whitespace-pre-wrap tracking-tighter text-white
                    text-5xl lg:text-7xl text-wrap text-center
                ">
                    Turn PDFs into Podcasts with <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Podio!</span>
                </p>
                <p className="text-white font-thin text-2xl text-center w-50 text-wrap px-10">
                    Effortlessly transform text into immersive audio for learning, work, or leisure.
                </p>
            </div>
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="mt-20">
                <Link href={"/form"}>
                    <button className="p-2 w-96  h-fit z-10 rounded-2xl text-white text-lg hover:border border-pink-500   translate-x-2 font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Get Started</button>
                </Link>
            </div>
        </div>
    );
}
