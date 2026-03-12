import React from "react";

import Eyebrows from "../../assets/services/eyebrows.avif";
import Dermapen from "../../assets/services/dermapen.avif";
import Hollywood from "../../assets/services/hollywood.avif";
import Tattoo from "../../assets/services/tattoo.avif";
import Armpit from "../../assets/services/armpit2.avif";

export default function Services() {
    return (
        <section
            className="flex items-center md:px-6 py-12 flex-col w-full"
            id="servicios">
            <div className="py-8 mx-auto lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira">
                        Nuestros Servicios
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-custom-piel/70 dark:text-custom-beige/70 font-light">
                        Descubre nuestra gama de tratamientos láser y de cuidado de la piel.
                    </p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-12 grid-rows-3 gap-4 md:gap-6 w-full">
                    <ServicesCard
                        title="Eliminación de tatuajes"

                        image={Tattoo.src || Tattoo}
                        className="col-span-6"
                        href="/eliminacion-de-tatuajes"
                    />
                    <ServicesCard
                        title="Eliminación de micropigmentación"
                        image={Eyebrows.src || Eyebrows}
                        className="col-span-6"
                        href="/eliminacion-micropigmentacion"
                    />
                    <ServicesCard
                        title="Despigmentación facial y corporal"
                        image={Armpit.src || Armpit}
                        className="col-span-6"
                        href="/despigmentacion"
                    />
                    <ServicesCard
                        title="Hollywood Peel"
                        image={Hollywood.src || Hollywood}
                        className="col-span-6"
                        href="/hollywood-peel"
                    />
                    <ServicesCard
                        title="Microneedling (Dermapen)"
                        image={Dermapen.src || Dermapen}
                        className="col-start-4 col-span-6"
                        href="/microneedling"
                    />
                </div>
            </div>
        </section >
    );
}

const ServicesCard = ({ href, title, image, className }) => {
    return (
        <div
            className={`flex flex-col w-full max-w-sm mx-auto overflow-hidden bg-custom-beige-light dark:bg-custom-oscuro rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 border border-custom-piel/10 dark:border-custom-beige/20 hover:dark:border-custom-beige/40 ${className || ""}`}
        >
            <a href={href} className="relative block overflow-hidden">
                <img
                    className="object-cover w-full h-48 sm:h-56 transition-transform duration-500 hover:scale-105 saturate-60"
                    src={image}
                    alt={title}
                />
            </a>
            <div className="flex flex-col grow p-6">
                <a href={href}>
                    <h3 className="mb-2 text-xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira">
                        {title}
                    </h3>
                </a>

                <div className="mt-auto">
                    <a
                        href={href}
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full bg-custom-piel/10 text-custom-piel hover:bg-custom-piel/20 dark:bg-custom-piel/20 dark:text-custom-beige dark:hover:bg-custom-piel/30 focus:outline-none focus:ring-2 focus:ring-custom-piel/50"
                    >
                        Saber más
                        <svg
                            className="w-4 h-4 ml-2 -mr-1 rtl:mr-2 rtl:-ml-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}