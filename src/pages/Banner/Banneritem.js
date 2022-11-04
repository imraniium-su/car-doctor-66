import React from 'react';
import './Banneritem.css'
const Banneritem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full rounded-xl">
            <div className='carosel-img'>
                <img src={image} className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br /> Price for Car <br /> Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-white text-xl '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-info mr-5 text-white">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Banneritem;