"use client";

import Link from "next/link";

const Navbar = () => {
    const Nav = ["Home", "About", "Projects", "Training & Activities", "Certifications", "Other Interest"];
    return (
        <nav className="flex space-x-4">
        {Nav.map((item, idx) => (
            <Link href={`#${item}`} key={idx} className="hover:bg-gray-300 px-2 py-1 rounded hover:cursor-pointer duration-200">
            {item}
            </Link>
        ))}
        </nav>
    );
}


export default Navbar
