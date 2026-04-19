import Slider from '../common/Slider.jsx'

import MyriamA from "../../assets/services/eliminacion-micropigmentacion/sliders/MyriamA.avif"
import MyriamB from "../../assets/services/eliminacion-micropigmentacion/sliders/MyriamB.avif"

import ZaidaA from "../../assets/services/eliminacion-micropigmentacion/sliders/ZaidaA.avif"
import ZaidaB from "../../assets/services/eliminacion-micropigmentacion/sliders/ZaidaB.avif"

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
                        image1={MyriamA}
                        image2={MyriamB}
                        image1Alt="Antes"
                        image2Alt="Después"

                    />
                </div>
                <div className="w-full md:col-span-6">
                    <Slider
                        image1={ZaidaA}
                        image2={ZaidaB}
                        image1Alt="Antes"
                        image2Alt="Después"
                    />
                </div>

            </div>

        </section>
    );
}
