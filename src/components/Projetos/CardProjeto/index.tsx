import RedeBotao from "../../Home/RedeBotao";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

interface CardProjetoProps {
  tecnologia1: string;
  tecnologia2?: string;
  tecnologia3?: string;
  tecnologia4?: string;
  fotoProjeto: string;
  nomeProjeto: string;
  descricaoProjeto: string;
  githubBotao?: boolean;
  deployBotao?: boolean;
  youtubeBotao?: boolean;
  githubLink?: string;
  deployLink?: string;
  youtubeLink?: string;
}

const CardProjeto = ({
  tecnologia1,
  tecnologia2,
  tecnologia3,
  tecnologia4,
  fotoProjeto,
  nomeProjeto,
  descricaoProjeto,
  githubBotao = true,
  deployBotao = true,
  youtubeBotao = true,
  githubLink,
  deployLink,
  youtubeLink,
}: CardProjetoProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 bg-[#222] rounded-2xl relative">
      <div className="hidden md:flex gap-3 absolute md:top-5 md:right-5">
        <img src={tecnologia1} alt=""/>
        <img src={tecnologia2} alt=""/>
        <img src={tecnologia3} alt=""/>
        <img src={tecnologia4} alt=""/>
      </div>
    
      <div className="md:w-1/3 w-full h-full overflow-hidden md:rounded-l-2xl">
        <img
          src={fotoProjeto}
          alt="Foto do projeto"
          className="w-full h-full object-cover md:rounded-l-2xl"
        />
      </div>
      <div className="text-white md:w-2/3 md:px-0 md:mb-5 p-4">
        <h1 className="text-4xl my-10">{nomeProjeto}</h1>
        <p className="mb-7 md:w-9/12">{descricaoProjeto}</p>
        <div className="flex gap-5">
          <span hidden={githubBotao}>
            <a href={githubLink} target="_blank">
              <RedeBotao Texto="Github" Icone={<FaGithub />} />
            </a>{" "}
          </span>
          <span hidden={deployBotao}>
            <a href={deployLink} target="_blank">
              <RedeBotao Texto="Deploy" Icone={<GrDeploy />} />
            </a>
          </span>
          <span hidden={youtubeBotao}>
            <a href={youtubeLink} target="_blank">
              <RedeBotao Texto="Demonstração" Icone={<FaYoutube />} />
            </a>
          </span>
        </div>
      </div>
      <div className="flex justify-start md:hidden gap-3 pl-5 pb-5">
            <img src={tecnologia1} alt="" />
            <img src={tecnologia2} alt="" />
            <img src={tecnologia3} alt="" />
            <img src={tecnologia4} alt=""/>
          </div>
    </div>
  );
};

export default CardProjeto;
