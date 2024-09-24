"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/locale-switcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Types
interface NavLinkProps {
    href: string;
    label: string;
}

interface Document {
    startViewTransition?: (callback: () => void) => void;
}

// Subcomponents
function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link href={href} className="hover:underline">
            {label}
        </Link>
    );
}

// Helpers
function switchTheme(theme: string, setTheme: (theme: string) => void) {
    setTheme(theme === "light" ? "dark" : "light");
}

function toggleTheme(theme: string, setTheme: (theme: string) => void) {
    const documentWithTransition = document as Document;
    if (!documentWithTransition.startViewTransition) {
        switchTheme(theme, setTheme);
    } else {
        documentWithTransition.startViewTransition(() => switchTheme(theme, setTheme));
    }
}

// Exported Component
export default function Header() {
    const { theme, setTheme } = useTheme();
    const t = useTranslations("Nav");
    const menuItems = [
        { key: "home", href: "/" },
        { key: "project", href: "/project" },
        { key: "blog", href: "/blog" }
    ];

    return (
        <header className="relative z-50 leading-none font-medium tracking-[-0.41px]">
            <div className="relative z-10">
                <nav className="relative flex items-center justify-end gap-8">
                    {menuItems.map(({ key, href }) => (
                        <NavLink key={key} href={href} label={t(key)} />
                    ))}
                    <Button variant="outline" size="icon" onClick={() => toggleTheme(theme ?? 'default', setTheme)}>
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">{t("toggleTheme")}</span>
                    </Button>
                    <LocaleSwitcher />
                </nav>
            </div>
        </header>
    );
}