import oferta1 from "../../assets/png/oferta-1.png";
import oferta2 from "../../assets/png/oferta-2.png";
import oferta3 from "../../assets/png/oferta-3.png";

function PromotionItems() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      {/* <div className="pl-[30px] md:pl-0 md:ml-[30px] text-start">
        <p>
          Este é um texto centralizado na página, mas alinhado ao início com uma
          margem de 30px à esquerda de forma responsiva.
        </p>
      </div> */}
      <div className="w-full lg:pl-10 xl:pl-24 p-0">
        <h1 className="text-32 text-secondary font-bold text-left">
          OFERTAS ESPECIAIS
        </h1>
        <p className="text-primary mb-5 text-left">
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 gap-5">
          <img src={oferta1} className="col-span-2" />
          <div className="absolute top-0 left-0 text-white p-4">
            <h1 className="text-3xl font-bold">BURGER IMPERIAL+BATATA</h1>
            <p className="text-lg">250kg</p>
          </div>
          <div className="absolute bottom-0 left-80 lg:left-1/2 text-white p-4">
            <p className="text-xl">Apenas</p>
            <h1 className="text-5xl font-bold">HOJE</h1>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-4">
            <img src={oferta2} />
            <img src={oferta3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionItems;
