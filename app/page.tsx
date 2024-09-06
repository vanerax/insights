'use client'

// import type { Metadata } from 'next'
import { NavLinks } from './ui/nav-links'
import { useState } from 'react'

// export const metadata: Metadata = {
//     title: '123Next.js'
// }

export default function Page() {
    const [count, setCount] = useState(0);

    return (
      <div>
          <section id="mainpage">
              {/* <h1>Hello, Home page!</h1> */}
          </section>
          {/* <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button> */}
      </div>
    )
}
