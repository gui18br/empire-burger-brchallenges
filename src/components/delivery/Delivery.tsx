import phone from "../../assets/png/card-phone.png";
import whatsapp from "../../assets/png/whatsapp.png";
import delivery from "../../assets/png/delivery.png";
import iceCream from "../../assets/png/iceCream.png";
import ifood from "../../assets/ifood.svg";
import phone2 from "../../assets/phone.svg";

function Delivery() {
  const deliveries = [
    {
      title: "WHATSAPP",
      description: "Vamos direto ao ponto, sem perder tempo!",
      img: whatsapp,
    },
    {
      title: "ENTREGA",
      description: "Entregamos menos de 45 minutos na porta da sua casa!",
      img: delivery,
    },
    {
      title: "SOBREMESA",
      description: "Pedidos assima de 100 reais, ganham brindes.",
      img: iceCream,
    },
    {
      title: "IFOOD",
      description: "Nossa loja é Top 1 da região!",
      img: ifood,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center mt-[68.18px]">
        <div>
          <img src={phone} alt="" />
        </div>
        <div className="ml-10">
          <h1 className="text-secondary text-[32px] font-bold mb-4">
            NOSSAS ENTREGAS
          </h1>
          <div className="flex justify-center items-center">
            <div className="relative flex flex-col gap-5">
              {deliveries.map((delivery, index) => (
                <div
                  key={index}
                  className="bg-white w-[569px] h-[90px] hover:shadow-2xl shadow-black py-2 px-4 rounded-lg transition-transform transform hover:translate-y-[-5px] flex gap-5 items-center"
                >
                  <div className="rounded-full p-4 bg-400 w-[65px] h-[65px] flex justify-center items-center ">
                    <img
                      src={delivery.img}
                      alt=""
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="border-l-[1px] border-gray-300 pl-5">
                    <h1 className="font-bold text-[20px] text-secondary">
                      {delivery.title}
                    </h1>
                    <p className="text-primary">{delivery.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[138px] bg-red-600 flex items-center p-4 rounded-xl gap-3">
        <div className="rounded-full p-4 mr-5 bg-red-700 w-[90px] h-[90px] flex justify-center items-center ml-2">
          <img src={phone2} alt="" />
        </div>
        <div className="flex justify-center items-center gap-80">
          <div className="border-l-[0.1px] pl-7 border-red-400">
            <h1 className="uppercase text-25 font-bold text-[#1D0605] ">
              faça o seu pedido agora mesmo!
            </h1>
            <p className="text-white">
              Venha saborear a melhor experiência de hamburguenses artesanal{" "}
              <br />
              do Empires Burger, com temática medieval!
            </p>
          </div>
          <div className="">
            <button className="bg-[#FAE4D0] p-3 mr-5 rounded-md text-red-600 font-bold text-[18px] transition-transform transform hover:-translate-y-1">
              SOLICITAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
