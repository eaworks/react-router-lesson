import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutUs">About Us</Link>
        </nav>
    )
}