import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <>
                <section className="menu" id="menu">

                    <h1 className="heading"> our <span>menu</span> </h1>

                    <div className="box-container">

                        <div className="box">
                            <img src="images/menu-1.png" alt=""/>
                                <h3>Cappuccino</h3>
                                <div className="price">$13.99 <span>18.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src="images/menu-2.png" alt=""/>
                                <h3>Espresso</h3>
                                <div className="price">$15.99 <span>20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src="images/menu-3.png" alt=""/>
                                <h3>Latte</h3>
                                <div className="price">$16.99 <span>22.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src="images/menu-4.png" alt=""/>
                                <h3>Flat white</h3>
                                <div className="price">$17.99 <span>23.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src="images/menu-5.png" alt=""/>
                                <h3>Latte macchiato</h3>
                                <div className="price">$14.99 <span>19.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src="images/menu-6.png" alt=""/>
                                <h3>Affogato</h3>
                                <div className="price">$15.99 <span>20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                        </div>

                    </div>

                </section>
            </>
        )
    }
}
