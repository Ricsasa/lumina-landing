export default function SectionHeading({ title, subtitle }) {
    return (
        <div className="mx-auto max-w-3xl text-center mb-12 px-4">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-custom-piel dark:text-custom-beige font-fira">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-base md:text-lg text-custom-oscuro/70 dark:text-custom-piel font-light">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
