import pc from "../../assets/mexendo-pc.svg";
import Tecnologia from "../../components/Tecnologia";
import TypeScript from "../../assets/tecnologias/logo-typescript.svg";

import React from "../../assets/tecnologias/logo-react.svg";
import Java from "../../assets/tecnologias/logo-java.svg";
import SpringBoot from "../../assets/tecnologias/logo-spring-boot.svg"
import MySQL from "../../assets/tecnologias/logo-mysql.svg";
import Python from "../../assets/tecnologias/logo-python.svg";
import Mongo from "../../assets/tecnologias/logo-mongo.svg";
import PostegreSQL from "../../assets/tecnologias/logo-postgresql.svg";
import RedeBotao from "../Home/RedeBotao";
import { GoArrowUpRight } from "react-icons/go";
import curriculo from "../../assets/Currículo Gustavo Berlanga.pdf";

const Sobre = () => {
  return (
    <section className="flex h-screen text-white md:justify-evenly md:items-center md:gap-10 scroll-mt-[75px] md:scroll-mt-0" id="sobre">
      <div>
        <img src={pc} alt="eu" className="w-120 hidden md:block" />
      </div>
      <div className="flex flex-col md:w-1/2">
        <h2 className="text-4xl md:text-6xl mb-10">Sobre</h2>
        <p className="text-xl font-light text-white ">
         Atuo no Banco Santander desde maio de 2025, onde comecei como estagiário de Pricing e, em maio de 2026, fui efetivado como analista júnior. Sou estudante de Engenharia de Software na FIAP, tenho 20 anos e busco continuar evoluindo profissionalmente na área de tecnologia. Tive meu primeiro contato com programação em 2019 e, desde então, venho aprimorando minhas habilidades técnicas por meio de projetos acadêmicos, pessoais e profissinais.
        </p>
        <div>
          <h3 className="my-3">Minhas tecnologias: </h3>
          <ul className="flex items-center justify-start gap-5 flex-wrap mb-8">
            <li>
              <Tecnologia imageSrc={Java} altText="Java" toolTip="Java"/>
            </li>
            <li>
              <Tecnologia imageSrc={SpringBoot} altText="Spring Boot" toolTip="Spring Boot"/>
            </li>
            <li>
              <Tecnologia imageSrc={TypeScript} altText="Typescript" toolTip="Typescript"/>
            </li>
            <li>
              <Tecnologia imageSrc={React} altText="React" toolTip="React"/>
            </li>
            <li>
              <Tecnologia imageSrc={MySQL} altText="MySQL" toolTip="MySQL"/>
            </li>
            <li>
              <Tecnologia imageSrc={PostegreSQL} altText="PostgreSQL" toolTip="PostgreSQL"/>
            </li>
            <li>
              <Tecnologia imageSrc={Mongo} altText="MongoDB" toolTip="MongoDB"/>
            </li>
            <li>
              <Tecnologia imageSrc={Python} altText="Python" toolTip="Python"/>
            </li>
          </ul>
          <a href={curriculo} download={true}><RedeBotao Texto="Baixe meu currículo" Icone={<GoArrowUpRight />}/></a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
