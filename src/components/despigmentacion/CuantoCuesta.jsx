import React, { useEffect, useState } from "react";

import WhatsappWhite from "../../assets/external/whatsapp-white.svg";
import PriceCard from "../common/PriceCard";
import SectionHeading from "../common/SectionHeading.jsx";

const whatsappMessage =
    "Hola, estoy interesado en sus servicios de despigmentación.";

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

    const despigmentacion = data?.despigmentacion;
    const telefonoWhatsapp = data?.telefonoWhatsapp || "523314884042";

    return (
        <section
            className="flex flex-col items-center px-4 md:px-6 scroll-mt-36 md:scroll-mt-40 py-20 w-full"
            id="costos"
        >
            <SectionHeading title="¿Cuánto cuesta?"
                subtitle="Conoce nuestros precios y paquetes."
            />

            <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
                <PriceCard
                    title="Rostro"
                    description="Tratamiento especializado para eliminar manchas y pigmentación no deseada en el rostro."
                    pricePrefix
                >
                    ${Number(despigmentacion?.rostro || 0).toLocaleString()} por
                    sesión
                </PriceCard>

                <PriceCard
                    title="Axilas"
                    description="Tratamiento especializado para eliminar manchas y pigmentación no deseada en las axilas."
                    pricePrefix
                >
                    ${Number(despigmentacion?.axilas || 0).toLocaleString()} por
                    sesión
                </PriceCard>

                <PriceCard
                    title="Manos"
                    description="Tratamiento especializado para eliminar manchas y pigmentación no deseada en las manos."
                    pricePrefix
                >
                    ${Number(despigmentacion?.manos || 0).toLocaleString()} por
                    sesión
                </PriceCard>

                <PriceCard
                    title="Paquete de 4 sesiones"
                    description="Aprovecha nuestros paquetes de 4 sesiones y ahorra."
                >
                    <span className="text-custom-piel dark:text-custom-beige line-through">
                        $
                        {Number(
                            despigmentacion?.paquete4Sesiones?.normal || 0,
                        ).toLocaleString()}
                    </span>
                    &nbsp;
                    <span className="text-custom-piel dark:text-custom-beige">
                        $
                        {Number(
                            despigmentacion?.paquete4Sesiones?.descuento || 0,
                        ).toLocaleString()}
                    </span>
                </PriceCard>
            </div>

            <div className="mx-auto max-w-3xl text-center mt-12">
                <p className="text-2xl text-custom-piel dark:text-custom-beige font-light px-4">
                    ¿Te interesa despigmentar otra parte de tu cuerpo?
                    ¡Contactanos!
                </p>
                <div className="max-w-3/4 mx-auto flex items-center justify-center gap-2">
                    <a
                        href={`https://wa.me/${telefonoWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 bg-custom-whatsapp-green text-white px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-custom-piel/50"
                    >
                        <img
                            src={WhatsappWhite.src}
                            alt="WhatsApp Logo"
                            className="w-6 h-6"
                            title="Obten una cotización personalizada!"
                        />
                        ¡Obten una cotización personalizada!
                    </a>
                </div>
            </div>
        </section>
    );
}
