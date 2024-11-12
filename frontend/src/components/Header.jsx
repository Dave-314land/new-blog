import { Button, Navbar } from 'flowbite-react'

import React from 'react'

export default function Header() {
  return (
    <Navbar fluid rounded>
        <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dave Piland</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Button gradientMonochrome="teal">Sign Up</Button>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/projects">Projects</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
            <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
