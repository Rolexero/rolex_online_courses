"use client"

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [first, setfirst] = useState("")
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>Rolex Online Courses</Link>
        </div>
        <div className='links flex items-center justify-center'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
