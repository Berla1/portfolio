const Header = () => {
  return (
    <header className="flex justify-evenly w-1/3 pr-16">
      <nav>
        <ul className="flex gap-5 p-4 text-white">
          <li className="links cursor-pointer">Home</li>
          <li className="links cursor-pointer">Sobre</li>
          <li className="links cursor-pointer">Projetos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
