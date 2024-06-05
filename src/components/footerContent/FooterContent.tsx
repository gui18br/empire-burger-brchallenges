import logo from "../../assets/png/Group 210.png";
import ifood from "../../assets/png/ifood-43 2.png";
import instagram from "../../assets/png/insta.png";

export const FooterContent = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[88%]">
        <div className="flex flex-col lg:flex-row lg:justify-evenly mt-9 items-center xl:gap-48 gap-2">
          <div className="w-full">
            <a href="">
              <div className="flex justify-center items-center lg:justify-start text-[29.38px]">
                <img
                  src={logo}
                  alt=""
                  className="w-[29.49px] h-[30.81px] mr-1"
                />
                <h2 className=" text-300">
                  <strong className="font-xbold">EMPIRE</strong> BURGER
                </h2>
              </div>
            </a>
          </div>
          <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-center lg:w-full lg:gap-10 xl:gap-28 gap-2">
            <div>
              <ul className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2 text-secondary">
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
              <div className="flex gap-5 justify-center items-center border-t-[1px] border-[#1D060526] border-b-[1px] w-[300px] p-3  lg:w-full lg:border-0">
                <img src={ifood} alt="" className="" />
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-7">
          <hr className="w-full border-[#1D060526]" />
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
    </div>
  );
};
