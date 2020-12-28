import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'

export default function Stack() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-mono mt-10">
            <div>
                <h1 className="text-5xl font-bold text-center my-10">Stack I Use</h1>
                <div className="flex flex-wrap justify-center">
                    {content.stack.tech.map((tech,index) => {
                        return <span 
                        key={index}
                        className={`${index % 2 === 0 ? "animate-float" : "animate-refloat"}  w-40 h-40 bg-white shadow-2xl m-2 my-7 rounded-full
                        flex items-center p-5`}>
                            <LazyLoadImage 
                            src={tech.img}
                            alt={tech.alt}
                            className="stack-img"
                            />
                        </span>
                    })}
                </div>

                <p className="w-11/12 md:max-w-xl text-center mx-auto text-xl mt-10">{content.stack.desc}</p>
            </div>
        </div>
    )
}
