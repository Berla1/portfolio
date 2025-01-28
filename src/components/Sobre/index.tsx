import pc from "../../assets/mexendo-pc.svg";
import Tecnologia from "../../components/Tecnologia";
import TypeScript from "../../assets/logo-typescript.svg";
import JavaScript from "../../assets/logo-javascript.svg";
import React from "../../assets/logo-react.svg";
import Java from "../../assets/logo-java.svg";
import MySQL from "../../assets/logo-mysql.svg";
import Python from "../../assets/logo-pyhton.svg";
import Tailwind from "../../assets/logo-tailwind.svg";
import HTML from "../../assets/logo-html.svg";
import CSS from "../../assets/logo-css.svg";
import RedeBotao from "../Home/RedeBotao";
import { GoArrowUpRight } from "react-icons/go";
import curriculo from "../../assets/Currículo Gustavo Berlanga.pdf";

const Sobre = () => {
  return (
    <section className="flex h-screen text-white md:justify-evenly md:items-center gap-10">
      <div>
        <img src={pc} alt="eu" className="w-120" />
      </div>
      <div className="flex flex-col md:w-1/2">
        <h2 className="text-6xl mb-10">Sobre</h2>
        <p className="text-xl font-light text-white ">
          Sou um estudante com 19 anos em busca de uma primeira experiência
          profissional no mercado de trabalho. No 3º período de Engenharia de
          Software na FIAP. Tive o meu primeiro contato com programação em 2019,
          desde então busco evoluir meus conhecimentos técnicos.
        </p>
        <div>
          <h3 className="my-3">Minhas tecnologias: </h3>
          <ul className="flex items-center h-full gap-5 flex-wrap mb-8  ">
            <li>
              <Tecnologia imageSrc={TypeScript} altText="Typescript" toolTip="Typescript"/>
            </li>
            <li>
              <Tecnologia imageSrc={React} altText="React" toolTip="React"/>
            </li>
            <li>
              <Tecnologia imageSrc={Java} altText="Java" toolTip="Java"/>
            </li>
            <li>
              <Tecnologia imageSrc={MySQL} altText="MySQL" toolTip="MySQL"/>
            </li>
            <li>
              <Tecnologia imageSrc={Python} altText="Python" toolTip="Python"/>
            </li>
            <li>
              <Tecnologia imageSrc={JavaScript} altText="JavaScript" toolTip="JavaScript"/>
            </li>
            <li>
              <Tecnologia imageSrc={HTML} altText="HTML" toolTip="HTML"/>
            </li>
            <li>
              <Tecnologia imageSrc={CSS} altText="CSS" toolTip="CSS"/>
            </li>
            <li>
              <Tecnologia imageSrc={Tailwind} altText="Tailwind" toolTip="Tailwind"/>
            </li>
          </ul>
          <a href={curriculo} download={true}><RedeBotao Texto="Baixe meu currículo" Icone={<GoArrowUpRight />}/></a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
