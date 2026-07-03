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
            <button className="bg-custom-whatsapp-green text-custom-pink p-4 font-bold rounded-2xl shadow-lg">
                <a
                    href={`https://wa.me/${telefonoWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 text-white text-sm md:text-lg"
                >
                    <img
                        width="14"
                        src={WhatsappWhite.src}
                        alt="Whatsapp green Logo"
                        title="Contactanos!"
                    />
                    ¡Agenda tu cita!
                </a>
            </button>
        </div>
    );
}
