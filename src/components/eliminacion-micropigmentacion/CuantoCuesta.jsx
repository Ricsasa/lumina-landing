import React, { useEffect, useState } from "react";

import PriceCard from "../common/PriceCard";
import SectionHeading from "../common/SectionHeading.jsx";

export default function CuantoCuesta({ astroUrl }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getPrices() {
            const res = await fetch(new URL("/variables.json", astroUrl));
            const data = await res.json();
            setData(data);
        }

        getPrices();
    }, [astroUrl]);

    const micropigmentacion = data?.micropigmentacion;

    return (
        <section
            className="flex flex-col items-center px-4 md:px-6 scroll-mt-36 md:scroll-mt-40 py-20 w-full"
            id="costos"
        >
            <SectionHeading title="¿Cuánto cuesta?"
                subtitle="Conoce nuestros precios y paquetes."
            />

            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">
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
