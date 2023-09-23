import React from "react";
import Link from "next/link";

interface NavLink {
    href: string,
    text: string
}

const navLinks: NavLink[] = [
    {
        href: "/about-me",
        text: "About Me"
    },
    {
        href: "/projects",
        text: "Projects"
    },
    {
        href: "/contact",
        text: "Contact Me"
    }
]

const Navbar: React.FC = function () {
    return (
        <header>
            <nav className="Nav">
                <div className="flex flex-row-reverse bg-slate-400 justify-center   gap-2 py-10 pe-30 align-items-center">
                    <ul className="flex space-x-10 text-2xl">
                        {navLinks.map(navlink => (
                            <li key={navlink.href}>
                                <Link href={navlink.href}>
                                    {navlink.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar