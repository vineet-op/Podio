"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/app/components/ui/grid-pattern";
import Link from "next/link";
import { motion } from "framer-motion";

export function Background() {
    const transition = {
        duration: 0.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <div className="relative flex flex-col bg-black h-screen items-center justify-center overflow-hidden rounded-lg">
            <motion.div
                className="flex flex-col gap-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
            >
                <motion.div
                    className="z-10 -mt-30 font-semibold whitespace-normal tracking-tighter text-white text-5xl lg:text-6xl text-center"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={transition}
                >
                    Transform PDFs into Engaging Audio with {" "}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        Podio!
                    </span>
                </motion.div>
                <motion.div
                    className="text-white font-thin text-2xl text-center px-10"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={transition}
                >
                    Effortlessly transform text into immersive audio for learning, work, or leisure.
                </motion.div>
            </motion.div>
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
                )}
            />
            <motion.div className="mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}>
                <Link href={"/form"}>
                    <button className="p-2 w-96 h-fit z-10 rounded-2xl text-white text-lg hover:border border-pink-500 translate-x-2 font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        Get Started
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}
