import { Element } from "react-scroll";

import oferta1 from "../../assets/png/oferta-1.png";
import oferta2 from "../../assets/png/oferta-2.png";
import oferta3 from "../../assets/png/oferta-3.png";

function PromotionItems() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center justify-center md:mt-32 mt-80 w-[88%]">
        <Element name="promotion" className="w-full">
          <h1 className="md:text-32 text-25 text-secondary font-bold text-left">
            OFERTAS ESPECIAIS
          </h1>
          <p className="text-primary mb-5 text-left ">
            Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
            sempre estamos mudando o nosso cardapio.
          </p>
        </Element>
        <div className="relative md:w-full">
          <div className="grid md:grid-cols-3 gap-2">
            <img src={oferta1} className="md:col-span-2" />
            <div className="absolute top-0 left-0 text-white p-4">
              <h1 className="sm:text-3xl text-xl">BURGER IMPERIAL+BATATA</h1>
              <p className="sm:text-lg">250kg</p>
            </div>
            <div className="absolute bottom-0 lg:block hidden lg:left-1/2 text-white p-4">
              <p className="text-xl">Apenas</p>
              <h1 className="text-5xl">HOJE</h1>
            </div>
            <div className="md:col-span-1 grid md:grid-cols-1 gap-1">
              <div className="relative">
                <img src={oferta2} className="w-full" />
                <div className="absolute inset-0 flex items-start justify-start text-[#1D0605E5] p-4">
                  <div>
                    <h1 className="text-xl">BATATA</h1>
                    <p className="text-lg">150kg</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={oferta3} className="w-full" />
                <div className="absolute inset-0 flex items-start justify-start text-[#1D0605E5] p-4">
                  <div>
                    <h1 className="text-xl">SORVETE</h1>
                    <p className="text-lg">50kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionItems;
