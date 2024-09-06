
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
        <>
            {children}
        </>
    )
}