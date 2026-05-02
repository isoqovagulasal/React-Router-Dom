import React from 'react'
import '../popular/Popular.css'
import img from '../../assets/women.png'
import people from '../../assets/people.png'
import project from '../../assets/images.png'
import Aos from 'aos';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Popular = () => {

    useEffect(() => {
        Aos.init({
            duration: 200,
            once: true
        })
    }, [])
    return (
        <>

            <div className="popular">
                <h2 className="popular_h2">Popular blogs</h2>
                <div className="popular_cards">
                    <div data-aos="zoom-in-up"
                        className="popular_card">
                        <img src={img} alt="img" />
                        <p className="popular_p">By <span className="popular_span">John Doe</span>   l   Aug 23, 2021 </p>
                        <h6 className="popular_h6">A UX Case Study Creating a <br />Studious Environment for <br />Students: </h6>
                        <p className="p_popular">Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div data-aos="zoom-in-up"
                        className="popular_card">
                        <img src={people} alt="img" className='project' />
                        <p className="popular_p">By <span className="popular_span">John Doe</span>   l   Aug 23, 2021 </p>
                        <h6 className="popular_h6">A UX Case Study Creating a <br />Studious Environment for <br />Students: </h6>
                        <p className="p_popular">Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div data-aos="zoom-in-up" className="popular_card">
                        <img src={project} alt="img" className='project' />
                        <p className="popular_p">By <span className="popular_span">John Doe</span>   l   Aug 23, 2021 </p>
                        <h6 className="popular_h6">A UX Case Study Creating a <br />Studious Environment for <br />Students: </h6>
                        <p className="p_popular">Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Popular