import React from 'react'
import '../posts/Posts.css'
import line from '../../assets/All blogs divider.svg'
import postimg from '../../assets/women.png'
import postpeople from '../../assets/people.png'
import imagep from '../../assets/images.png'
import photo from '../../assets/hallway.png'
const Posts = () => {
    return (
        <>
            <div className="container">
                <div className="posts">
                    <input placeholder="Searching..." type='search' className="post_input" />
                    <h1 className="post_h1">All posts</h1>
                    <img src={line} alt="" className='post_line' />
                    <div className="posts_boxes">
                        <div className="post">
                            <div className="post_img">
                                <img src={postimg} alt="img" className='post_img' />
                            </div>
                            <div className="abaout_post">
                                <h5 className="post_h5">Startup</h5>
                                <h2 className="post_h2">Design tips for designers that cover everything you need</h2>
                                <p className="post_p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post_img">
                                <img src={postpeople} alt="img" className='post_img' />
                            </div>
                            <div className="abaout_post">
                                <h5 className="post_h5">Business</h5>
                                <h2 className="post_h2">How to build rapport with your web design clients</h2>
                                <p className="post_p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post_img">
                                <img src={imagep} alt="img" className='post_img' />
                            </div>
                            <div className="abaout_post">
                                <h5 className="post_h5">Startup</h5>
                                <h2 className="post_h2">Logo design trends to avoid in 2022</h2>
                                <p className="post_p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post_img">
                                <img src={photo} alt="img" className='post_img' />
                            </div>
                            <div className="abaout_post">
                                <h5 className="post_h5">TECHNOLOGY</h5>
                                <h2 className="post_h2">8 Figma design systems you can download <br />for free today</h2>
                                <p className="post_p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post_img">
                                <img src={postimg} alt="img" className='post_img' />
                            </div>
                            <div className="abaout_post">
                                <h5 className="post_h5">ECONOMY</h5>
                                <h2 className="post_h2">Font sizes in UI design: The complete <br />guide to follow</h2>
                                <p className="post_p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts