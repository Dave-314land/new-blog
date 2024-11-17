import { Button, Navbar } from 'flowbite-react'
import { FaMoon } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

import React from 'react'

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar fluid rounded>
        <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dave Piland</span>
        </Navbar.Brand>
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} href="/" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Home</Navbar.Link>
            <Navbar.Link active={path === "/about"} href="/about" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" >About</Navbar.Link>
            <Navbar.Link active={path === "/projects"} href="/projects" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Projects</Navbar.Link>
            <Navbar.Link active={path === "/contact"} href="/contact" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Contact</Navbar.Link>
            <Navbar.Link active={path === "/dashboard"} href="/dashboard" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Dashboard</Navbar.Link>
        </Navbar.Collapse>
        <div className="flex gap-2">
          <Button className="w-12 h-10 hidden sm:inline sm:pd" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button gradientMonochrome="teal" outline>Sign In</Button>
          </Link>
        </div>
        <Navbar.Toggle />
    </Navbar>
  )
}
