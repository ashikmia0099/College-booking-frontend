'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '../../../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../../components/ui/sheet'
import { Input } from "@/components/ui/input"

import logo from '../../../../public/images/logo.png'
import { IoMenu } from "react-icons/io5"
import { RxCrossCircled } from 'react-icons/rx'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useAuth } from '../../../../AuthContext/AuthContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState("bottom")
  const pathname = usePathname()
  const { user, LogOut } = useAuth()

  // Common nav links
  const commonLinks = [
    { name: 'Home', href: '/' },
    { name: 'Colleges', href: '/Colleges' },
    { name: 'Admission', href: '/Admission' },
    
    { name: 'About Us', href: '/About' },
    { name: 'Contact Us', href: '/Contact' },
    
  ]

  // Links only for logged-in users
  const adminLinks = [
    { name: 'Add College', href: '/All_College_Deshboard' },
    { name: 'My College', href: '/My_College' },
   
  ]

  const links = user ? [...commonLinks, ...adminLinks] : commonLinks

  return (
    <header className="sticky top-0 z-50 bg-[#E9F6FF]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[76px] px-4 lg:px-[88px]">

        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" className="w-20 h-full" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[16px] ${isActive ? 'text-[#007DD0] font-bold' : 'text-[#626262] font-[400] hover:text-blue-600'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Input type="text" placeholder="Search Here" />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="border border-[#A5D3F1] bg-white text-[#007DD0] rounded-full h-8 px-3">
                  {user.displayName || "Profile"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white text-black">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="top">{user.displayName || "No Name"}</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">{user.email}</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right" onClick={LogOut}>Logout</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/Auth">
              <Button className="border border-[#A5D3F1] bg-white text-[#007DD0] rounded-full h-8 px-3">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="border border-[#A5D3F1] rounded-md">
                <IoMenu className="text-black text-4xl" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#E9F6FF] text-[#007DD0] w-[80%] pl-5 pt-5">
              <div className="flex justify-between items-center mb-6">
                <button onClick={() => setOpen(false)} className="pr-2">
                  <RxCrossCircled className="text-3xl text-[#007DD0]" />
                </button>
              </div>
              <ul className="space-y-3 mt-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#007DD0] text-lg font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
