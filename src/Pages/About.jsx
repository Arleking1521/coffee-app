import React, { Component } from 'react'
import about_img from '../images/about-img.jpeg'

export default class About extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                    .about .row{
                        display: flex;
                        align-items: center;
                        background: #13131a;
                        flex-wrap: wrap;
                    }
                    
                    .about .row .image{
                        flex:1 1 45rem;
                    }
                    
                    .about .row .image img{
                        width: 100%;
                    }
                    .about .row .content{
                        flex:1 1 45rem;
                        padding:2rem;
                    }
                    
                    .about .row .content h3{
                        font-size: 3rem;
                        color:#fff;
                    }
                    
                    .about .row .content p{
                        font-size: 1.6rem;
                        color:#ccc;
                        padding:1rem 0;
                        line-height: 1.8;
                    }
                    .heading{
                        text-align: center;
                        color:#fff;
                        text-transform: uppercase;
                        padding-bottom: 3.5rem;
                        font-size: 4rem;
                    }
                    
                    .heading span{
                        color:#d3ad7f;
                        text-transform: uppercase;
                    }
                    .btn{
                        margin-top: 1rem;
                        display: inline-block;
                        padding:.9rem 3rem;
                        font-size: 1.7rem;
                        color:#fff;
                        background: #d3ad7f;
                        cursor: pointer;
                    }
                    
                    .btn:hover{
                        letter-spacing: .2rem;
                    }
                    .contact .row{
                        display: flex;
                        background: #13131a;
                        flex-wrap: wrap;
                        gap:1rem;
                    }
                    
                    .contact .row .map{
                        flex:1 1 45rem;
                        width: 100%;
                        object-fit: cover;
                        border: 0;
                    }
                    
                    .contact .row form{
                        flex:1 1 45rem;
                        padding:5rem 2rem;
                        text-align: center;
                    }
                    
                    .contact .row form h3{
                        text-transform: uppercase;
                        font-size: 3.5rem;
                        color:#fff;
                    }
                    
                    .contact .row form .inputBox{
                        display: flex;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 2rem;
                        background:#010103;;
                        border:.1rem solid rgba(255,255,255,.3);
                    }
                    
                    .contact .row form .inputBox span{
                        color:#fff;
                        font-size: 2rem;
                        padding-left: 2rem;
                    }
                    
                    .contact .row form .inputBox input{
                        width: 100%;
                        padding:2rem;
                        font-size: 1.7rem;
                        color:#fff;
                        text-transform: none;
                        background:none;
                    }
            `}
                </style>
                <section className="about" id="about">

                    <h1 className="heading"> <span>about</span> us </h1>

                    <div className="row">

                        <div className="image">
                            <img src={about_img} alt="" />
                        </div>

                        <div className="content">
                            <h3>what makes our coffee special?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                            <a href='#' className="btn">learn more</a>
                        </div>

                    </div>

                </section>
                <section className="contact" id="contact">

                    <h1 className="heading"> <span>contact</span> us </h1>

                    <div className="row">

                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.5737143016854!2d76.92547801535149!3d43.218429679138616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f30f7a99069%3A0x7adb88ae41e2c540!2sEsentai%20Mall!5e0!3m2!1sru!2skz!4v1666292588802!5m2!1sru!2skz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mapa'></iframe>"

                        <form action="">
                            <h3>get in touch</h3>
                            <div className="inputBox">
                                <span className="fas fa-user"></span>
                                <input type="text" placeholder="name"/>
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-envelope"></span>
                                <input type="email" placeholder="email"/>
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-phone"></span>
                                <input type="number" placeholder="number"/>
                            </div>
                            <input type="submit" value="contact now" className="btn"/>
                        </form>

                    </div>


                </section>
            </>
        )
    }
}
