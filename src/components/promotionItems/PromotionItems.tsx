import oferta1 from "../../assets/png/oferta-1.png";
import oferta2 from "../../assets/png/oferta-2.png";
import oferta3 from "../../assets/png/oferta-3.png";

function PromotionItems() {
  return (
    <div>
      <div className="justify-start mt-32 ml-122">
        <h1 className="text-32 text-secondary font-bold">OFERTAS ESPECIAIS</h1>
        <p className="text-primary mb-5">
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
      </div>
      <div className="ml-122 relative">
        <div className="grid grid-cols-3 gap-2">
          <img src={oferta1} className="col-span-2" />
          <div className="absolute top-0 left-0 text-white p-4">
            <h1 className="text-3xl font-bold">BURGER IMPERIAL+BATATA</h1>
            <p className="text-lg">250kg</p>
          </div>
          <div className="absolute bottom-0 left-1/2 text-white p-4">
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
