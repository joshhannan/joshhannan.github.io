import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import '../assets/scss/components/banner.scss'


const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-container">
                <AwesomeSlider>
                    <div className="slide">
                        <div className="slide-image">
                            <img src="https://picsum.photos/id/1001/1287/773" alt="" />
                        </div>
                        <div className="slide-message">
                            <div>
                                <h1>Slide One</h1>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-image">
                            <img src="https://picsum.photos/id/10/1287/773" alt="" />
                        </div>
                        <div className="slide-message">
                            <div>
                                <h1>Slide Two</h1>
                            </div>
                        </div>
                    </div>
                </AwesomeSlider>
            </div>
        </section>
    )
}

export default Banner