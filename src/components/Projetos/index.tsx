import CardProjeto from "./CardProjeto";
import capaPortfolio from "../../assets/imagens-projetos/capa-portfolio.svg";
import capaCarrinho from "../../assets/imagens-projetos/capa-carrinho-iot.svg";
import capaCardapio from "../..//assets/imagens-projetos/capa-cardapio.svg";
import capaLandingPage from "../../assets/imagens-projetos/capa-landing-page.svg";
import capaMahindra from "../../assets/imagens-projetos/capa-mahindra.svg";
import capaBuscador from "../../assets/imagens-projetos/capa-buscador-cep.svg";
import capaRush from "../../assets/imagens-projetos/capa-rush.svg";
import capaJavaCrud from "../../assets/imagens-projetos/capa-java-crud.svg";
import capaTabelaFipe from "../../assets/imagens-projetos/capa-tabela-fipe.svg";
import capaNumeroSecreto from "../../assets/imagens-projetos/capa-numero-secreto.svg";
import capaScreenMatch from "../../assets/imagens-projetos/capa-screen-match.svg";
import capaMemoteca from "../../assets/imagens-projetos/capa-memoteca.svg";
import capaRickAndMorty from "../../assets/imagens-projetos/capa-ricky-and-morty.svg";
import capaFlexMedia from "../../assets/imagens-projetos/capa-flex-media.svg";
import capaEncurtaUrl from "../../assets/imagens-projetos/capa-encurtador-url.svg";
import CMais from "../../assets/tecnologias/logo-c++.svg";
import TypeScript from "../../assets/tecnologias/logo-typescript.svg";
import TailwindCSS from "../../assets/tecnologias/logo-tailwind.svg";
import Python from "../../assets/tecnologias/logo-python.svg";
import Java from "../../assets/tecnologias/logo-java.svg";
import MySQL from "../../assets/tecnologias/logo-mysql.svg";
import HTML5 from "../../assets/tecnologias/logo-html.svg";
import CSS from "../../assets/tecnologias/logo-css.svg";
import SASS from "../../assets/tecnologias/logo-sass.svg";
import React from "../../assets/tecnologias/logo-react.svg";
import JavaScript from "../../assets/tecnologias/logo-javascript.svg";
import PostegreSQL from "../../assets/tecnologias/logo-postgresql.svg";
import Angular from "../../assets/tecnologias/logo-angular.svg";
import NodeJS from "../../assets/tecnologias/logo-nodejs.svg";
import Mongo from "../../assets/tecnologias/logo-mongo.svg";

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
          descricaoProjeto="Site promocional desenvolvido para impulsionar a popularidade da Fórmula E no Brasil. Construido em React e TailwindCSS, com layout responsivo feito para desktops e dispositivos móveis. Projeto feito como trabalho acadêmico em parceira com Mahindra Racing. "
          githubBotao={false}
          githubLink="https://github.com/E-fficency/mahindra"
          deployBotao={false}
          deployLink="https://e-fficency.github.io/mahindra/"
          tecnologia1={React}
          tecnologia2={TailwindCSS}
        />

        <CardProjeto
          fotoProjeto={capaScreenMatch}
          nomeProjeto="Screen Match"
          descricaoProjeto="Aplicação web que exibe dados de séries cadastradas em um banco de dados PostgreSQL, as informações cadastradas são recebidas de uma API pública do OMDb. O foco do projeto foi no desenvolvimento da API REST em Java com Spring Boot."
          githubBotao={false}
          githubLink="https://github.com/Berla1/screen-match"
          youtubeBotao={false}
          youtubeLink="https://youtu.be/AhSvJzG-f8o"
          tecnologia1={Java}
          tecnologia2={PostegreSQL}
        />

        <CardProjeto
          fotoProjeto={capaRickAndMorty}
          nomeProjeto="Ricky and Morty API"
          descricaoProjeto="Aplicação web que exibe dados sobre episódios, personagens e locais do seriado Rick and Morty, consumindo informações da API pública Rick and Morty API. O projeto foi desenvolvido utilizando TypeScript e estilizado com Tailwind CSS, proporcionando uma interface responsiva e intuitiva."
          githubBotao={false}
          githubLink="https://github.com/Berla1/rick-and-morty"
          deployBotao={false}
          deployLink="https://rick-and-morty-ruddy-kappa.vercel.app"
          tecnologia1={TypeScript}
          tecnologia2={TailwindCSS}
        />

        <CardProjeto
          fotoProjeto={capaFlexMedia}
          nomeProjeto="Teste Flexmedia"
          descricaoProjeto="Flex Media é uma aplicação web desenvolvida em React que consome uma API desenvolvida em Nodejs e MongoDB. O projeto foi construído utilizando TypeScript e estilizado com Tailwind CSS, proporcionando uma interface responsiva e moderna. O projeto é um teste prático para a empresa Flex Media."
          githubBotao={false}
          githubLink="https://github.com/Berla1/flexmedia-teste"
          youtubeBotao={false}
          youtubeLink="https://youtu.be/8mrBO68lY6A"
          tecnologia1={React}
          tecnologia2={TailwindCSS}
          tecnologia3={NodeJS}
          tecnologia4={Mongo}
        />

        <CardProjeto
          fotoProjeto={capaEncurtaUrl}
          nomeProjeto="Encurtador de URL"
          descricaoProjeto="Projeto desenvolvido em Java com MongoDB que gera links curtos a partir de URLs longas. Cada link encurtado expira automaticamente após 1 minuto, garantindo maior segurança e controle de acesso. Ideal para aplicações temporárias e compartilhamento rápido."
          githubBotao={false}
          githubLink="https://github.com/Berla1/encurtador-url"
          youtubeBotao={false}
          youtubeLink="https://youtu.be/vSWutjzaDU0"
          tecnologia1={Java}
          tecnologia2={Mongo}
        />

        <CardProjeto
          fotoProjeto={capaMemoteca}
          nomeProjeto="Memoteca"
          descricaoProjeto="A Memoteca é uma aplicação desenvolvida em Angular para gerenciar pensamentos, permitindo criar, visualizar, editar e excluir registros. O projeto consome um back-end falso utilizando json-server para simular uma API REST. A aplicação foi construída com TypeScript para maior segurança no código, além de HTML5 e CSS3 para estruturação e estilização da interface"
          githubBotao={false}
          githubLink="https://github.com/Berla1/memoteca"
          deployBotao={false}
          deployLink="https://memoteca-eta.vercel.app"
          tecnologia1={Angular}
          tecnologia2={TypeScript}
          tecnologia3={HTML5}
          tecnologia4={CSS}
        />

        <CardProjeto
          fotoProjeto={capaRush}
          nomeProjeto="Rush e-commerce"
          descricaoProjeto="Uma aplicação de e-commerce voltada para artigos esportivos. Desenvolvido em React com styled-components, com layout responsivo e moderno. Realizado como projeto acadêmico."
          githubBotao={false}
          githubLink="https://github.com/E-fficency/rush"
          deployBotao={false}
          deployLink="https://e-fficency.github.io/rush/"
          tecnologia1={React}
        />

        <CardProjeto
          fotoProjeto={capaTabelaFipe}
          nomeProjeto="Tabela Fipe"
          descricaoProjeto="Este projeto é uma aplicação Java que consome a API pública da Tabela Fipe para obter informações sobre marcas, modelos e preços de veículos no Brasil. Construida em Java utilizando Spring Boot."
          githubBotao={false}
          githubLink="https://github.com/Berla1/tabela-fipe"
          youtubeBotao={false}
          youtubeLink="https://youtu.be/IKf5vJVbh2Q"
          tecnologia1={Java}
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
          fotoProjeto={capaJavaCrud}
          nomeProjeto="CRUD em Java"
          descricaoProjeto="Um projeto Java que implementa operações básicas de CRUD (Create, Read, Update, Delete) utilizando um banco de dados MySQL."
          tecnologia1={Java}
          githubBotao={false}
          githubLink="https://github.com/Berla1/java-CRUD"
          youtubeBotao={false}
          youtubeLink="https://youtu.be/3qRkVMV7gA0"
        />

        <CardProjeto
          fotoProjeto={capaBuscador}
          nomeProjeto="Buscador de CEP"
          descricaoProjeto="Uma aplicação desenvolvida em React que permite aos usuários consultar informações de endereço a partir de um CEP fornecido. A aplicação consome uma API pública para obter dados como logradouro, bairro, cidade e estado relacionados ao CEP inserido. Além disso, valida o formato do CEP informado pelo usuário."
          githubBotao={false}
          githubLink="https://github.com/Berla1/busca-cep"
          deployBotao={false}
          deployLink="https://busca-cep-khaki.vercel.app"
          tecnologia1={React}
        />

        <CardProjeto
          fotoProjeto={capaNumeroSecreto}
          nomeProjeto="Jogo número secreto"
          descricaoProjeto="Um jogo de adivinhação onde o usuário tenta adivinhar um número aleatório entre 1 e 1000 usando comandos de voz. Construido em HTML, CSS e JavaScript, o jogo auxília o usuário indicando se ele está acima ou abaixo do número secreto."
          githubBotao={false}
          githubLink="https://numero-secreto-steel-psi.vercel.app"
          deployBotao={false}
          deployLink="numero-secreto-steel-psi.vercel.app"
          tecnologia1={JavaScript}
          tecnologia2={HTML5}
          tecnologia3={CSS}
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
