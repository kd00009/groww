import React from 'react'
import ColorSlider from './ColorSlider'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <ColorSlider />
        <Outlet />
    </main>
  )
}

export default Layout