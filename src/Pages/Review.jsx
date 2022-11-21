import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <>
                <section class="review" id="review">

                    <h1 class="heading"> customer's <span>review</span> </h1>

                    <div class="box-container">

                        <div class="box">
                            <img src="images/quote-img.png" alt="" class="quote"/>
                                <p>Quality coffee! I always buy in this store and drink with pleasure every day!</p>
                                <img src="images/Amir.png" class="user" alt=""/>
                                    <h3>Zhumagali Amir</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src="images/quote-img.png" alt="" class="quote" />
                                    <p>The most suitable kind of coffee for a perfect morning. Absolutely everyone in the family liked it! Chocolate-nutty notes and no bitterness.</p>
                                    <img src="images/Veronika.png" class="user" alt="" />
                                    <h3>Veronika Loenko</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src="images/quote-img.png" alt="" class="quote" />
                                    <p>My coffee discovery - Do you, like me, think that hot, dark roasted coffee is a bitter pill that you want to drink with a liter of water? No, when you drink Melitta Bella Crema Espresso it is a noble, delicious, velvety drink.</p>
                                    <img src="images/Irina.png" class="user" alt="" />
                                    <h3>Korolyeva Irina</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>

                        </div>

                </section>

            </>
        )
    }
}
