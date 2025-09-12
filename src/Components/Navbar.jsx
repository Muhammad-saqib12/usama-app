import { Hamburger, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    
    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <nav className='bg-gray-700 text-white relative'>
            <div className='flex justify-between items-center px-4 py-3'>
                {/* Logo */}
                <div className='text-2xl font-bold'>Raja Usama</div>
                
                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-8'>
                    <div className='flex gap-6'>
                        <Link to='/' className='hover:text-blue-600 transition-colors'>Home</Link>
                        <Link to='/about' className='hover:text-blue-600 transition-colors'>About</Link>
                        <Link to='/contact' className='hover:text-blue-600 transition-colors'>Contact</Link>
                    </div>
                    <div className='flex gap-3'>
                        <Link to='/login'>
                            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors'>Login</button>
                        </Link>
                        <Link to='/visit'>
                            <button className='px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors'>Visit</button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='p-2'>
                        {open ? <X className='w-6 h-6' /> : <Hamburger className='w-6 h-6' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className='md:hidden bg-gray-800 border-t border-gray-600'>
                    <div className='px-4 py-4 space-y-4'>
                        <div className='space-y-3'>
                            <Link 
                                to='/' 
                                className='block py-2 hover:text-blue-600 transition-colors'
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to='/about' 
                                className='block py-2 hover:text-blue-600 transition-colors'
                                onClick={() => setOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                to='/contact' 
                                className='block py-2 hover:text-blue-600 transition-colors'
                                onClick={() => setOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                        <div className='pt-4 border-t border-gray-600 space-y-3'>
                            <Link to='/login' onClick={() => setOpen(false)}>
                                <button className='w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors'>
                                    Login
                                </button>
                            </Link>
                            <Link to='/visit' onClick={() => setOpen(false)}>
                                <button className='w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors'>
                                    Visit
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
