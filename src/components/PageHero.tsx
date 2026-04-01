import React from "react";

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
  backgroundPosition?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  image,
  backgroundPosition = "center",
}) => {
  return (
    <section className="relative overflow-hidden flex items-center min-h-[24rem] md:min-h-[30rem] py-24 md:py-28 text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundPosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/75 to-green-800/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
