import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

export default function Slider({
    image1,
    image2,
    image1Alt = "Antes",
    image2Alt = "Después",
    description
}) {
    return (
        <div className="w-1/2 md:w-xs max-w-4xl mx-auto flex flex-col overflow-hidden bg-custom-beige-light dark:bg-custom-oscuro rounded-2xl md:rounded-[32px] shadow-sm border border-custom-piel/10 dark:border-custom-beige/20 hover:border-custom-piel/20 hover:dark:border-custom-beige/40 transition-colors duration-300">

            {/* Image Comparison Area */}
            <div className="relative w-full aspect-auto rounded-t-2xl md:rounded-t-[32px] overflow-hidden bg-black/5 dark:bg-white/5">
                <ReactCompareSlider
                    className="w-full h-full"
                    handle={
                        <ReactCompareSliderHandle
                            buttonStyle={{
                                backdropFilter: 'blur(8px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                color: '#fff',
                            }}
                            linesStyle={{ opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.8)' }}
                        />
                    }
                    itemOne={
                        <ReactCompareSliderImage
                            src={image1.src}
                            alt={image1Alt}
                            className="object-cover w-3 h-3"
                        />
                    }
                    itemTwo={
                        <ReactCompareSliderImage
                            src={image2.src}
                            alt={image2Alt}
                            className="object-cover w-3 h-3"
                        />
                    }
                />

                {/* Optional Material-style floating labels */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs md:text-sm font-medium tracking-wide">
                        {image1Alt}
                    </span>
                </div>
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs md:text-sm font-medium tracking-wide">
                        {image2Alt}
                    </span>
                </div>
            </div>

            {/* Support Text / Description Section (Material Design 3 style) */}
            {description && (
                <div className="px-6 py-4 md:px-8 md:py-6 bg-custom-piel/5 dark:bg-custom-beige/5 border-t border-custom-piel/5 dark:border-custom-beige/10">
                    <p className="text-sm md:text-base text-custom-piel/80 dark:text-custom-beige/80 font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}
