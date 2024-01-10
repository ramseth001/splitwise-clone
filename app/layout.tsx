import './globals.css'
import { lato } from './ui/fonts'

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
