import React from "react"
import { useQuery } from "@tanstack/react-query"
import Marquee from "react-fast-marquee"

import axios from "axios"
import { queryClient } from "../../store"

import GoogleMapsLogo from "../../assets/external/google-maps.svg?react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";



const Reviews = () => {

    /*
        const { data } = useQuery({
            queryKey: ['app', 'maps-reviews', 'reviews'],
            queryFn: () => {
                /*
                            return axios.get(`${baseURL}`, {
                                params: {
                                    place_id: PLACE_ID,
                                    key: API_KEY,
                                    fields: 'name,formatted_address,reviews,rating,user_ratings_total',
                                    reviews_no_translations: true
                                }
                            });
                
    
                return {
                    data: {
                        result: {
                            reviews: [
                                {
                                    "author_name": "ka ndis",
                                    "author_url": "https://www.google.com/maps/contrib/116435617370164033803/reviews",
                                    "language": "en",
                                    "original_language": "en",
                                    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocI8K5k-UsNXMd_1QrBJ8-_tXIqQaK5S1xA5cB8pHV3r4G5Uzg=s128-c0x00000000-cc-rp-mo-ba3",
                                    "rating": 5,
                                    "relative_time_description": "2 months ago",
                                    "text": "It was my first time at this location and my fourth removal session for this tattoo.  Unlike my previous sessions at other locations, the technician was kind and and gentle. She took care and noticed I was in a little bit of pain, so she turned the laser down to make my experience more comfortable. She was thorough and I am absolutely satisfied with her process. The price was very reasonable. I will definitely be back for my next session.",
                                    "time": 1766439566,
                                    "translated": false
                                },
                                {
                                    "author_name": "Jose Bonilla",
                                    "author_url": "https://www.google.com/maps/contrib/109604303983670823343/reviews",
                                    "language": "es",
                                    "original_language": "es",
                                    "profile_photo_url": "https://lh3.googleusercontent.coma-/ALV-UjWRB3ANLhfnfQ-sWgCbx2fDQsOsM51h-O7oUIyWaSdcCylMYpR7=s128-c0x00000000-cc-rp-mo",
                                    "rating": 5,
                                    "relative_time_description": "3 weeks ago",
                                    "text": "El equipo es súper profesional y te explican el proceso paso a paso, lo que te da mucha tranquilidad. El lugar está impecable y cumplen con todas las normas de higiene. Si buscas un sitio de confianza para borrarte un tatuaje, este es el lugar indicado. ¡100% recomendados!",
                                    "time": 1770768595,
                                    "translated": false
                                },
                                {
                                    "author_name": "Myriam Azucena Nuño",
                                    "author_url": "https://www.google.com/maps/contrib/107032952148996881023/reviews",
                                    "language": "es",
                                    "original_language": "es",
                                    "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXi0yKelXmCmHz-ZWwpk0O8UyXZffCDpQk-P_wvQy7fYpBMzBRh=s128-c0x00000000-cc-rp-mo",
                                    "rating": 5,
                                    "relative_time_description": "4 months ago",
                                    "text": "Excelente servicio, super cuidadosa, atenta, lugar muy limpio. Lo recomiendo 100% los resultados han sido geniales!! Sin marcas, ni quemaduras en mi piel. Si, definitivamente si la recomiendo 💜",
                                    "time": 1760578262,
                                    "translated": false
                                },
                                {
                                    "author_name": "Luis Esparza Argumaniz",
                                    "author_url": "https://www.google.com/maps/contrib/118117229454054114273/reviews",
                                    "language": "es",
                                    "original_language": "es",
                                    "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWirjMsEWTTNrw8AVQdQE_sQZt9s9ynE_ZjKwTZ4-sqTq8-mLRD=s128-c0x00000000-cc-rp-mo",
                                    "rating": 5,
                                    "relative_time_description": "3 weeks ago",
                                    "text": "Lugar muy limpio, hacen todo lo posible para que estés cómodo, No juzgan tu tatuaje a remover 😅, muy profesionales.",
                                    "time": 1770762417,
                                    "translated": false
                                },
                                {
                                    "author_name": "Tadeo Valencia García",
                                    "author_url": "https://www.google.com/maps/contrib/100468740286224283031/reviews",
                                    "language": "es",
                                    "original_language": "es",
                                    "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjW6714rAwwdOboSmUImO-PyEWqdfKDurCXvukWj_aCLnADZp9Bw=s128-c0x00000000-cc-rp-mo-ba3",
                                    "rating": 5,
                                    "relative_time_description": "3 weeks ago",
                                    "text": "Muy amables y atentos, te explican el proceso muy bien. Muy limpio y excelente ubicación. Si lo recomiendo",
                                    "time": 1770769039,
                                    "translated": false
                                }
                            ],
                            rating: 5,
                            user_ratings_total: 28
                        }
                    }
                }
            },
        }, queryClient)
        */

    const data = {
        data: {
            result: {
                reviews: [
                    {
                        "author_name": "ka ndis",
                        "author_url": "https://www.google.com/maps/contrib/116435617370164033803/reviews",
                        "language": "en",
                        "original_language": "en",
                        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocI8K5k-UsNXMd_1QrBJ8-_tXIqQaK5S1xA5cB8pHV3r4G5Uzg=s128-c0x00000000-cc-rp-mo-ba3",
                        "rating": 5,
                        "relative_time_description": "2 months ago",
                        "text": "It was my first time at this location and my fourth removal session for this tattoo.  Unlike my previous sessions at other locations, the technician was kind and and gentle. She took care and noticed I was in a little bit of pain, so she turned the laser down to make my experience more comfortable. She was thorough and I am absolutely satisfied with her process. The price was very reasonable. I will definitely be back for my next session.",
                        "time": 1766439566,
                        "translated": false
                    },
                    {
                        "author_name": "Jose Bonilla",
                        "author_url": "https://www.google.com/maps/contrib/109604303983670823343/reviews",
                        "language": "es",
                        "original_language": "es",
                        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWRB3ANLhfnfQ-sWgCbx2fDQsOsM51h-O7oUIyWaSdcCylMYpR7=s128-c0x00000000-cc-rp-mo",
                        "rating": 5,
                        "relative_time_description": "3 weeks ago",
                        "text": "El equipo es súper profesional y te explican el proceso paso a paso, lo que te da mucha tranquilidad. El lugar está impecable y cumplen con todas las normas de higiene. Si buscas un sitio de confianza para borrarte un tatuaje, este es el lugar indicado. ¡100% recomendados!",
                        "time": 1770768595,
                        "translated": false
                    },
                    {
                        "author_name": "Myriam Azucena Nuño",
                        "author_url": "https://www.google.com/maps/contrib/107032952148996881023/reviews",
                        "language": "es",
                        "original_language": "es",
                        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXi0yKelXmCmHz-ZWwpk0O8UyXZffCDpQk-P_wvQy7fYpBMzBRh=s128-c0x00000000-cc-rp-mo",
                        "rating": 5,
                        "relative_time_description": "4 months ago",
                        "text": "Excelente servicio, super cuidadosa, atenta, lugar muy limpio. Lo recomiendo 100% los resultados han sido geniales!! Sin marcas, ni quemaduras en mi piel. Si, definitivamente si la recomiendo 💜",
                        "time": 1760578262,
                        "translated": false
                    },
                    {
                        "author_name": "Luis Esparza Argumaniz",
                        "author_url": "https://www.google.com/maps/contrib/118117229454054114273/reviews",
                        "language": "es",
                        "original_language": "es",
                        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWirjMsEWTTNrw8AVQdQE_sQZt9s9ynE_ZjKwTZ4-sqTq8-mLRD=s128-c0x00000000-cc-rp-mo",
                        "rating": 5,
                        "relative_time_description": "3 weeks ago",
                        "text": "Lugar muy limpio, hacen todo lo posible para que estés cómodo, No juzgan tu tatuaje a remover 😅, muy profesionales.",
                        "time": 1770762417,
                        "translated": false
                    },
                    {
                        "author_name": "Tadeo Valencia García",
                        "author_url": "https://www.google.com/maps/contrib/100468740286224283031/reviews",
                        "language": "es",
                        "original_language": "es",
                        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjW6714rAwwdOboSmUImO-PyEWqdfKDurCXvukWj_aCLnADZp9Bw=s128-c0x00000000-cc-rp-mo-ba3",
                        "rating": 5,
                        "relative_time_description": "3 weeks ago",
                        "text": "Muy amables y atentos, te explican el proceso muy bien. Muy limpio y excelente ubicación. Si lo recomiendo",
                        "time": 1770769039,
                        "translated": false
                    },
                    {
                        "author_name": "Ceci Ozuna",
                        "author_url": "https://www.google.com/maps/contrib/100468740286224283031/reviews",
                        "language": "es",
                        "original_language": "es",
                        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjW6714rAwwdOboSmUImO-PyEWqdfKDurCXvukWj_aCLnADZp9Bw=s128-c0x00000000-cc-rp-mo-ba3",
                        "rating": 5,
                        "relative_time_description": "3 weeks ago",
                        "text": "Buena atención y trato amable, muy poco dolor, muy recordable",
                        "time": 1770769039,
                        "translated": false
                    }
                ],
                rating: 5,
                user_ratings_total: 28
            }
        }
    }

    const elements = data.data.result.reviews.map((r, i) => (
        <Review key={i} review={r} />
    ))

    return (
        <section
            className="justify-center md:px-6 scroll-mt-24 bg-custom-piel dark:bg-custom-piel/90 py-12 flex flex-col items-center w-full"
            id="reviews">
            <div className="py-8 mx-auto lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center mb-12">
                    <h2
                        className="text-3xl md:text-5xl font-medium tracking-tight text-custom-beige font-fira"
                    >
                        Reseñas
                    </h2>
                    <p
                        className="mt-4 px-4 md:px-0 text-base md:text-lg text-custom-beige/80 font-light"
                    >
                        Descubre lo que nuestros clientes opinan de nuestros servicios.
                    </p>
                </div>
                <div className="w-2/3 md:w-1/2 lg:w-100 mx-auto">
                    <Rating isPending={false} data={data} />
                </div>
                <div className="w-[calc(97vw)]">
                    <Marquee
                        className="py-4"
                        autoFill
                    >
                        {elements}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

const Review = ({ review }) => {
    const { author_name, rating, relative_time_description, text } = review
    return (
        <div className="flex flex-col w-[350px] min-h-[220px] p-6 mx-4 bg-custom-beige-light dark:bg-custom-oscuro rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 border border-custom-piel/10 dark:border-custom-beige/20 hover:dark:border-custom-beige/40">
            <div className="flex items-center mb-4">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        rating > i ?
                            <StarIcon key={i} className="size-5 text-amber-500" /> :
                            <StarIconOutline key={i} className="size-5 text-amber-500/40" />
                    ))}
                </div>
                <span className="ml-auto text-xs font-light tracking-wide text-custom-piel/60 dark:text-custom-beige/50">
                    {relative_time_description}
                </span>
            </div>

            <p className="grow text-sm md:text-base font-light leading-relaxed text-custom-piel/80 dark:text-custom-beige/80 line-clamp-4">
                &quot;{text}&quot;
            </p>

            <div className="mt-6 pt-4 border-t border-custom-piel/10 dark:border-custom-beige/10 flex items-center">
                <span className="text-sm font-medium tracking-wide text-custom-piel dark:text-custom-beige font-fira">
                    {author_name}
                </span>
            </div>
        </div>
    )
}

