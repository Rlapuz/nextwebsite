import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import { ThemeProvider } from './context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Raymund',
  description: 'Practice App Routing',
}

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container max-w-1366 min-h-screen mx-auto px-60 flex flex-col justify-between'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
