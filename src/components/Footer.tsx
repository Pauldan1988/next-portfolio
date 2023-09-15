import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="flex flex-row gap-2 align-right">
            <div>
                <a className="flex flex-row">
                    <Link href="https://www.github.com/Pauldan1988">
                        <Image
                            src="/github.png"
                            alt="Github Logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </a>
                <a className="flex flex-row">
                    <Link href="https://www.linkedin.com/in/paul-dan-9a0b6b1b9/">
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn Logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </a>
                <a className="flex flex-row">
                    <Link href="https://www.gmail.com/pdangelo1988@gmail.com">
                        <Image
                            src="/gmail.png"
                            alt="Gmail Logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </a>
            </div>
        </footer>
    )
}