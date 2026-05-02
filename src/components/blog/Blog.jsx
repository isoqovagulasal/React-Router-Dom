import React from 'react'
import '../blog/Blog.css'
import blogimg from './../../assets/eyeglasses.png'
import profile from './../../assets/image (8).svg'
import Container from './../../shared/Container'
const Blog = () => {
    return (
        <>
            <Container>
                <div className="blog">
                    <h1 href="#" className="blog_h1">Blog</h1>
                    <img src={blogimg} alt="img" data-aos="flip-left" className="blog_img" />
                    <div className="blog_abaut">
                        <div className="blog_profile">
                            <div className="profile_img">
                                <img src={profile} alt="img" />
                            </div>
                            <div className="abaut_profile">
                                <h6 className="blog_h6">Andrew Jonson</h6>
                                <p className="blog_p">Posted on 27th January 2022</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in">
                            <h1 className="blog_h1">Step-by-step guide to choosing great <br />font pairs</h1>
                            <h5 className="blog_h5">Startup (#business, #screen, #life)</h5>
                            <p className="blog_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                            <p className="blog_p p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog