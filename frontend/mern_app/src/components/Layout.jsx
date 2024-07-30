import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from '../pages/Login'
import CreatePost from '../pages/CreatePost'

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <CreatePost/> */}
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
