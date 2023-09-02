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
        <>
            <div>
                <div>
                    <Link href="/">
                        <h1>Capture</h1>
                    </Link>
                    <ul>
                        <li>
                            <Link href="Home"></Link>
                        </li>
                        <li>
                            <Link href="Projects"></Link>
                        </li>
                        <li>
                            <Link href="Contact Me"></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

