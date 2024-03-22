"use client"
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"

export default function Header() {

    const { theme, setTheme } = useTheme()
    
    return (
        <header className="relative z-50 leading-none font-medium tracking-[-0.41px] ">
            <div className="relative z-10">
                <nav className="relative flex items-center justify-end gap-8">
                    
                    <div className="flex justify-end text-sm">
                        <a href="/" className="hover:underline">
                            Home
                        </a>
                    </div>

                    <div className="flex justify-end text-sm">
                        <a href="/now" className="hover:underline">
                            Now
                        </a>
                    </div>

                    <div className="flex justify-end text-sm">
                        <a href="/project" className="hover:underline">
                            Project
                        </a>
                    </div>

                    <div className="flex justify-end text-sm">
                        <a href="/blog" className="hover:underline">
                            Blog
                        </a>
                    </div>

                    <div className="flex justify-start text-sm">
                        <Button variant="outline" size="icon" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>

                </nav>
            </div>
        </header>
    );
}
