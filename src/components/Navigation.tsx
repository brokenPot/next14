"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from '../../styles/navigation.module.css'

function Navigation() {
    const path = usePathname()

    return (
        <nav className={styles.navigation}>
            <ul >
                <li>
                    <Link href={'/'}>Home</Link> {path === "/" ? "♥" : "♡"}
                </li>
                <li>
                    <Link href={'/about-us'}>About</Link> {path === "/about-us" ? "♥" : "♡"}
                </li>
                <li>
                    <Link
                        href={'/about-us/company/jobs/sales'}>sales</Link>{path === "/about-us/company/jobs/sales" ? "♥" : "♡"}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;