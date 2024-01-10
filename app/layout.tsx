import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='box-border'>
      <body className={`${lato.className} subpixel-antialiased`}>{children}</body>
    </html>
  )
}
