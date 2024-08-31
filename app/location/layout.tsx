
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    return (
        <div>
            <h2>
                <span>Location Section</span>
                {/* <Link href="..">up</Link> */}
                <button type="button" onClick={() => router.push("..")}>close</button>
            </h2>
            
            <article>{children}</article>
        </div>
    )
}