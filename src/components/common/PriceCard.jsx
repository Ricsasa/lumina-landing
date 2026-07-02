

export default function PriceCard({ title, description, pricePrefix = false, children }) {
    const cardClasses =
        "flex flex-col w-full sm:w-[350px] p-4 md:p-6 lg:p-8 bg-custom-beige-light dark:bg-custom-oscuro rounded-[32px] transition-all duration-300 shadow-sm border border-custom-piel/10 dark:border-custom-beige/20 hover:dark:border-custom-beige/40 hover:shadow-md";

    return (
        <div className={cardClasses}>
            <div className="flex items-start gap-4 p-6 bg-custom-piel/5 dark:bg-custom-beige/5 rounded-[24px] mb-8">
                <div>
                    <h3 className="text-xl font-medium text-custom-piel dark:text-custom-beige mb-2 font-fira">
                        {title}
                    </h3>
                    <p className="text-sm md:text-base text-custom-oscuro dark:text-custom-piel font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            <div className="px-6 mt-auto flex justify-between items-center">
                <div>
                    {pricePrefix && (
                        <span className="text-sm font-light text-custom-piel/60 dark:text-custom-beige/60">
                            Desde
                        </span>
                    )}
                    <p className="text-3xl font-medium text-custom-piel dark:text-custom-beige font-fira">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
}