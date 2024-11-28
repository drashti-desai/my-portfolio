"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

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

const MobileNav = () => {
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
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-amber-400"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            D<span className="text-amber-400">Code.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={`${
                                    link.path === pathname &&
                                    "text-amber-400 border-b-2 border-amber-400"
                                } text-xl capitalize hover:text-amber-400 transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav