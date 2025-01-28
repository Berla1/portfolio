const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-end gap-5 p-3 text-white">
          <li className="links cursor-pointer">Home</li>
          <li className="links cursor-pointer">Sobre</li>
          <li className="links cursor-pointer">Projetos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
