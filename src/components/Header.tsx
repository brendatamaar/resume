"use client"
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from '@/components/locale-switcher';
import { useTheme } from "next-themes"
import Link from "next/link";

export default function Header() {

    const { theme, setTheme } = useTheme()

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    const toggleTheme = () => {
        const documentWithTransition = document as Document & { startViewTransition?: (callback: () => void) => void };

        if (!documentWithTransition.startViewTransition) {
            switchTheme();
        } else {
            documentWithTransition.startViewTransition(() => switchTheme());
        }
    };

    return (
        <header className="relative z-50 leading-none font-medium tracking-[-0.41px] ">
            <div className="relative z-10">
                <nav className="relative flex items-center justify-end gap-8">

                    <div className="flex justify-end">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </div>

                    <div className="flex justify-end">
                        <Link href="/now" className="hover:underline">
                            Now
                        </Link>
                    </div>

                    <div className="flex justify-end">
                        <Link href="/project" className="hover:underline">
                            Project
                        </Link>
                    </div>

                    <div className="flex justify-end">
                        <Link href="/blog" className="hover:underline">
                            Blog
                        </Link>
                    </div>

                    <div className="flex justify-start">
                        <LocaleSwitcher />
                    </div>

                    <div className="flex justify-end">
                        <Button variant="outline" size="icon" onClick={toggleTheme}>
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
