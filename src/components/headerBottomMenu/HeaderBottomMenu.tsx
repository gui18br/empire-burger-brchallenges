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
    <div className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center">
      <div className="bg-white rounded-md w-970 h-28 shadow-lg flex align-middle items-center">
        <ul className="flex ml-6 gap-10">
          {items.map((item, index) => (
            <>
              {index === 2 && <div className="bg-gray-300 pr-2s"></div>}
              {index === 1 && <div className="bg-gray-300 pl-2s"></div>}
              <li key={index} className="flex gap-5">
                <div className="bg-400 rounded-full p-6 flex items-center">
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-20">
                    {item.title}
                  </h3>
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
