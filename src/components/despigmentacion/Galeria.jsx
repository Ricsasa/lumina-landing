import React from 'react';
import Slider from '../common/Slider.jsx';
import Axilas from "../../assets/gallery/axilas.avif"

export default function Galeria() {
    return (
        <section
            className="flex flex-col items-center md:px-6 scroll-mt-28 py-20 w-full"
            id="galeria"
        >
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2
                    className="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira"
                >
                    Galería
                </h2>
                <p
                    className="mt-4 text-base md:text-lg text-custom-oscuro dark:text-custom-piel font-light px-4"
                >
                    Ver nuestros resultados.
                </p>
            </div>

            <div className="mb-16 w-full px-6 container max-w-6xl mx-auto flex flex-col gap-6 lg:gap-8 items-center">
                <div className="w-full md:col-span-6 md:mt-10 flex justify-center">
                    <img
                        src={Axilas.src}
                        alt="Axilas"
                        className="w-1/2"
                    />
                </div>
            </div>
        </section>
    );
}
