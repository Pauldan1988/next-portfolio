import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

const Layout = function ({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
        <head>
          <Navbar />
          <main className="flex flex-col h-screen bg-slate-400">
            {children}
          </main>
          <Footer />
        </head>
    </html>

  )
}

export default Layout

//comment