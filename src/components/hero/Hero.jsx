import '../hero/Hero.css'
import Aos from 'aos';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Hero = () => {

  useEffect(() => {
    Aos.init({
      duration: 200,
      once: true
    })
  }, [])


  return (
    <>
      <div className="bg_img" >
        <div  data-aos="zoom-in-up" className="abaut_project">
          <p className="hero_p">Posted on startup</p>
          <h3 className="h3">Step-by-step guide to choosing <br />great font pairs</h3>
          <p className="p_hero">By <span className='span'>James West </span> |  May 23, 2022 </p>
          <p className="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button className="hero_btn">Read More </button>
        </div>
      </div>
    </>

  )
}



export default Hero