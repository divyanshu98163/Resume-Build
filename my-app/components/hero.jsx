"use client";

import { Section } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            }
        };
        window.addEventListener("scroll",handleScroll);
    }, []);

    return (
        <section className="w-full pt-36 md:pt-48 pb-10">
            <div className="space-y-6 text-center">
                <div className="space-y-6 mx-auto">
                    <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
                        Your AI Career Coach For
                        <br />
                        Professional Success
                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Advance your career with personalized guidance, interview prep, and
                        AI-powered tools for job success.
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>

                    <Link href="/dashboard">
                        <Button size="lg" className="px-8" variant="outline">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>

            <div ref={imageRef} className="hero-image mt-10">
                <Image
                    src="/banner.jpeg"
                    width={1280}
                    height={720}
                    alt="Banner"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                />
            </div>
        </section>
    );
}
