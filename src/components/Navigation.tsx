"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function Navigation() {
    const path = usePathname()

    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link> {path === "/" ? "♥" : "♡"}
                </li>
                <li>
                    <Link
                        href={'/movies/1212'}>movies</Link>{path === "/movies/1212" ? "♥" : "♡"}
                </li>
                <li>
                    <Link href={'/about-us'}>About</Link> {path === "/about-us" ? "♥" : "♡"}
                </li>
                <li>
                    <Link
                        href={'/about-us/company/jobs/sales'}>sales</Link>{path === "/about-us/company/sales" ? "♥" : "♡"}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;