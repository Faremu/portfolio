"use client";

const Navbar = () => {
    const Nav = ["Home", "About", "Projects"];
    return (
        <nav className="flex space-x-4">
        {Nav.map((item, idx) => (
            <button key={idx} className="hover:bg-gray-300 px-2 py-1 rounded hover:cursor-pointer">
            {item}
            </button>
        ))}
        </nav>
    );
}


export default Navbar
