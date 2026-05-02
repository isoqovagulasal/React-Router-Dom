import React from 'react'
import '../end/End.css'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Instagramm from '../../assets/instagram.png'
import In_logo from '../../assets/in.png'
const End = () => {
  return (
    <>
      <div className="container">
        <div className="the-end">
          <div className="the">
            <p className="end_p">Finstreet 118 2561 Fintown</p>
            <p className="end_p">Hello@finsweet.com  020 7993 2905</p>
          </div>
          <div className="end">
            <div className="facebook">
             <img src={Facebook} alt="" />
            </div>
            <div className="twitter">
              <img src={Twitter} alt="" />
            </div>
            <div className="instagramm">
              <img src={Instagramm} alt="" />
            </div>
            <div className="in">
             <img src={In_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default End