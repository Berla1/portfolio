import eu from "../../assets/eu.png";
import { FaGithub } from "react-icons/fa";
import RedeBotao from "./RedeBotao";
import { FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-10 md:flex-row h-screen text-white md:justify-evenly md:items-center gap-10" id="home">
      <div className="md:w-1/2 flex flex-col text-4xl md:text-6xl">
        <h1 className="bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Opa! tudo bem?
        </h1>
        <h2>Me chamo Gustavo Berlanga</h2>
        <h2 className="text-lg pl-1 font-bold mt-2">Fullstack Developer</h2>
        <div className="flex gap-4 mt-4 text-2xl">
          <a href="https://github.com/Berla1" target="_blank">
            <RedeBotao Icone={<FaGithub />} Texto="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-berlanga/"
            target="_blank"
          >
            <RedeBotao Icone={<FaLinkedin />} Texto="Linkedln" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-t from-gray-600 rounded-3xl w-70 md:w-100">
        <img src={eu} alt="eu" className="rounded-3xl" />
      </div>
    </section>
  );
};

export default Home;
