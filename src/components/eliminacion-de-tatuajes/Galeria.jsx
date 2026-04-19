import Slider from '../common/Slider.jsx'

import AleA from "../../assets/services/tattoos/sliders/AleA.avif"
import AleB from "../../assets/services/tattoos/sliders/AleB.avif"

import AlondraA from "../../assets/services/tattoos/sliders/AlondraA.avif"
import AlondraB from "../../assets/services/tattoos/sliders/AlondraB.avif"

import DulceA from "../../assets/services/tattoos/sliders/DulceA.avif"
import DulceB from "../../assets/services/tattoos/sliders/DulceB.avif"

import FernandoA from "../../assets/services/tattoos/sliders/FernandoA.avif"
import FernandoB from "../../assets/services/tattoos/sliders/FernandoB.avif"

import MayteA from "../../assets/services/tattoos/sliders/MayteA.avif"
import MayteB from "../../assets/services/tattoos/sliders/MayteB.avif"



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
                    ¡Ve algunos de nuestros resultados!
                </p>
            </div>

            <div className="mb-16 w-full px-6 container max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="w-full md:col-span-6">
                    <Slider
                        image1={AleA}
                        image2={AleB}
                        image1Alt="Antes"
                        image2Alt="Después"

                    />
                </div>
                <div className="w-full md:col-span-6">
                    <Slider
                        image1={AlondraA}
                        image2={AlondraB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="w-full md:col-span-4">
                    <Slider
                        image1={DulceA}
                        image2={DulceB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="w-full md:col-span-4">
                    <Slider
                        image1={FernandoA}
                        image2={FernandoB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
                <div className="w-full md:col-span-4">
                    <Slider
                        image1={MayteA}
                        image2={MayteB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>
            </div>

        </section>
    );
}
