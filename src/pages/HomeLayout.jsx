import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import End from '../components/end/End'
import Container from '../shared/Container'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* <End /> */}
            
        </>
    )
}

export default HomeLayout