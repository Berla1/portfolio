import CardProjeto from "./CardProjeto";
import capaPortfolio from "../../assets/imagens-projetos/capa-portfolio.svg";
import TypeScript from "../../assets/tecnologias/logo-typescript.svg";
import TailwindCSS from "../../assets/tecnologias/logo-tailwind.svg";

const Projetos = () => {
  return (
    <section className="flex flex-col h-full md:p-25 scroll-m-14 py-10" id="projetos">
      <h1 className="text-white py-10 text-4xl md:text-6xl">Projetos</h1>
      <div className="flex flex-wrap gap-10">
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
