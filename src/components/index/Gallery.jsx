

import { useEffect, useRef } from "react";
import Slider from '../common/Slider.jsx'
import ImageCard from '../common/ImageCard.jsx'
import { initCardAnimations } from "../../scripts/cardAnimation";


import Axilas from "../../assets/gallery/axilas.avif"
import Cristopher from "../../assets/gallery/cristopher.avif"
import ErnestoA from "../../assets/gallery/ernestoA.avif"
import ErnestoB from "../../assets/gallery/ernestoB.avif"
import MaraA from "../../assets/gallery/maraA.avif"
import MaraB from "../../assets/gallery/maraB.avif"
import MoniA from "../../assets/gallery/moniA.avif"
import MoniB from "../../assets/gallery/moniB.avif"
import Puntos from "../../assets/gallery/puntos.avif"
import RomanosA from "../../assets/gallery/romanosA.avif"
import RomanosB from "../../assets/gallery/romanosB.avif"
import SectionHeading from "../common/SectionHeading.jsx";

const Gallery = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        return initCardAnimations(galleryRef.current);
    }, []);

    return (
        <section
            className="flex flex-col items-center px-4 md:px-6 scroll-mt-24 py-20 w-full"
            id="galeria-principal">
            <SectionHeading title="Galería"
                subtitle="¡Ve algunos de nuestros resultados!"
            />

            <div ref={galleryRef} className="w-full max-w-3xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={ErnestoA}
                        image2={ErnestoB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={MaraA}
                        image2={MaraB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={MoniA}
                        image2={MoniB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <Slider
                        image1={RomanosA}
                        image2={RomanosB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <ImageCard src={Puntos.src} alt="Tatuajes de puntos" />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6">
                    <ImageCard src={Axilas.src} alt="Axilas" />
                </div>
                <div className="gsap-reveal-card w-full md:col-span-6 md:col-start-4">
                    <ImageCard src={Cristopher.src} alt="Tatuajes de nombre" />
                </div>
            </div>
        </section>
    )
}


export default Gallery
