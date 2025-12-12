"use client";
import React from "react";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";
import { FileText, LayoutDashboard, StarsIcon } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"            // <-- अगर filename अलग है तो बदल दें
                        alt="Site logo — Industry Insight"
                        width={200}
                        height={60}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <button type="button" className="px-3 py-1 rounded-md border hover:bg-muted transition">
                                Sign in
                            </button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        {/* Dashboard */}
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-muted transition"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            <span className="hidden md:block">Industry Insight</span>
                        </Link>

                        {/* Growth Tools dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    type="button"
                                    aria-label="Open menu"
                                    className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-muted transition"
                                >
                                    <StarsIcon className="h-4 w-4" />
                                    <span className="hidden md:block">Growth Tools</span>
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent side="bottom" align="end" className="w-44">
                                <DropdownMenuItem asChild>
                                    <Link href="/resume" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span>Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/ai-cover-letter" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span>Cover Letter</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/interview" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span>Interview Prep</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold",
                                },
                            }}
                            afterSignOutUrl="/"
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
}
