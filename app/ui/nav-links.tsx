'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import styles from './styles.module.css'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
        About
      </Link>

      <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
        Dashboard
      </Link>

      <Link className={`link ${pathname === '/location' ? 'active' : ''}`} href="/location">
        Location
      </Link>

      <Link className={`link ${pathname === '/resource' ? 'active' : ''}`} href="/resource">
        Resource
      </Link>
    </nav>
  )
}