import React from 'react'
import Header from './Header'
import landingPageImage from '../assets/images/009.jpg'
import test01 from '../assets/images/006.jpg'
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
                        <a href="" className='nav-link primary-btn'>Contact Us</a>
                    </div>

                </div>
            </section>
            {/* quiz-section */}
            <section className="quiz-section"></section>

            {/* Testimonial */}
            <section className='testimonial-section '>
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
