import { Link } from "react-scroll";

export const NavLinks = () => {
  const menuItems = [
    { name: "Home", link: "home" },
    { name: "Promoção", link: "promotion" },
    { name: "Cardápio", link: "menu" },
    { name: "Comentário", link: "coments" },
    { name: "Contato", link: "contact" },
  ];
  return (
    <nav>
      <ul className="flex flex-col xl:flex-row items-center gap-5">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <Link
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
              className="text-primary text-18 transition-all duration-300 hover:font-bold cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
