import { useState, useEffect } from "react";

const heroImgDesk = "images/hero/heroDesk.png";
const heroImgMob = "images/hero/heroMobile.png";

const SectionHero = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: `url(${heroImgMob})`,
  });

  useEffect(() => {
    // Función para actualizar la dirección del gradiente y la imagen
    const updateBackgroundStyle = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // Para dispositivos md o mayores
        setBackgroundStyle({
          backgroundImage: `url(${heroImgDesk})`,
        });
      } else {
        // Para dispositivos móviles
        setBackgroundStyle({
          backgroundImage: `url(${heroImgMob})`,
        });
      }
    };

    // Llamar una vez al montar
    updateBackgroundStyle();

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener("resize", updateBackgroundStyle);

    // Limpieza del event listener
    return () => {
      window.removeEventListener("resize", updateBackgroundStyle);
    };
  }, []);
  return (
    <div className="h-full ">
      <div className="h-full bg-cover bg-top md:bg-[length:100%_100%]" style={backgroundStyle}>
        {/* Contenido de la Hero */}
        <div className="flex flex-col items-center justify-between h-full text-center text-white p-4 pt-20 md:pt-10 md:pb-14">
          <div className="basis-7/12 md:basis-6/12 flex flex-col items-center justify-around">
            <img
                src="/images/logo/familyTreeLogo.png"
                className="md:max-h-32 max-h-48  block object-fill"
                alt="Family Tree Logo"
            />
            <div>
                <h1 className="text-brand-1 text-6xl md:text-5xl font-bold mb-4 font-crimson uppercase">
                Nature freedom days
                </h1>
                <p className="text-2xl  md:text-2xl mb-4 uppercase font-nunito font-bold text-brand-3">
                Mental helth care made natural 
                </p>

            </div>
            <div>
                
                <a
                href="#contact"
                className="bg-brand-8 border-2 border-brand-3 text-white px-6 py-3 rounded-full hover:bg-brand-2 transition-colors uppercase font-nunito font-bold text-lg"
                >

                Register your interest
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
