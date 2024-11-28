"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "skills",
        path: "/skills",
    },
    {
        name: "experience",
        path: "/experience",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
    const pathname = usePathname();

    const handleScroll = (e, link) => {
        if (link.path.startsWith("#")) {
            e.preventDefault();
            const sectionId = link.path.slice(1); // Remove '#' from the path
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path === pathname && "text-amber-400 border-b-2 border-amber-400"} capitalize 
                    font-medium hover:text-amber-400 transition-all`}>
                    {link.name}
                </Link>
            );
        })}
    </nav>
    )
}

export default Nav