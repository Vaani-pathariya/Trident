import React from 'react'
import Header from './Header'
import landingPageImage from '../assets/images/009.jpg'
import test01 from '../assets/images/005.jpg'
import test02 from '../assets/images/006.jpg'
import test03 from '../assets/images/007.jpg'
import stringimg from '../assets/images/string.png'

export default function Homepage() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            {/* Landing page section */}
            <section className='Landing-section '>
                <div>
                    <div className="landing-sec-bg-img"><img src={landingPageImage} alt="" /></div>
                    <div className="landing-sec-content container flex">
                        <h1>Helping mamas thrive</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ea vitae accusamus suscipit neque, eius reiciendis mollitia exercitationem ab architecto perferendis iusto fugiat maxime expedita fugit pariatur adipisci temporibus consectetur! Fugit assumenda omnis necessitatibus quo optio tempore suscipit ducimus possimus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing rferendis iusto fugiat maxime expedita fugit pariatur adipisci temporibus consectetur! Fugit assumenda omnis necessitatibus quo optio tempore suscipit ducimus possimus?</p>

                    </div>

                </div>
            </section>
            {/* quiz-section */}
            
            {/* Testimonial */}
            <section className='testimonial-section '>
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
            {/* CTA section */}
            <section className="cta-section"></section>
            {/* Footer */}
            <section className="footer"></section>
            {/* sub footer */}
            <section className="sub-footer"></section>
            {/* spacer */}
            <div className="spacer"></div>
        </div>
    )
}
