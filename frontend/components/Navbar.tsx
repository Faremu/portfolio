"use client";

import Link from "next/link";

const Navbar = () => {
    const Nav = ["Home", "About", "Projects", "Training & Certifications", "Other Interest"];
    return (
        <nav className="flex space-x-4">
        {Nav.map((item, idx) => (
            <Link href={`#${item}`} key={idx} className="hover:bg-gray-500 text-white px-2 py-1 duration-300 hover:cursor-pointer">
            {item}
            </Link>
        ))}
        </nav>
    );
}


export default Navbar
