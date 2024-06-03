import logo from "../../assets/png/Group 210.png";
import ifood from "../../assets/png/ifood-43 2.png";
import instagram from "../../assets/png/insta.png";

export const FooterContent = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-evenly mt-9 items-center xl:gap-48 gap-30">
        <div>
          <a href="">
            <div className="flex items-center text-[29.38px]">
              <img src={logo} alt="" className="w-[29.49px] h-[30.81px] mr-1" />
              <h2 className=" text-300">
                <strong className="font-xbold">EMPIRE</strong> BURGER
              </h2>
            </div>
          </a>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="hover:font-semibold ">
              <a href="">Home</a>
            </li>
            <li className="hover:font-semibold">
              <a href="">Localização</a>
            </li>
            <li className="hover:font-semibold">
              <a href="">Cardapio</a>
            </li>
            <li className="hover:font-semibold">
              <a href="">Sobre</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <img src={ifood} alt="" className="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-7">
        <hr className="w-[88%] border-[#1D060526]" />
        <div className="mt-4">
          <h2 className="font-bold text-gray-700">
            2022 © EmpireBurger.{" "}
            <span className="text-gray-400 font-normal">
              Todos os direitos reservados.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};
