import React from 'react'
import Logo from '../../assets/Logo.svg'
import '../../components/header/Header.css'
import { Link, Links } from 'react-router-dom'
import Container from "./../../shared/Container"
const Header = () => {
    return (
        <header>
            <Container>
                <div className="header_wrapper">

                    <div className="left_header">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="right_header">
                        <div className="links">
                            <Link to="/" className='link'>Home</Link>
                            <Link to="/blog" className='link'>Blog</Link>
                            <Link to="/about-us" className='link'>About Us</Link>
                            <Link to="/" className='link'>Register</Link>
                        </div>
                        <div className="right_btn">
                             <Link to={'/login'}  className="btn_login">Login</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>

    )
}

export default Header