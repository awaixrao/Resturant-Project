import React from 'react';

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className="container">
                <h1 className="categoriesHeading text-center py-5">What Says Our Customers</h1>

                <div className="row">
                    <div className="col-md-6">
                        <div className='review-div py-5 px-4 my-2' data-aos="fade-right" data-aos-duration="1500">
                            <p className='review-para text-secondary'>Aman Pizza Garden is the best place to satisfy your pizza cravings! The crust is perfectly baked.. Highly recommended!</p>
                            <span>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                            </span>
                            <h2 className='review-heading pt-2'>Sara Ali</h2>
                            <h6 className='review-heading'>Food Blogger</h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='review-div py-5 px-4 my-2' data-aos="fade-left" data-aos-duration="1500">
                            <p className='review-para text-secondary'>The garlic bread was out of this world! I loved the ambiance and the friendly staff. Definitely coming back!</p>
                            <span>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                            </span>
                            <h2 className='review-heading pt-2'>Awais Rao</h2>
                            <h6 className='review-heading'>Regular Customer</h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='review-div py-5 px-4' data-aos="fade-right" data-aos-duration="2500">
                            <p className='review-para text-secondary'>If you love pizza, this is the place to be! The variety of flavors is impressive, and each one is a delight!</p>
                            <span>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                            </span>
                            <h2 className='review-heading pt-2'>Ali Raza</h2>
                            <h6 className='review-heading'>Pizza Enthusiast</h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='review-div py-5 px-4' data-aos="fade-left" data-aos-duration="2500">
                            <p className='review-para text-secondary'>The best fast food spot in town! I love their spicy chicken wings and the pizza is always fresh!</p>
                            <span>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                                <i className="ri-star-s-fill ri-xl"></i>
                            </span>
                            <h2 className='review-heading pt-2'>Nida Malik</h2>
                            <h6 className='review-heading'>Local Foodie</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
