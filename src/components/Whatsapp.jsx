import React, { useEffect, useState } from "react";

import WhatsappWhite from "../assets/external/whatsapp-white.svg";

const whatsappMessage =
    "¡Hola! He visto su pagina web, y quisiera recibir más información!";

export default function Whatsapp({ astroUrl }) {
    const [variables, setVariables] = useState(null);

    useEffect(() => {
        async function getVariables() {
            const res = await fetch(new URL("/variables.json", astroUrl));
            const data = await res.json();
            setVariables(data);
        }

        getVariables();
    }, [astroUrl]);

    const telefonoWhatsapp = variables?.telefonoWhatsapp || "523314884042";

    return (
        <div className="fixed bottom-8 right-2 md:right-8 z-90">
            <a
                href={`https://wa.me/${telefonoWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-custom-whatsapp-green text-white text-sm md:text-lg font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-custom-piel/50"
            >
                <img
                    src={WhatsappWhite.src}
                    alt="Whatsapp green Logo"
                    title="Contactanos!"
                    className="w-6 h-6"
                />
                ¡Agenda tu cita!
            </a>
        </div>
    );
}
