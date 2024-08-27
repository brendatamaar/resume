'use client';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import clsx from 'clsx';
import { useTransition } from 'react';
import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale';

type Props = {
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
    label: string;
    placeholder: string;
};

export default function LocaleSwitcherSelect({
    defaultValue,
    items,
    label,
    placeholder
}: Props) {
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return (
        <div className="relative">
            <Select defaultValue={defaultValue} onValueChange={onChange}>
                <SelectTrigger
                    aria-label={label}
                    className="w-[180px]"
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                        >
                            <span>{item.label}</span>
                        </SelectItem >
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}