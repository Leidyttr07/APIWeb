import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube Clone',
  icons: {
    icon: 'https://www.youtube.com/s/desktop/12d6b690/img/favicon_32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={roboto.className} style={{ margin: 0, padding: 0, backgroundColor: '#0f0f0f' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
