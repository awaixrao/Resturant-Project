import React from 'react'
import aboutImg from '../assets/Images/about-img.png'


const About = () => {
    return (
        <>

            <section className='about'>

                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <img src={aboutImg} className='py-5' style={{ height: 660 }} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex justify-content-center flex-column about-div'>

                            <div>
    <h2 className='about-heading text-white'>We Are Aman Pizza Garden</h2>
</div>
<div>
    <p className='text-white py-3'>
        At Aman Pizza Garden, we take pride in serving delicious, high-quality pizzas made with fresh ingredients. 
        Our menu features a wide variety of options, from classic Margherita to spicy pepperoni, and even unique gourmet creations that you won't find anywhere else. 
        Whether you're dining in, taking out, or ordering delivery, we strive to provide an exceptional experience that keeps you coming back for more. 
        Join us and taste the difference that passion and quality make!
    </p>
</div>

                                <div className="">

                                    <button className="btn btn-warning py-2 px-5 rounded-pill text-white text-decoration-none">That's About Us...</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default About