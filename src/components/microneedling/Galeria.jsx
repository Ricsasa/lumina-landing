import { useEffect, useRef } from "react";
import Slider from '../common/Slider.jsx'

import CintiaA from "../../assets/services/microneedling/sliders/CintiaA.avif"
import CintiaB from "../../assets/services/microneedling/sliders/CintiaB.avif"

export default function Galeria() {
    const galleryRef = useRef(null);

    useEffect(() => {
        let cleanup;
        let isMounted = true;

        import("../../scripts/cardAnimation").then(({ initCardAnimations }) => {
            if (isMounted && galleryRef.current) {
                cleanup = initCardAnimations(galleryRef.current);
            }
        });

        return () => {
            isMounted = false;
            cleanup?.();
        };
    }, []);

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
                    className="mt-4 text-base md:text-lg text-custom-oscuro/70 dark:text-custom-piel font-light"
                >
                    ¡Ve algunos de nuestros resultados!
                </p>
            </div>

            <div ref={galleryRef} className="mb-16 w-full px-6 container max-w-6xl mx-auto flex flex-col md:grid  gap-6 lg:gap-8 items-center md:items-start">
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={CintiaA}
                        image2={CintiaB}
                        image1Alt="Antes"
                        image2Alt="Después"

                    />
                </div>

            </div>

        </section>
    );
}
