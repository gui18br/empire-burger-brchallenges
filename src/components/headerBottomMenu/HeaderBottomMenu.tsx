import burger from "../../assets/png/burger.png";
import delivery from "../../assets/png/delivery.png";
import atendimento from "../../assets/png/atendimento.png";

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
    <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 ">
      <div className="bg-white rounded-md xl:w-970 w-[800px] h-28 shadow-lg flex align-middle items-center">
        <ul className="flex ml-6 xl:gap-10 gap-2">
          {items.map((item, index) => (
            <>
              {index === 2 && <div className="bg-gray-300 pr-2s"></div>}
              {index === 1 && <div className="bg-gray-300 pl-2s"></div>}
              <li key={index} className="flex gap-5">
                <div className="bg-400 rounded-full xl:p-6 p-5 flex items-center">
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h1 className="font-bold text-secondary text-20 uppercase">
                    {item.title}
                  </h1>
                  <p
                    className="text-primary"
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
