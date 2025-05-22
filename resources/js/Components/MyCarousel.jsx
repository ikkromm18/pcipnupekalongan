import React, { useState } from "react";

const MyCarousel = ({ images, height }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden rounded-lg">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={`w-full ${height} object-cover transition-all duration-500`}
            />

            {/* Tombol kiri */}
            <button
                onClick={prevSlide}
                className="absolute p-2 text-white transform -translate-y-1/2 bg-black rounded-full top-1/2 left-4 bg-opacity-30 hover:bg-opacity-60"
            >
                ❮
            </button>

            {/* Tombol kanan */}
            <button
                onClick={nextSlide}
                className="absolute p-2 text-white transform -translate-y-1/2 bg-black rounded-full top-1/2 right-4 bg-opacity-30 hover:bg-opacity-60"
            >
                ❯
            </button>

            {/* Indicator dots */}
            <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default MyCarousel;
