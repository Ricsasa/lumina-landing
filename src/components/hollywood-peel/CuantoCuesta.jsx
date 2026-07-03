import React, { useEffect, useState } from "react";

import PriceCard from "../common/PriceCard";

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

            <div className="w-[calc(100vw-2em)] max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
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
