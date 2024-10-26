import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <>
            <div className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">
                                {/* <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
                                    <span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
                                </div> */}
                                <div className="testimonial-slider">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation={true}
                                        autoplay={{
                                            delay:2000
                                        }}
                                        modules={[Navigation,Autoplay]} className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="item">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-5">
                                                                <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                                            </blockquote>
                                                            <div className="author-info">
                                                                <div className="author-pic">
                                                                    <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                                </div>
                                                                <h3 className="font-weight-bold">Maria Jones</h3>
                                                                <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-5">
                                                                <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                                            </blockquote>
                                                            <div className="author-info">
                                                                <div className="author-pic">
                                                                    <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                                </div>
                                                                <h3 className="font-weight-bold">Maria Jones</h3>
                                                                <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-5">
                                                                <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                                            </blockquote>
                                                            <div className="author-info">
                                                                <div className="author-pic">
                                                                    <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                                </div>
                                                                <h3 className="font-weight-bold">Maria Jones</h3>
                                                                <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
