import { useEffect, useRef } from "react";
import Slider from '../common/Slider.jsx'

import CejaA from "../../assets/services/eliminacion-micropigmentacion/sliders/CejaA.avif"
import CejaB from "../../assets/services/eliminacion-micropigmentacion/sliders/CejaB.avif"

import MyriamA from "../../assets/services/eliminacion-micropigmentacion/sliders/MyriamA.avif"
import MyriamB from "../../assets/services/eliminacion-micropigmentacion/sliders/MyriamB.avif"

import ZaidaA from "../../assets/services/eliminacion-micropigmentacion/sliders/ZaidaA.avif"
import ZaidaB from "../../assets/services/eliminacion-micropigmentacion/sliders/ZaidaB.avif"
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
                        image1={MyriamA}
                        image2={MyriamB}
                        image1Alt="Antes"
                        image2Alt="Después"

                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={ZaidaA}
                        image2={ZaidaB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>

                <div className="gsap-reveal-card w-full md:col-span-12">
                    <Slider
                        image1={CejaA}
                        image2={CejaB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>

            </div>

        </section>
    );
}
