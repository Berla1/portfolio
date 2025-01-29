import CardProjeto from "./CardProjeto";
import capaPortfolio from "../../assets/imagens-projetos/capa-portfolio.svg";
import capaCarrinho from "../../assets/imagens-projetos/capa-carrinho-iot.svg";
import capaCardapio from "../..//assets/imagens-projetos/capa-cardapio.svg";
import capaLandingPage from "../../assets/imagens-projetos/capa-landing-page.svg";
import CMais from "../../assets/tecnologias/logo-c++.svg";
import TypeScript from "../../assets/tecnologias/logo-typescript.svg";
import TailwindCSS from "../../assets/tecnologias/logo-tailwind.svg";
import Python from "../../assets/tecnologias/logo-python.svg";
import Java from "../../assets/tecnologias/logo-java.svg";
import MySQL from "../../assets/tecnologias/logo-mysql.svg";
import HTML5 from "../../assets/tecnologias/logo-html.svg";
import SASS from '../../assets/tecnologias/logo-sass.svg';

const Projetos = () => {
  return (
    <section
      className="flex flex-col h-full md:p-25 scroll-m-14 py-10"
      id="projetos"
    >
      <h1 className="text-white py-10 text-4xl md:text-6xl">Projetos</h1>
      <div className="flex flex-wrap gap-10">
        <CardProjeto
          fotoProjeto={capaCarrinho}
          nomeProjeto="Carrinho controlado por gestos"
          descricaoProjeto="Este projeto implementa um sistema de controle baseado em gestos da mão usando Mediapipe, OpenCV, e MQTT para controlar motores e um servo via comandos remotos. Com uma câmera, gestos são detectados em tempo real para realizar ações como mover um motor ou ajustar o ângulo de um servo. Usando Python e C++ para a comunicação entre os dispositivos. Realizado como projeto acadêmico."
          githubBotao={false}
          githubLink="https://github.com/Berla1/hand-gesture-control"
          youtubeBotao={false}
          youtubeLink="https://www.youtube.com/watch?v=0BRyTk86wu4"
          tecnologia1={Python}
          tecnologia2={CMais}
        />

        <CardProjeto
          fotoProjeto={capaCardapio}
          nomeProjeto="Cardápio fullstack"
          descricaoProjeto="O Cardápio Fullstack é uma aplicação web que permite aos usuários visualizar e gerenciar um cardápio digital. Construido utilizando TypeScript, Java com Spring Boot e MySQL para persistência de dados."
          githubBotao={false}
          githubLink="https://github.com/Berla1/cardapio-fullstack"
          youtubeBotao={false}
          youtubeLink="https://www.youtube.com/watch?v=ClySm8FVcf0"
          tecnologia1={TypeScript}
          tecnologia2={Java}
          tecnologia3={MySQL}
        />

        <CardProjeto
          fotoProjeto={capaLandingPage}
          nomeProjeto="Landing Page responsiva"
          descricaoProjeto="Lading page responsiva construida em HTML5 e SCSS. Projeto oferecendo um design responsivo e moderno com vizualição em dispositivos móveis e desktops."
          githubBotao={false}
          githubLink="https://github.com/Berla1/landify-sass"
          deployBotao={false}
          deployLink="https://landify-woad.vercel.app"
          tecnologia1={HTML5}
          tecnologia2={SASS}
        />

        <CardProjeto
          fotoProjeto={capaPortfolio}
          nomeProjeto="Meu portfólio pessoal"
          descricaoProjeto="Portfólio desenvolvido com TypeScript e TailwindCSS. 
            Design feito para desktops e dispositivos móveis, criado com objetivo de expor meus projetos mais relevantes. Confira os projetos e conecte-se!"
          tecnologia1={TypeScript}
          tecnologia2={TailwindCSS}
          deployBotao={false}
          deployLink="https://portfolio-git-main-berlas-projects.vercel.app"
          githubBotao={false}
          githubLink="https://github.com/Berla1/portfolio"
        />
      </div>
    </section>
  );
};

export default Projetos;
