

import Slider from '../common/Slider.jsx'


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

const Gallery = () => {
    return (
        <section
            className="justify-center md:px-6 scroll-mt-24 py-12 flex flex-col items-center w-full"
            id="galeria-principal">
            <div className="py-8 mx-auto lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center mb-12">
                    <h2
                        class="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira"
                    >
                        Galería
                    </h2>
                    <p
                        class="mt-4 text-base md:text-lg text-custom-oscuro dark:text-custom-piel font-light"
                    >
                        ¡Ve algunos de nuestros resultados!
                    </p>
                </div>

                <div className="mb-16 w-full px-6 container max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className="w-full md:col-span-6 md:mt-10">
                        <Slider
                            image1={ErnestoA}
                            image2={ErnestoB}
                            image1Alt="Antes"
                            image2Alt="Después"

                        />
                    </div>
                    <div className="w-full md:col-span-6 md:mt-10">
                        <Slider
                            image1={MaraA}
                            image2={MaraB}
                            image1Alt="Antes"
                            image2Alt="Después"
                        />
                    </div>
                    <div className="w-full md:col-span-6 md:mt-10">
                        <Slider
                            image1={MoniA}
                            image2={MoniB}
                            image1Alt="Antes"
                            image2Alt="Después"
                        />
                    </div>
                    <div className="w-full md:col-span-6 md:mt-10">
                        <Slider
                            image1={RomanosA}
                            image2={RomanosB}
                            image1Alt="Antes"
                            image2Alt="Después"
                        />
                    </div>
                    <div className="w-full md:col-span-6 md:mt-10 flex justify-center">
                        <img
                            src={Puntos.src}
                            alt="Tatuajes de puntos"
                            className="w-3/4"
                        />
                    </div>
                    <div className="w-full md:col-span-6 md:mt-10 flex justify-center">
                        <img
                            src={Axilas.src}
                            alt="Axilas"
                            className="w-3/4"
                        />
                    </div>
                    <div className="w-full md:col-span-6 md:col-start-4 md:mt-10 flex justify-center">
                        <img
                            src={Cristopher.src}
                            alt="Tatuajes de nombre"
                            className="w-3/4"
                        />
                    </div>


                </div>
            </div>
        </section>
    )
}


export default Gallery
