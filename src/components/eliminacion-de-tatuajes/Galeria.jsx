import React from 'react';
import Marquee from 'react-fast-marquee'

import Slider from '../common/Slider.jsx'

import MayteA from "../../assets/services/tattoos/16MayteA.avif"
import MayteB from "../../assets/services/tattoos/16MayteB.avif"

export default function Galeria() {
    return (
        <section
            className="flex flex-col items-center scroll-mt-28 py-20 w-full"
            id="galeria"
        >
            <div className="mx-auto max-w-3xl text-center mb-12 px-6">
                <h2
                    className="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira"
                >
                    Galería
                </h2>
                <p
                    className="mt-4 text-base md:text-lg text-custom-oscuro dark:text-custom-piel font-light"
                >
                    Ver nuestros resultados.
                </p>
            </div>

            <div className="mb-16 w-full px-6 flex justify-center">
                <Slider
                    image1={MayteA}
                    image2={MayteB}
                    image1Alt="Antes"
                    image2Alt="Después"
                    description="Ejemplo de eliminación de tatuaje después de X sesiones."
                />
            </div>

            <div className="w-full relative overflow-hidden flex">
                <Marquee pauseOnHover autoFill>

                    <SplitComparison
                        image1={<img src={MayteA.src} alt="Antes" />}
                        image2={<img src={MayteB.src} alt="Después" />}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </Marquee>
            </div>
        </section>
    );
}

const SplitComparison = ({ image1, image2, image1Alt = "Antes", image2Alt = "Después" }) => {
    return (
        <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden shrink-0 mx-2 md:mx-4 shadow-sm border border-custom-piel/10 dark:border-custom-beige/20 group cursor-pointer bg-custom-beige-light dark:bg-custom-oscuro">
            <div className="w-[180px] sm:w-[220px] md:w-[280px] aspect-square flex [&>img]:h-full [&>img]:w-full [&>img]:object-cover">
                {image2}
            </div>
            <div
                className="absolute inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
                style={{ clipPath: 'polygon(0 0, 63.4% 0, 36.6% 100%, 0 100%)' }}
            >
                {image1}
            </div>
            <div
                className="absolute inset-0 z-10 pointer-events-none bg-white"
                style={{ clipPath: 'polygon(calc(63.4% - 1.5px) 0, calc(63.4% + 1.5px) 0, calc(36.6% + 1.5px) 100%, calc(36.6% - 1.5px) 100%)' }}
            ></div>
            <div className="absolute bottom-4 left-1/4 -translate-x-1/2 z-20">
                <span className="px-3 md:px-5 py-1 md:py-1.5 rounded-full bg-black/50 shadow-lg backdrop-blur-md text-white text-[11px] md:text-sm font-medium tracking-wide">
                    {image1Alt}
                </span>
            </div>
            <div className="absolute bottom-4 right-1/4 translate-x-1/2 z-20">
                <span className="px-3 md:px-5 py-1 md:py-1.5 rounded-full bg-black/50 shadow-lg backdrop-blur-md text-white text-[11px] md:text-sm font-medium tracking-wide">
                    {image2Alt}
                </span>
            </div>
        </div>
    );
}
