import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from "../content";

export default function Navigation() {
    return (
        <div className="bg-gray-700">
            <div 
            className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-arial">
                <h1 
                className="text-2xl font-bold">
                    {content.nav.logo} 
                    <span className="w-3 h-3 inline-block bg-red-500 rounded-full mx-1 animate-ping"></span>
                </h1>
                <div className="flex">
                    <LazyLoadImage
                    src={content.nav.gmail}
                    className="w-8 mx-2"
                    />
                    <span
                    className="text-md mr-4"
                    >zainiazhar2003@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
