import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Typical from 'react-typical';
import content from '../content';

export default function Experience() {
    return (
        <div 
        className="m-4 mt-6">
            
            <Typical
                    steps={content.experience.experience}
                    loop ={Infinity}
                    className="text-center text-4xl my-4"
                     />
            
            <div 
            className="border-gray-100 border-solid border-2 rounded-lg overflow-hidden p-3 shadow-2xl md:flex md:w-8/12 md:mx-auto md:mt-14">
                <div>
                <LazyLoadImage 
                    src={content.experience.img}
                    effect="blur"
                    placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
                    className="rounded-lg mb-3 md:mb-0 md:max-w-sm"
                    />
                </div>
                <div className="my-5 mx-3">
                <div className="font-sans text-gray-800 font-bold text-lg my-2 text-center md:text-left md:text-2xl">
                    {content.experience.title}
                </div>
                <div className="text-center md:text-left text-gray-500 font-serif my-3 md:text-lg">
                    {content.experience.content}
                </div>
                </div>
            </div>
        </div>
    )
}