const Rating = ({ isPending, data }) => {
    const rating = data?.data?.result?.rating;
    const total = data?.data?.result?.user_ratings_total;
    const isLoading = isPending

    return (
        <div className="mx-auto p-6 mb-8 border border-custom-piel/10 dark:border-custom-beige/20 hover:dark:border-custom-beige/40 rounded-[24px] shadow-sm hover:shadow-md bg-custom-beige-light dark:bg-custom-oscuro backdrop-blur-md items-center transition-all duration-300">
            <a href='https://maps.app.goo.gl/QsCe1PNkZYdcLpfr7' target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex justify-around gap-8">
                    <GoogleMapsLogo width={70} className="shrink-0 saturate-50 group-hover:saturate-100 transition-all duration-300" />
                    <div className="flex flex-col justify-center">
                        <p className="flex flex-col lg:flex-row gap-4 pb-2 dark:text-custom-beige font-fira items-center">
                            <span className="text-sm md:text-xl font-medium">{rating} / 5</span>
                            <span className="flex">
                                {[...Array(5)].map((_, i) => (
                                    rating > i ?
                                        <StarIcon key={i} className="size-5 text-amber-500" /> :
                                        <StarIconOutline key={i} className="size-5 text-amber-500/40" />
                                ))}
                            </span>
                        </p>
                        <p className="text-sm md:text-lg font-light tracking-wide text-custom-piel/80 dark:text-custom-beige/80 text-center">
                            Basado en {total} reseñas
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Reviews
