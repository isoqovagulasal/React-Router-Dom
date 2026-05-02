import React from 'react'
import './Search.css'
import boximg from '../../assets/women.png'
import Aos from 'aos';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Search = () => {

    useEffect(() => {
        Aos.init({
            duration: 200,
            once: true
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="searching">
                    <input placeholder="Searching..." type='search' className="input" />
                    <div className="boxes">
                        <div data-aos="zoom-in-right" className="box">
                            <div className="box_img">
                                <img src={boximg} alt="img" />
                            </div>
                            <div className="abaout_box">
                                <h5 className="box_h5">Business</h5>
                                <h2 className="box_h2">Top 6 free website mockup tools 2022</h2>
                                <p className="box_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="box">
                            <div className="box_img">
                                <img src={boximg} alt="img" />
                            </div>
                            <div className="abaout_box">
                                <h5 className="box_h5">Business</h5>
                                <h2 className="box_h2">Step-by-step guide to choosing great font pairs</h2>
                                <p className="box_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="box">
                            <div className="box_img">
                                <img src={boximg} alt="img" />
                            </div>
                            <div className="abaout_box">
                                <h5 className="box_h5">Business</h5>
                                <h2 className="box_h2">Ten free foogle fonts that you should use</h2>
                                <p className="box_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="box">
                            <div className="box_img">
                                <img src={boximg} alt="img" />
                            </div>
                            <div className="abaout_box">
                                <h5 className="box_h5">Business</h5>
                                <h2 className="box_h2">What did I learn from doing 50+ design sprints?</h2>
                                <p className="box_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search