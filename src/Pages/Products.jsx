import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <>
                <section class="products" id="products">

                    <h1 class="heading"> our <span>products</span> </h1>

                    <div class="box-container">

                        <div class="box">
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="images/product-1.png" alt=""/>
                            </div>
                            <div class="content">
                                <h3>Nicaragua coffee</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="price">$19.99 <span>$25.99</span></div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="images/product-2.png" alt=""/>
                            </div>
                            <div class="content">
                                <h3>Columbia coffee</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                </div>
                                <div class="price">$16.99 <span>$20.99</span></div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="images/product-3.png" alt=""/>
                            </div>
                            <div class="content">
                                <h3>Peru coffee</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="price">$15.99 <span>$20.99</span></div>
                            </div>
                        </div>

                    </div>

                </section>

            </>
        )
    }
}
