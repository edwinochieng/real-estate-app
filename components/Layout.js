import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title>Real Estate App</title>
        </Head>
        <header>
            Navbar
        </header>
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default Layout