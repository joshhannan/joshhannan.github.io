import React from 'react'

export default (props) => {
    return (
        <section>
            <div className="section-title">
                <h1>{props.title}</h1>
            </div>
            <div className="section-content">
                {props.content}
            </div>
        </section>
    )
}