import React from 'react';
import Slider from '../common/Slider.jsx';
import SectionHeading from "../common/SectionHeading.jsx";

export default function Galeria() {
    return (
        <section
            className="flex flex-col items-center px-4 md:px-6 scroll-mt-36 md:scroll-mt-40 py-20 w-full"
            id="galeria"
        >
            <SectionHeading title="Galería"
                subtitle="Ver nuestros resultados."
            />

            {/* Insert sliders here for hollywood peel */}
        </section>
    );
}
