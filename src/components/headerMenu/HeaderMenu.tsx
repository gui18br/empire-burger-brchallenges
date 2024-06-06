import logo from "../../assets/png/logo.png";
import ifood from "../../assets/png/ifood-43 1.png";
import instagram from "../../assets/png/instagram-brands.png";
import whatsapp from "../../assets/whatsapp.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLinks } from "../navLinks/NavLinks";
import { Transition } from "@headlessui/react";

function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[rgba(59,32,11,0.05)] backdrop-blur-sm shadow-lg top-0 z-20 absolute mx-auto flex w-full items-center justify-center border-gray-500 pt-4 pb-2 ">
      <div className="w-[88%]">
        <div className="flex justify-between items-center flex-wrap pb-2">
          <a href="">
            <div className="flex items-center text-[29.38px]">
              <img src={logo} alt="" className="w-[29.49px] h-[30.81px]" />
              <h2 className=" text-secondary">
                <strong className="font-xbold">EMPIRE</strong> BURGER
              </h2>
            </div>
          </a>
          <div className="hidden xl:block">
            <NavLinks />
          </div>
          <div className="xl:flex gap-3 items-center hidden">
            <a href="">
              <img src={ifood} alt="" className="w-[27px] h-[14.27px]" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <div className="border-l-[1px] pl-5 border-x-red-700">
              <a href="">
                <div className="bg-300 flex items-center rounded space-x-2 w-[123px] h-[34px] justify-center">
                  <img src={whatsapp} alt="" className="w-[21.43px] h-[21px]" />
                  <p className="text-secondary font-bold">Contato</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={toggleNavbar}
              className="xl:hidden bg-[#1D060526] p-1 rounded-md"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition-all duration-300 ease-in-out"
          enterFrom="opacity-0 max-h-0"
          enterTo="opacity-100 max-h-screen"
          leave="transition-all duration-300 ease-in-out"
          leaveFrom="opacity-100 max-h-screen"
          leaveTo="opacity-0 max-h-0"
        >
          <div className="overflow-hidden flex flex-col items-center basis-full bg-300 h-64 justify-center xl:hidden">
            <NavLinks />
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default HeaderMenu;
