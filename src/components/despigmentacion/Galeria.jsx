import React from 'react';
import Slider from '../common/Slider.jsx';

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

            {/* Insert sliders here for despigmentacion */}
        </section>
    );
}
