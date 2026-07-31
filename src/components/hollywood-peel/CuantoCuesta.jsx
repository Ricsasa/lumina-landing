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

    const hollywood = data?.hollywood;

    return (
        <section
            className="flex flex-col items-center px-4 md:px-6 scroll-mt-36 md:scroll-mt-40 py-20 w-full"
            id="costos"
        >
            <SectionHeading title="¿Cuánto cuesta?"
                subtitle="Conoce nuestros precios y paquetes."
            />

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
                <PriceCard
                    title="Sesión Única"
                    description="Ideal para probar el tratamiento de Hollywood Peel."
                    pricePrefix
                >
                    ${Number(hollywood?.unica || 0).toLocaleString()}
                </PriceCard>

                <PriceCard
                    title="Paquete de 4 Sesiones"
                    description="Resultados óptimos para tu piel."
                >
                    <span className="text-custom-piel dark:text-custom-beige line-through">
                        $
                        {Number(
                            hollywood?.paquete4Sesiones?.normal || 0,
                        ).toLocaleString()}
                    </span>
                    &nbsp;
                    <span className="text-custom-piel dark:text-custom-beige">
                        $
                        {Number(
                            hollywood?.paquete4Sesiones?.descuento || 0,
                        ).toLocaleString()}
                    </span>
                </PriceCard>

                <PriceCard
                    title="Paquete de 6 Sesiones"
                    description="El mejor valor por tu dinero."
                >
                    <span className="text-custom-piel dark:text-custom-beige line-through">
                        $
                        {Number(
                            hollywood?.paquete6Sesiones?.normal || 0,
                        ).toLocaleString()}
                    </span>
                    &nbsp;
                    <span className="text-custom-piel dark:text-custom-beige">
                        $
                        {Number(
                            hollywood?.paquete6Sesiones?.descuento || 0,
                        ).toLocaleString()}
                    </span>
                </PriceCard>
            </div>
        </section>
    );
}
