import React from 'react'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-container">
                <div className="banner-images">
                    <img src="https://picsum.photos/id/1001/4000x2000" alt="" />
                    <img src="https://picsum.photos/id/10/4000x2000" alt="" />
                </div>
                <div className="banner-messages">
                    <div>
                        <h1>Slide One</h1>
                    </div>
                    <div>
                        <h1>Slide Two</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner