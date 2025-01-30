import CardProjeto from "./CardProjeto";
import capaPortfolio from "../../assets/imagens-projetos/capa-portfolio.svg";
import capaCarrinho from "../../assets/imagens-projetos/capa-carrinho-iot.svg";
import capaCardapio from "../..//assets/imagens-projetos/capa-cardapio.svg";
import capaLandingPage from "../../assets/imagens-projetos/capa-landing-page.svg";
import capaMahindra from "../../assets/imagens-projetos/capa-mahindra.svg";
import capaBuscador from "../../assets/imagens-projetos/capa-buscador-cep.svg";
import capaRush from "../../assets/imagens-projetos/capa-rush.svg";
import CMais from "../../assets/tecnologias/logo-c++.svg";
import TypeScript from "../../assets/tecnologias/logo-typescript.svg";
import TailwindCSS from "../../assets/tecnologias/logo-tailwind.svg";
import Python from "../../assets/tecnologias/logo-python.svg";
import Java from "../../assets/tecnologias/logo-java.svg";
import MySQL from "../../assets/tecnologias/logo-mysql.svg";
import HTML5 from "../../assets/tecnologias/logo-html.svg";
import SASS from "../../assets/tecnologias/logo-sass.svg";
import React from "../../assets/tecnologias/logo-react.svg";

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
          descricaoProjeto="Implementa um sistema de controle baseado em gestos da mão usando Mediapipe, OpenCV, e MQTT. Com uma câmera, gestos são detectados em tempo real para realizar ações como mover um motor ou ajustar o ângulo de um servo. Usando Python e C++ para a comunicação entre os dispositivos. Realizado como projeto acadêmico."
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
          fotoProjeto={capaMahindra}
          nomeProjeto="Site promocional Mahindra Racing"
          descricaoProjeto="Site promocional desenvolvido para impulsionar a popularidade da Fórmula E no Brasil. Projeto feito como trabalho acadêmico em parceira com Mahindra Racing. Construido em React e TailwindCSS, com layout responsivo feito para desktops e dispositivos móveis."
          githubBotao={false}
          githubLink="https://github.com/E-fficency/mahindra"
          deployBotao={false}
          deployLink="https://e-fficency.github.io/mahindra/"
          tecnologia1={React}
          tecnologia2={TailwindCSS}
        />

        <CardProjeto
          fotoProjeto={capaRush}
          nomeProjeto="Rush e-commerce"
          descricaoProjeto="Uma aplicação de e-commerce voltada para artigos esportivos. Feito utilizando React utilizando styled-components, com layout responsivo e moderno. Realizado como projeto acadêmico."
          githubBotao={false}
          githubLink="https://github.com/E-fficency/rush"
          deployBotao={false}
          deployLink="https://e-fficency.github.io/rush/"
          tecnologia1={React}
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

        <CardProjeto
          fotoProjeto={capaBuscador}
          nomeProjeto="Buscador de CEP"
          descricaoProjeto="uma aplicação desenvolvida em React que permite aos usuários consultar informações de endereço a partir de um CEP fornecido. A aplicação consome APIs para obter dados como logradouro, bairro, cidade e estado relacionados ao CEP inserido. Além disso, valida o formato do CEP informado pelo usuário."
          githubBotao={false}
          githubLink="https://github.com/Berla1/busca-cep"
          deployBotao={false}
          deployLink="https://busca-cep-khaki.vercel.app"
          tecnologia1={React}
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
      </div>
    </section>
  );
};

export default Projetos;
