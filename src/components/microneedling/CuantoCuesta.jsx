import React, { useEffect, useState } from "react";

import WhatsappWhite from "../../assets/external/whatsapp-white.svg";
import PriceCard from "../common/PriceCard";

const whatsappMessage =
    "Hola, estoy interesado en servicios personalizados de microneedling.";

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

    const microneedling = data?.microneedling;

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

            <div className="w-[calc(100vw-2em)] max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
                <PriceCard
                    title="Microneedling"
                    description="Sesión completa con peptonas + terapia de luz roja."
                >
                    ${Number(microneedling?.unica || 0).toLocaleString()} por
                    sesión
                </PriceCard>

                <PriceCard
                    title="Paquete de 4 sesiones"
                    description="Aprovecha nuestros paquetes de 4 sesiones y ahorra."
                >
                    <span className="text-custom-piel dark:text-custom-beige line-through">
                        $
                        {Number(
                            microneedling?.paquete4Sesiones?.normal || 0,
                        ).toLocaleString()}
                    </span>
                    &nbsp;
                    <span className="text-custom-piel dark:text-custom-beige">
                        $
                        {Number(
                            microneedling?.paquete4Sesiones?.descuento || 0,
                        ).toLocaleString()}
                    </span>
                </PriceCard>
            </div>

            <div className="mx-auto max-w-3xl text-center mt-12">
                <p className="text-2xl text-custom-piel dark:text-custom-beige font-light px-4">
                    ¿Te interesa tratar otros problemas como acné, alopecia,
                    etc.? ¡Contactanos!
                </p>
                <div className="max-w-3/4 mx-auto flex items-center justify-center gap-2">
                    <a
                        href={`https://wa.me/523314884042?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 bg-custom-whatsapp-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        <img
                            src={WhatsappWhite}
                            alt="WhatsApp Logo"
                            className="w-6 h-6"
                        />
                        ¡Obten una cotización personalizada!
                    </a>
                </div>
            </div>
        </section>
    );
}
