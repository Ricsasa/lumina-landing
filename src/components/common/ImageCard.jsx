/**
 * A single image in the same card frame the before/after Slider uses, so
 * framed and unframed results stop sitting side by side in the galleries.
 */
export default function ImageCard({ src, alt }) {
    return (
        <div className="w-full max-w-xs mx-auto flex flex-col overflow-hidden bg-custom-beige-light dark:bg-custom-oscuro rounded-2xl md:rounded-4xl shadow-sm hover:shadow-md border border-custom-piel/10 dark:border-custom-beige/20 hover:border-custom-piel/20 dark:hover:border-custom-beige/40 transition-all duration-300">
            <img
                src={src}
                alt={alt}
                title={alt}
                className="w-full h-auto object-cover"
            />
        </div>
    );
}
