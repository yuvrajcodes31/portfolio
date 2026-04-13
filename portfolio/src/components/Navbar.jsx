import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import { Menu, X } from 'lucide-react'


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
    { name: "GitHub", href: "https://github.com/yuvrajcodes31", target: "_blank" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/yuvraj-adwal-39800b401", target: "_blank" },
]

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "py-4 bg-background/70 backdrop-blur-md shadow-xs" : "py-5"}`}>
            <div className="container flex items-center justify-between pr-20">
                <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Yuvraj</span> Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} target={item.target} className='text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>
                    ))}
                </div>

            {/* mobile nav */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className='md:hidden p-2 text-foreground z-60'>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>

            </div>

            <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300  ${isMenuOpen ? "opacity-100 pointer-events-auto h-screen" : "opacity-0 pointer-events-none"}`}>

                <div className='flex flex-col space-y-8'>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300' onClick={() => setIsMenuOpen(false)}>{item.name}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Navbar