const Header = () => {
  return (
    <header className="flex pl-1 md:justify-evenly md:w-1/4 md:pl-10">
      <nav>
        <ul className="flex gap-5 pt-4 text-white">
          <li className="links cursor-pointer">Home</li>
          <li className="links cursor-pointer">Sobre</li>
          <li className="links cursor-pointer">Projetos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
