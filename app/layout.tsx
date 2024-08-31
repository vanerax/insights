import { NavLinks } from './ui/nav-links'
import './global.css'
import {Map} from './ui/map'

export default function RootLayout({
    children, 
    map2: map
}: {
    children: React.ReactNode,
    map2: React.ReactNode
}) {
    return (
      <html lang="en">
        <body>
          <NavLinks/>
          {/* Layout UI */}
          <main>
            <Map></Map>
            {/* {map} */}
            {children}
          </main>
        </body>
      </html>
    )
}