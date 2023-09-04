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

const Navbar: React.FC = function() {
    return (
        <header>
            <nav className="Nav">
                <ul className="flex flex-col gap-2 items-end justify-end">
                {navLinks.map(navlink => (
                    <li key={navlink.href}>
                        <Link href={navlink.href}>
                            {navlink.text}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar