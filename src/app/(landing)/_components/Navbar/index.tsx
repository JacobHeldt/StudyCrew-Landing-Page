'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSection } from '../SectionContext'
import Logo from 'public/assets/LogoIcon.svg'
import { FaBars } from 'react-icons/fa'
import Navigation from '../Navigation'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const { activeSection, setActiveSection } = useSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(0)

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const navLinks = [
    { id: 'mission', label: 'Mission' },
    { id: 'features', label: 'Features' },
    { id: 'project', label: 'Project' },
    { id: 'development', label: 'Development' }
  ]

  const navLinkStyle = `text-md font-semibold color-primary-950 transition duration-200 ease-in-out hover:text-primary-500`
  const navLinkStyleDesktop = `w-full text-center ${navLinkStyle}`
  const navLinkStyleMobile = `ml-7 text-left ${navLinkStyle}`

  return (
    <div className='fixed top-0 left-0 w-screen z-50'>
    <div className="md:py-3.5 py-2 bg-[#FFEDCC] text-[#0B1B33] flex items-center justify-center text-center z-50">
      <p className="text-sm md:text-base mx-4 md:mx-12">
        Unfortunately, this project was not completed due to development challenges and declining activity in the open-source repository.
      </p>
    </div>
      {/* Navbar */}
      <nav
        className="bg-white border-b border-gray-200 py-3 flex items-center justify-between md:grid md:grid-cols-2"
      >
        {/* Logo */}
        <div className="ml-7 md:ml-32">
          <Link className="flex items-center gap-3 cursor-pointer" href="/">
            <Image alt="Logo" src={Logo as string} className="h-9 w-auto" />
            <h6 className="text-lg font-semibold">StudyCrew</h6>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:grid grid-cols-4 gap-auto mr-32 text-right items-center">
          <Navigation
            linkClassName={`${navLinkStyleDesktop} cursor-pointer`}
            isActiveClassName="text-primary-500"
          />
        </div>

        {/* Hamburger Menu */}
        <div
          className="mr-7 md:hidden visible cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="z-40 bg-white border-b border-gray-200 py-6 grid grid-cols-1 gap-2 relative text-left"
          style={{ top: menuTop }}
        >
          <Navigation
            linkClassName={`${navLinkStyleMobile} cursor-pointer`}
            isActiveClassName="text-primary-500"
          />
        </div>
      )}
    </div>
  )
}

export default Navbar
