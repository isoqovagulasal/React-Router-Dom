import React, { useEffect } from 'react'

import './../cards/Cards.css'

import icon from './../../assets/Icon.svg'
import raketa from './../../assets/raketa.png'
import economy from './../../assets/economy.svg'
import business from './../../assets/business-and-trade.svg'

import Container from './../../shared/Container'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Cards = () => {

    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true
        })
    }, [])

    return (
        <>
            <Container>
                <div className="catagory">
                    <h3 className="catagory_h3">Choose A Catagory</h3>

                    <div className="cards">

                        <div data-aos="fade-right" className="card">
                            <img src={icon} alt="icon" />
                            <h6 className="card_h6">Business</h6>
                            <p className="card_p">
                                Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit.
                            </p>
                        </div>

                        <div data-aos="fade-right" className="card">
                            <img src={raketa} alt="icon" />
                            <h6 className="card_h6">Startup</h6>
                            <p className="card_p">
                                Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit.
                            </p>
                        </div>

                        <div data-aos="fade-left" className="card">
                            <img src={economy} alt="icon" />
                            <h6 className="card_h6">Economy</h6>
                            <p className="card_p">
                                Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit.
                            </p>
                        </div>

                        <div data-aos="fade-left" className="card">
                            <img src={business} alt="icon" />
                            <h6 className="card_h6">Technology</h6>
                            <p className="card_p">
                                Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit.
                            </p>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cards