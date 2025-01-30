const Header = () => {
  return (
    <header className="flex z-21 bg-[#111] fixed pl-1 md:justify-evenly w-full md:pl-10">
      <nav>
        <ul className="flex gap-5 py-6 md:py-8 text-white">
          <a href="#home"><li className="links cursor-pointer">Home</li></a>
          <a href="#sobre"><li className="links cursor-pointer">Sobre</li></a>
          <a href="#projetos"><li className="links cursor-pointer">Projetos</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
