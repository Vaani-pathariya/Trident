import React from 'react'
import Header from './Header'
import Quizzes from './Quizzes'
import Footer from './Footer'
import test01 from '../assets/images/005.jpg'
import test02 from '../assets/images/006.jpg'
import test03 from '../assets/images/007.jpg'
import cheerUpBro from '../assets/images/cheerUpBro.png'
import people from '../assets/images/people.png'
import './landingSection.css'
export default function Homepage() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            {/* Landing page section */}
            <section className='Landing-section container'>
                <div className="landing-sec-content flex">
                    <h1>Take Control of Your <br /> Mental Health</h1>
                    <p>If you're struggling with depression, OCD, ADHD, or other mental health concerns, you're not alone. Our web app is here to provide you with the resources and support you need to take control of your mental health. Don't wait any longer to prioritize your mental health – start your journey towards wellness today.</p>
                    <button>Get Started</button>
                    <div className='pastUsers'>
                        <img src={people} alt="people" />
                        <p>Over 1600+ people have sought help from us.</p>
                    </div>
                </div>
                <div className="landing-sec-bg-img"><img src={cheerUpBro} alt="" /></div>

            </section>

            {/* Types of quiz */}
            <section>
                <Quizzes />
            </section>

            {/* Testimonial */}
            <section className='testimonial-section container'>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="container testimonial-container flex">
                                <div className="test-img"><img src={test01} alt="" /></div>
                                <div className="test-main-content flex">
                                    <p>Lorem ipsum dolor sit ame Lorem Lorem ipsumcidunt quasi, accusantium fugit cum eius alias libero dolores id facilis asperiores excepturi, ducimus commodi nesciunt, vero inventore adipisci aliquid recusandae. t, consectetur adipisicing elit. Repudiandae, dolor </p>
                                    <div className="test-nameNcountry">
                                        <h1>I'm Kariee.</h1>
                                        <h3>London</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="container testimonial-container flex">
                                <div className="test-img"><img src={test02} alt="" /></div>
                                <div className="test-main-content flex">
                                    <p>Lorem ipsum dolor sit ame Lorem Lorem ipsumcidunt quasi, accusantium fugit cum eius alias libero dolores id facilis asperiores excepturi, ducimus commodi nesciunt, vero inventore adipisci aliquid recusandae. t, consectetur adipisicing elit. Repudiandae, dolor </p>
                                    <div className="test-nameNcountry">
                                        <h1>I'm Kariee.</h1>
                                        <h3>London</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="container testimonial-container flex">
                                <div className="test-img"><img src={test03} alt="" /></div>
                                <div className="test-main-content flex">
                                    <p>Lorem ipsum dolor sit ame Lorem Lorem ipsumcidunt quasi, accusantium fugit cum eius alias libero dolores id facilis asperiores excepturi, ducimus commodi nesciunt, vero inventore adipisci aliquid recusandae. t, consectetur adipisicing elit. Repudiandae, dolor </p>
                                    <div className="test-nameNcountry">
                                        <h1>I'm Kariee.</h1>
                                        <h3>London</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* Footer */}
            <section className="footer">
                <Footer />
            </section>
        </div>
    )
}
