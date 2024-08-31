'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Map() {
  const pathname = usePathname()
 
  return (
    <section>
      <h2>Map Section @map.resource</h2>
        <ul>
            <li>
                <Link href="/resource/1">res 1</Link>
            </li>
            <li>
              <Link href="/resource/2">res 2</Link>
            </li>
            <li>
              <Link href="/resource/3">res 3</Link>
            </li>
            <li>
                <Link href="/location/1">loc 1</Link>
            </li>
            <li>
              <Link href="/location/2">loc 2</Link>
            </li>
            <li>
              <Link href="/location/3">loc 3</Link>
            </li>
        </ul>
    </section>
  )
}