import { useEffect, useRef } from "react";
import Slider from '../common/Slider.jsx'

import AleA from "../../assets/services/tattoos/sliders/AleA.avif"
import AleB from "../../assets/services/tattoos/sliders/AleB.avif"
import AleC from "../../assets/services/tattoos/sliders/AleC.avif"

import AlondraA from "../../assets/services/tattoos/sliders/AlondraA.avif"
import AlondraB from "../../assets/services/tattoos/sliders/AlondraB.avif"
import AlondraC from "../../assets/services/tattoos/sliders/AlondraC.avif"

import DulceA from "../../assets/services/tattoos/sliders/DulceA.avif"
import DulceB from "../../assets/services/tattoos/sliders/DulceB.avif"
import DulceC from "../../assets/services/tattoos/sliders/DulceC.avif"

import FernandoA from "../../assets/services/tattoos/sliders/FernandoA.avif"
import FernandoB from "../../assets/services/tattoos/sliders/FernandoB.avif"

import MayteA from "../../assets/services/tattoos/sliders/MayteA.avif"
import MayteB from "../../assets/services/tattoos/sliders/MayteB.avif"

import ErnestoA from "../../assets/services/tattoos/sliders/ErnestoA.avif"
import ErnestoB from "../../assets/services/tattoos/sliders/ErnestoB.avif"
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
                        image1={AleA}
                        image2={AleC}
                        image1Alt="Antes"
                        image2Alt="Después"

                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={AlondraA}
                        image2={AlondraC}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-4">
                    <Slider
                        image1={DulceA}
                        image2={DulceC}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-4">
                    <Slider
                        image1={FernandoA}
                        image2={FernandoB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-4">
                    <Slider
                        image1={MayteA}
                        image2={MayteB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-12">
                    <Slider
                        image1={ErnestoA}
                        image2={ErnestoB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
            </div>

        </section>
    );
}
