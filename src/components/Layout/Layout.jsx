import React from 'react'

import Header from '../Header/Header'
import Routers from '../../router/Router' 
import Footer from '../../../src/components/Footer/Footer' 

const Layout = () => {
  return (
    <>
    <Header/>
    <Routers/>
    <Footer/>
    </>
  )
}

export default Layout