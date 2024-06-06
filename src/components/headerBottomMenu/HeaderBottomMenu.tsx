import burger from "../../assets/burger.svg";
import delivery from "../../assets/delivery.svg";
import atendimento from "../../assets/headset.svg";

function HeaderBottomMenu() {
  const items = [
    {
      title: "Artesanal",
      img: burger,
      description: `Nossas receitas são<br>feitas com todo cuidado`,
    },
    {
      title: "Atendimento",
      img: atendimento,
      description: "Totalmente<br>personalizado",
    },
    {
      title: "DELIVERY Speed",
      img: delivery,
      description: "Entregamos menos de<br>45 minutos",
    },
  ];

  return (
    <div className="absolute md:-bottom-14 -bottom-52 left-1/2 transform -translate-x-1/2 ">
      <div className="bg-white rounded-lg xl:w-970 md:w-[750px] w-[330px] h-[322px] md:h-28 shadow-lg flex align-middle items-center justify-center">
        <ul className="flex flex-col md:flex-row md:ml-5 xl:gap-10 xl:ml-7 gap-3 md:w-full md:mr-8">
          {items.map((item, index) => (
            <>
              {index === 2 && (
                <div className="bg-gray-300 md:pr-2s pt-2s"></div>
              )}
              {index === 1 && (
                <div className="bg-gray-300 md:pl-2s pb-2s"></div>
              )}
              <li key={index} className="flex xl:gap-5 gap-5">
                <div className="bg-400  justify-center rounded-full xl:p-6 md:p-4 p-6 flex items-center">
                  <img src={item.img} alt="" className="w-31 h-31" />
                </div>
                <div>
                  <h1 className="font-bold text-secondary xl:text-20 md:text-18  uppercase">
                    {item.title}
                  </h1>
                  <p
                    className="text-primary text-[14px]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderBottomMenu;
