import React, { useState } from 'react'

import {
    Button,
} from '@headlessui/react'
import { XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'

import SkinLogo from "../assets/branding/skin-logo.svg";
import BeigeLogo from "../assets/branding/beige-logo.svg";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(typeof localStorage !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    }

    const navigation = [
        {
            name: 'Eliminación de tatuajes',
            href: '/eliminacion-de-tatuajes'
        },
        {
            name: 'Eliminación de micropigmentación',
            href: '/eliminacion-micropigmentacion'
        },
        {
            name: 'Despigmentación facial y corporal',
            href: '/despigmentacion'
        },
        {
            name: 'Hollywood Peel',
            href: '/hollywood-peel'
        },
        {
            name: 'Microneedling (Dermapen)',
            href: '/microneedling'
        },
    ]

    return (
        <header>
            <nav className="fixed top-0 z-100 w-full transition-shadow duration-300">
                <div className={`w-full backdrop-blur-3xl border-b bg-transparent border-transparent`}
                >
                    <div className={`mx-auto w-full max-w-7xl flex items-center justify-between px-6 md:px-12 py-2 h-20`}
                    >
                        <div className="flex shrink-0 items-center">
                            <div className={`w-36 md:w-54`}>
                                <a href="/" className="block focus:outline-none focus:ring-2 focus:ring-custom-piel/50 rounded-lg" aria-label="Lumina Estudio Láser">
                                    <img src={SkinLogo.src} className="dark:hidden" alt="Lumina Estudio Láser" aria-label="Lumina Estudio Láser" />
                                    <img src={BeigeLogo.src} className="hidden dark:block" alt="Lumina Estudio Láser" aria-label="Lumina Estudio Láser" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Button
                                className={`group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 font-medium transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-custom-piel/50
                                bg-custom-piel/10 text-custom-piel hover:bg-custom-piel/20 dark:bg-custom-beige/10 dark:text-custom-beige dark:hover:bg-custom-beige/20`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="text-sm md:text-base tracking-wide font-fira">Menú</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay - Moved outside nav to avoid blur inheritance */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-110"
                />
            )}

            {/* Sidebar Drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-1/2 bg-custom-beige-light dark:bg-custom-oscuro shadow-2xl z-120 transform transition-transform duration-300 ease-in-out sm:rounded-l-[32px] border-l border-custom-piel/10 dark:border-custom-beige/10 flex flex-col
                ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                `}
            >
                <div className='flex justify-between items-center px-8 py-6 border-b border-custom-piel/10 dark:border-custom-beige/10'>
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-custom-piel/5 dark:bg-custom-beige/5 hover:bg-custom-piel/10 dark:hover:bg-custom-beige/10 transition-colors cursor-pointer text-custom-piel dark:text-custom-beige focus:outline-none focus:ring-2 focus:ring-custom-piel/50"
                        aria-label="Cambiar tema"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="w-10 h-10" />
                        ) : (
                            <SunIcon className="w-10 h-10" />
                        )}
                    </button>
                    <Button
                        className='p-3 rounded-full bg-custom-piel/5 dark:bg-custom-beige/5 hover:bg-custom-piel/10 dark:hover:bg-custom-beige/10 transition-colors cursor-pointer text-custom-piel dark:text-custom-beige focus:outline-none focus:ring-2 focus:ring-custom-piel/50'
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <XMarkIcon className="w-10 h-10" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-8">
                    <h2 className="text-sm font-medium tracking-widest text-custom-piel/50 dark:text-custom-beige/50 uppercase mb-4 font-fira">Servicios</h2>
                    <nav className="flex flex-col space-y-1">
                        {navigation.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="px-4 py-2 rounded-2xl text-xl md:text-3xl font-medium tracking-wide text-custom-piel dark:text-custom-beige hover:bg-custom-piel/5 dark:hover:bg-custom-beige/5 transition-colors duration-200"
                                title={item.name}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <hr className='my-6 border-custom-piel/10 dark:border-custom-beige/10' />

                    <nav className="flex flex-col space-y-1">
                        <a
                            href="/#servicios"
                            className="px-4 py-2 rounded-2xl text-xl md:text-3xl font-medium tracking-wide text-custom-piel dark:text-custom-beige hover:bg-custom-piel/5 dark:hover:bg-custom-beige/5 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                            title="Nuestros Servicios"
                        >
                            Nuestros Servicios
                        </a>
                        <a
                            href="/#reviews"
                            className="px-4 py-2 rounded-2xl text-xl md:text-3xl font-medium tracking-wide text-custom-piel dark:text-custom-beige hover:bg-custom-piel/5 dark:hover:bg-custom-beige/5 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                            title="Reseñas"
                        >
                            Reseñas
                        </a>
                        <a
                            href="/#ubicacion"
                            className="px-4 py-2 rounded-2xl text-xl md:text-3xl font-medium tracking-wide text-custom-piel dark:text-custom-beige hover:bg-custom-piel/5 dark:hover:bg-custom-beige/5 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                            title="Nuestra Ubicación"
                        >
                            Nuestra Ubicación
                        </a>
                    </nav>
                </div>
            </aside>
        </header>
    )
}
