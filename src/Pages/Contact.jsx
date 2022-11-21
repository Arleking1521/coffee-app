import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <>
                <!-- contact section starts  -->

                <section class="contact" id="contact">

                    <h1 class="heading"> <span>contact</span> us </h1>

                    <div class="row">

                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.5737143016854!2d76.92547801535149!3d43.218429679138616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f30f7a99069%3A0x7adb88ae41e2c540!2sEsentai%20Mall!5e0!3m2!1sru!2skz!4v1666292588802!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"

                        <form action="">
                            <h3>get in touch</h3>
                            <div class="inputBox">
                                <span class="fas fa-user"></span>
                                <input type="text" placeholder="name">
                            </div>
                            <div class="inputBox">
                                <span class="fas fa-envelope"></span>
                                <input type="email" placeholder="email">
                            </div>
                            <div class="inputBox">
                                <span class="fas fa-phone"></span>
                                <input type="number" placeholder="number">
                            </div>
                            <input type="submit" value="contact now" class="btn">
                        </form>

                    </div>


                </section>

                <!-- contact section ends -->
            </>
        )
    }
}
