import { NavLinks } from './ui/nav-links'
import './global.css'
import { VisualReport } from './ui/visual-report'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <NavLinks/>
                {/* Layout UI */}
                <main>
                    <VisualReport>
                        {children}
                    </VisualReport>
                </main>
            </body>
        </html>
    )
}