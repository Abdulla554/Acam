import Logo from "../../assets/food-logo.png";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Courses",
    link: "/#courses",
  },
  {
    id: 2,
    name: "Accounts",
    link: "/#footer",
  },
  {
    id: 3,
    name: "Testimonials",
    link: "/Communication",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Foodie
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500 hover:font-bold"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
