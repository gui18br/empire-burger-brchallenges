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
      <div className="flex flex-col md:flex-row justify-between items-center mt-[68.18px] w-[88%]">
        <div>
          <img src={phone} alt="" />
        </div>
        <div className="md:ml-10">
          <h1 className="text-secondary md:text-[32px] text-25 font-bold mb-4">
            NOSSAS ENTREGAS
          </h1>
          <div className="flex justify-center items-center">
            <div className="relative flex flex-col gap-5">
              {deliveries.map((delivery, index) => (
                <div
                  key={index}
                  className="bg-white sm:w-[569px] w-[340px] h-[90px] hover:shadow-2xl shadow-black py-2 px-4 rounded-lg transition-transform transform hover:translate-y-[-5px] flex gap-5 items-center"
                >
                  <div className="flex justify-center items-center bg-400 md:p-5 p-4 rounded-full  ">
                    <img
                      src={delivery.img}
                      alt="Description"
                      className="rounded-full w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="border-l-[1px] border-gray-300 pl-5 w-[300px] md:w-full">
                    <h1 className="font-bold md:text-[20px] text-18 text-secondary">
                      {delivery.title}
                    </h1>
                    <p className="text-primary text-[14px] md:text-[16px]">
                      {delivery.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[138px] bg-red-600 w-[88%] flex items-center p-4 rounded-xl gap-3 md:flex-row flex-col">
        <div className="rounded-full p-4 mr-5 bg-red-700 w-[90px] h-[90px] flex justify-center items-center ml-2">
          <img src={phone2} alt="" />
        </div>
        <div className="flex md:flex-row flex-col text-center md:text-start justify-center items-center md:gap-80 gap-16">
          <div className="md:border-l-[0.1px] md:pl-7 border-red-400">
            <h1 className="uppercase text-25 font-bold text-[#1D0605] ">
              faça o seu pedido agora mesmo!
            </h1>
            <p className="text-white">
              Venha saborear a melhor experiência de hamburguenses artesanal do{" "}
              <strong>Empires Burger</strong>, com temática medieval!
            </p>
          </div>
          <div className="w-[100%] md:w-[28%]">
            <button className="bg-[#FAE4D0] w-full p-3 md:mr-5 rounded-md text-red-600 font-bold text-[18px] transition-transform transform hover:-translate-y-1">
              SOLICITAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
