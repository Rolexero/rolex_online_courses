import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Rolex Courses</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>

        </li>c
      </ul>
    </div>
  )
}

export default HomePage 