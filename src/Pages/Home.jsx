import React, { Component } from 'react'
import Backimg from "../images/home-img.jpeg";

// import images in review 
import quoteimg from "../images/quote-img.png";
import Amir from "../images/Amir.png";
import Veronika from "../images/Veronika.png";
import Irina from "../images/Irina.png";

import Blog1 from "../images/blog-1.jpeg";
import Blog2 from "../images/blog-2.jpeg";
import Blog3 from "../images/blog-3.jpeg";

export default class Home extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                        .home{
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            background-size: cover;
                            background-position: center;
                        }
                        
                        .home .content{
                            max-width: 60rem;
                        }
                        
                        .home .content h3{
                            font-size: 6rem;
                            text-transform: uppercase;
                            color:#fff;
                        }
                        
                        .home .content p{
                            font-size: 2rem;
                            font-weight: lighter;
                            line-height: 1.8;
                            padding:1rem 0;
                            color:#eee;
                        }

                        .review .box-container{
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
                            gap:1.5rem;
                        }

                        .review .box-container .box{
                            border:var(--border);
                            text-align: center;
                            padding:3rem 2rem;
                        }

                        .review .box-container .box p{
                            font-size: 1.5rem;
                            line-height: 1.8;
                            color:#ccc;
                            padding:2rem 0;
                        }

                        .review .box-container .box .user{
                            height: 7rem;
                            width: 7rem;
                            border-radius: 50%;
                            object-fit: cover;
                        }

                        .review .box-container .box h3{
                            padding:1rem 0;
                            font-size: 2rem;
                            color:#fff;
                        }

                        .review .box-container .box .stars i{
                            font-size: 1.5rem;
                            color:var(--main-color);
                        }

                        .blogs .box-container{
                            display: flex;
                            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
                            gap:1.5rem;
                        }
                        
                        .blogs .box-container .box{
                            border:var(--border);    
                        }
                        
                        .blogs .box-container .box .image{
                            height: 25rem;
                            overflow:hidden;
                            width: 100%;
                        }
                        
                        .blogs .box-container .box .image img{
                            height: 100%;
                            object-fit: cover;
                            width: 100%;
                        }
                        
                        .blogs .box-container .box:hover .image img{
                            transform: scale(1.2);
                        }
                        
                        .blogs .box-container .box .content{
                            padding:2rem;
                        }
                        
                        .blogs .box-container .box .content .title{
                            font-size: 2.5rem;
                            line-height: 1.5;
                            color:#fff;
                        }
                        
                        .blogs .box-container .box .content .title:hover{
                            color:var(--main-color);
                        }
                        
                        .blogs .box-container .box .content span{
                            color:var(--main-color);
                            display: block;
                            padding-top: 1rem;
                            font-size: 2rem;
                        }
                        
                        .blogs .box-container .box .content p{
                            font-size: 1.6rem;
                            line-height: 1.8;
                            color:#ccc;
                            padding:1rem 0;
                        }
                        
                    `}
                </style>
                <section className="home" id="home" style={{ backgroundImage: `url(${Backimg})`}}>
                    <div className="content">
                        <h3>fresh coffee in the morning</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
                        <a href="#contact" class="btn">get yours now</a>
                    </div>
                </section>

                <section className="review" id="review">

                    <h1 className="heading"> customer's <span>review</span> </h1>

                    <div className="box-container">

                        <div className="box">
                            <img src={quoteimg} alt="" className="quote"/>
                                <p>Quality coffee! I always buy in this store and drink with pleasure every day!</p>
                                <img src={Amir} className="user" alt=""/>
                                    <h3>Zhumagali Amir</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>

                                <div className="box">
                                    <img src={quoteimg} alt="" className="quote" />
                                    <p>The most suitable kind of coffee for a perfect morning. Absolutely everyone in the family liked it! Chocolate-nutty notes and no bitterness.</p>
                                    <img src={Veronika} className="user" alt="" />
                                    <h3>Veronika Loenko</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>

                                <div className="box">
                                    <img src={quoteimg} alt="" className="quote" />
                                    <p>My coffee discovery - Do you, like me, think that hot, dark roasted coffee is a bitter pill that you want to drink with a liter of water? No, when you drink Melitta Bella Crema Espresso it is a noble, delicious, velvety drink.</p>
                                    <img src={Irina} class="user" alt="" />
                                    <h3>Korolyeva Irina</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>

                        </div>

                </section>

                <section className="blogs" id="blogs">

                    <h1 className="heading"> our <span>blogs</span> </h1>

                    <div className="box-container">

                        <div className="box">
                            <div className="image">
                                <img src={Blog1} alt=""/>
                            </div>
                            <div className="content">
                                <a href="#" className="title">tasty and refreshing coffee</a>
                                <span> 21st may, 2022</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Blog2} alt=""/>
                            </div>
                            <div className="content">
                                <a href="#" className="title">tasty and refreshing coffee</a>
                                <span> 21st may, 2021</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Blog3} alt=""/>
                            </div>
                            <div className="content">
                                <a href="#" className="title">tasty and refreshing coffee</a>
                                <span> 21st may, 2021</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                    </div>

                </section>
            </>
        )
    }
}
