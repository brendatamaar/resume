"use client"
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";


export default function Header() {


    return (
        <header className="relative z-50 leading-none font-medium tracking-[-0.41px] ">
            <div className="relative z-10">
                <nav className="relative flex items-end justify-end gap-8">
                    {/*<div className="flex items-center justify-end lg:justify-center flex-1 text-sm">
                         <Button variant="outline" size="icon" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button> 
                    </div>*/}

                    <div className="flex justify-end text-sm">
                        <a href="/" className="hover:underline">
                            Home
                        </a>
                    </div>

                    <div className="flex justify-end text-sm">
                        <a href="/blog" className="hover:underline">
                            Blog
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
