import React from 'react'
import Navbar from '../components/Navbar'

const Layout = function({children}: React.PropsWithChildren) {
  return (
      <>
      <Navbar/>
      <main>
          {children}
      </main>
      {/* <Footer/> */}
      </>
  )
}

export default Layout
