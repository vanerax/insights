
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { id: string, shipId: string }
}) {
    const router = useRouter()
    return (
        <>            
            {children}
        </>
    )
}