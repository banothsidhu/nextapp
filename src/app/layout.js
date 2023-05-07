import './globals.css'
import Header from './components/Header'
import {Mulish} from 'next/font/google'

const mulish = Mulish ({
  weight:'400',
  subsets:['latin'],
  display:"swap"
})

export const metadata = {
  title:"Next.js",
}

export default function RootLayout ({children}){
  return (
    <html lang='en' className={mulish.className}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}