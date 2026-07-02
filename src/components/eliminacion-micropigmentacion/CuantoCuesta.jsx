import React, { useEffect, useState } from "react";

import PriceCard from "../common/PriceCard";

export default function CuantoCuesta({ astroUrl }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getPrices() {
            const res = await fetch(new URL("/precios.json", astroUrl));
            const data = await res.json();
            setData(data);
        }

        getPrices();
    }, [astroUrl]);

    const micropigmentacion = data?.micropigmentacion;

    return (
        <section
            className="flex flex-col items-center md:px-6 scroll-mt-28 py-20 w-full"
            id="costos"
        >
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira">
                    ¿Cuánto cuesta?
                </h2>
                <p className="mt-4 text-base md:text-lg text-custom-oscuro dark:text-custom-piel font-light px-4">
                    Conoce nuestros precios y paquetes.
                </p>
            </div>

            <div className="w-[calc(100vw-2em)] max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">
                <PriceCard
                    title="Cejas o Microblading"
                    description="Eliminación de microblading o micropigmentación de cejas."
                    pricePrefix
                >
                    ${Number(micropigmentacion?.cejas || 0).toLocaleString()} por
                    sesión
                </PriceCard>

                <PriceCard
                    title="Delineado de ojos"
                    description="Eliminación de delineado de ojos."
                    pricePrefix
                >
                    ${Number(micropigmentacion?.ojos || 0).toLocaleString()} por
                    sesión
                </PriceCard>

                <PriceCard
                    title="Delineado de labios"
                    description="Eliminación de delineado de labios o full color."
                    pricePrefix
                >
                    ${Number(micropigmentacion?.labios || 0).toLocaleString()} por
                    sesión
                </PriceCard>
            </div>
        </section>
    );
}
