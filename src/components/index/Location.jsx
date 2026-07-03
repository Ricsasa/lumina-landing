import React, { useEffect, useRef, useState } from "react";

import {
    BuildingStorefrontIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

import Facilities1 from "../../assets/facilities/facilities-1.avif";
import Facilities2 from "../../assets/facilities/facilities-2.avif";
import Facilities3 from "../../assets/facilities/facilities-3.avif";
import Facilities4 from "../../assets/facilities/facilities-4.avif";
import WhatsappWhite from "../../assets/external/whatsapp-white.svg";

const facilities = [
    { src: Facilities1, alt: "Interior" },
    { src: Facilities3, alt: "Exterior" },
    { src: Facilities4, alt: "Exterior" },
    { src: Facilities2, alt: "Interior" },
];

const fallbackDireccion =
    "Osa Menor 3744-c, La Calma, CP 45070, Zapopan, Jalisco";
const whatsappMessage =
    "Hola, me gustaría recibir información para visitar Lumina Estudio Láser.";

export default function Location({ astroUrl }) {
    const [variables, setVariables] = useState(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        async function getVariables() {
            const res = await fetch(new URL("/variables.json", astroUrl));
            const data = await res.json();
            setVariables(data);
        }

        getVariables();
    }, [astroUrl]);

    useEffect(() => {
        let timeline;
        let isMounted = true;
        const images = imagesRef.current.filter(Boolean);

        if (images.length === 0) {
            return;
        }

        async function animateImages() {
            const gsapModule = await import("gsap");
            const gsap = gsapModule.gsap || gsapModule.default;

            if (!isMounted) {
                return;
            }

            timeline = gsap.timeline({ repeat: -1 });

            timeline.to(images, {
                opacity: 1,
                duration: 2,
                stagger: 1.9,
            }).to(
                images,
                {
                    opacity: 0,
                    duration: 2,
                    stagger: 1.9,
                },
                1,
            );
        }

        animateImages();

        return () => {
            isMounted = false;
            timeline?.kill();
        };
    }, []);

    const direccion = variables?.direccion || fallbackDireccion;
    const googleMapsLink = variables?.googleMapsLink
    const googleMapsLocation = variables?.googleMapsLocation
    const moovitLocation = variables?.moovitLocation

    return (
        <section
            className="flex flex-col items-center md:px-6 scroll-mt-24 py-20 w-full"
            id="ubicacion"
        >
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira">
                    Nuestra Ubicación
                </h2>
                <p className="mt-4 text-base md:text-lg text-custom-oscuro dark:text-custom-piel font-light">
                    Visítanos en nuestras instalaciones.
                </p>
            </div>

            <div className="w-[calc(100vw-2em)] max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="relative w-full md:w-1/3 flex overflow-hidden bg-custom-beige-light dark:bg-custom-oscuro rounded-[32px] shadow-sm border border-custom-piel/10 dark:border-custom-beige/20 hover:dark:border-custom-beige/40 transition-colors duration-300">
                    {facilities.map((facility, index) => (
                        <img
                            key={`${facility.alt}-${index}`}
                            ref={(element) => {
                                imagesRef.current[index] = element;
                            }}
                            src={facility.src.src}
                            alt={facility.alt}
                            className="gsap-facility-image relative w-full h-auto md:absolute md:top-0 md:left-0 md:h-full object-cover opacity-0 saturate-50"
                            aria-label={facility.alt}
                            title={facility.alt}
                        />
                    ))}
                </div>

                <div className="flex flex-col grow gap-8 p-6 md:p-8 lg:p-10 bg-custom-beige-light dark:bg-custom-oscuro rounded-[32px] shadow-sm border border-custom-piel/10 dark:border-custom-beige/20 hover:dark:border-custom-beige/40 transition-colors duration-300">
                    <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        title="Nuestra Ubicación"
                    >
                        <div className="flex items-start gap-4 p-6 bg-custom-piel/5 dark:bg-custom-beige/5 rounded-[24px] hover:bg-custom-piel/10 dark:hover:bg-custom-beige/10 transition-colors duration-300">
                            <div className="shrink-0 mt-1">
                                <MapPinIcon className="w-8 h-8 text-custom-piel dark:text-custom-beige" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-custom-piel dark:text-custom-beige mb-1 font-fira group-hover:underline">
                                    Lumina Estudio Láser
                                </h3>
                                <p className="text-sm md:text-base text-custom-oscuro dark:text-custom-piel font-light leading-relaxed whitespace-pre-line text-left">
                                    {direccion}
                                </p>
                            </div>
                        </div>
                    </a>

                    <div className="w-full relative pt-[56.25%] rounded-[24px] overflow-hidden border border-custom-piel/10 dark:border-custom-beige/10 bg-custom-piel/5 shrink-0">
                        <iframe
                            title="Google Maps location"
                            src={googleMapsLocation}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <a
                        href={moovitLocation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        title="Rutas transporte público"
                    >
                        <div className="flex items-start gap-4 p-6 bg-custom-piel/5 dark:bg-custom-beige/5 rounded-[24px] hover:bg-custom-piel/10 dark:hover:bg-custom-beige/10 transition-colors duration-300">
                            <div className="shrink-0 mt-1">
                                <BuildingStorefrontIcon className="w-8 h-8 text-custom-piel dark:text-custom-beige" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-custom-piel dark:text-custom-beige mb-1 font-fira group-hover:underline">
                                    Haz clic aquí para saber cómo llegar en
                                    transporte público.
                                </h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
