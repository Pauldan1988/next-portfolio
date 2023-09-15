import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

const Layout = function({children}: React.PropsWithChildren) {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col h-screen">
          {children}
      </main>
      <Footer/>
      </>
  )
}

export default Layout
