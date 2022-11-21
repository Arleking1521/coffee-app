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
                        background:var(--black);
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
                        color:var(--main-color);
                        text-transform: uppercase;
                    }
                    .btn{
                        margin-top: 1rem;
                        display: inline-block;
                        padding:.9rem 3rem;
                        font-size: 1.7rem;
                        color:#fff;
                        background: var(--main-color);
                        cursor: pointer;
                    }
                    
                    .btn:hover{
                        letter-spacing: .2rem;
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
            </>
        )
    }
}
