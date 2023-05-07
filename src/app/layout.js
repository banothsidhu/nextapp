import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix Clone',
  description: 'This is a clone of Netflix. Made by B.Sidharth',
}

const Header = dynamic(() => import('./components/Header'), { ssr: false })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header></Header>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
