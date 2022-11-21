import React, { Component } from 'react'

export default class Contact extends Component {
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
                    .contact .row{
                        display: flex;
                        background:var(--black);
                        flex-wrap: wrap;
                        gap:1rem;
                    }
                    
                    .contact .row .map{
                        flex:1 1 45rem;
                        width: 100%;
                        object-fit: cover;
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
                        background:var(--bg);
                        border:var(--border);
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
                <section class="contact" id="contact">

                    <h1 class="heading"> <span>contact</span> us </h1>

                    <div class="row">

                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.5737143016854!2d76.92547801535149!3d43.218429679138616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f30f7a99069%3A0x7adb88ae41e2c540!2sEsentai%20Mall!5e0!3m2!1sru!2skz!4v1666292588802!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"

                        <form action="">
                            <h3>get in touch</h3>
                            <div class="inputBox">
                                <span class="fas fa-user"></span>
                                <input type="text" placeholder="name"/>
                            </div>
                            <div class="inputBox">
                                <span class="fas fa-envelope"></span>
                                <input type="email" placeholder="email"/>
                            </div>
                            <div class="inputBox">
                                <span class="fas fa-phone"></span>
                                <input type="number" placeholder="number"/>
                            </div>
                            <input type="submit" value="contact now" class="btn"/>
                        </form>

                    </div>


                </section>
            </>
        )
    }
}
