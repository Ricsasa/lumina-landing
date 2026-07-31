import { useEffect, useRef } from "react";
import Slider from '../common/Slider.jsx'

import CintiaA from "../../assets/services/microneedling/sliders/CintiaA.avif"
import CintiaB from "../../assets/services/microneedling/sliders/CintiaB.avif"
import SectionHeading from "../common/SectionHeading.jsx";

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
            className="flex flex-col items-center px-4 md:px-6 scroll-mt-36 md:scroll-mt-40 py-20 w-full"
            id="galeria"
        >
            <SectionHeading title="Galería"
                subtitle="¡Ve algunos de nuestros resultados!"
            />

            <div ref={galleryRef} className="w-full max-w-3xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
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
