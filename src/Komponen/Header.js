import React, {useEffect, useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Typical from "react-typical";
import content from '../content'


export default function Header() {

    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        setAnimated(true)
    }, []);

    return (
        <div 
        className="min-h-screen flex items-center justify-center bg-gray-700"
        >
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-8">
                <div className="w-full md:w-2/5">
                <LazyLoadImage 
                src={content.header.img}
                effect="blur"
                placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
                />
            </div>
            <div className="ml-5 text-white font-serif text-center md:text-left">
                <h2 
                    className={`${animated ? "" : "translate-y-10 opacity-0"} transform transition duration-1000 ease-out font-bold font-3xl text-2xl md:text-5xl`}>
                    {content.header.text[0]}
                    <br />
                    {content.header.text[1]}
                </h2>
                <h1 className={`${animated ? "" : "translate-y-10 opacity-0"} transform transition duration-1000 ease-out font-bold font-2xl text-gray-500`}>
                    {content.header.text[2]}{' '}
                    <Typical
                    steps={content.header.typical}
                    loop ={Infinity}
                    className="inline-block"
                     />
                </h1>
                <form action="https://bit.ly/3n1wgl3">
                <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 px-10 py-3 mt-10 mb-20 text-xl rounded-lg uppercase animate-float">
                    {content.header.btnText}
                </button>
                </form>
            </div>
            </div>
        </div>
    )
}

