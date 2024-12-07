import Link from 'next/link';
import React from 'react';
import LogoImg from '@/assets/logo.jpg';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image
                        src={LogoImg}
                        alt='robot with food'
                        priority
                        />
                    MealMind
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={'/user'}>User</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/meals'}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/suggestions'}>Suggestions</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
