import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='px-5 sm:px-8 lg:px-12 xl:px-20 min-h-screen'>
        <Head>
            <title>Real Estate App</title>
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='py-4 md:py-10'>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout