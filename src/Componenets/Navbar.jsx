import { NavLinks } from "../data";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/30 text-white fixed w-full top-0 backdrop-blur-lg rounded-b-md  border border-gray-600 z-50">
      
      <div className="logo">
        <h2 className="text-4xl font-bold drop-shadow-[0_1px_6px_rgba(255,255,255,0.7)]">
          <a href="/">
            SPARK <span className="text-orange-600">2026</span>
          </a>
        </h2>
      </div>

      <nav>
        <ul className="flex items-center gap-6 text-sm">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="px-5 py-2 rounded-md text-white/90 transition-all duration-300 hover:text-cyan-300 hover:bg-teal-500/20 hover:shadow-[0_0_18px_rgba(0,255,255,0.6)]">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;
