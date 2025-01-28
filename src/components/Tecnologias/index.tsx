import Tecnologia from "./Tecnologia";
import TypeScript from "../../assets/logo-typescript.svg";
import JavaScript from "../../assets/logo-javascript.svg";
import React from "../../assets/logo-react.svg";
import Java from "../../assets/logo-java.svg";
import MySQL from "../../assets/logo-mysql.svg";
import Python from "../../assets/logo-pyhton.svg";
import Tailwind from "../../assets/logo-tailwind.svg";
import HTML from "../../assets/logo-html.svg";
import CSS from "../../assets/logo-css.svg";

const Tecnologias = () => {
  return (
    <section className="flex flex-col gap-4 bg-[#222] p-4 mt-5 rounded-2xl items-center justify-center"> 
      <h2 className="text-2xl text-white font-bold py-4">Minhas tecnologias</h2>
      <ul className="flex items-center h-full gap-4 flex-wrap">
        <li>
          <Tecnologia imageSrc={TypeScript} altText="Typescript" />
        </li>
        <li>
          <Tecnologia imageSrc={React} altText="React" />
        </li>
        <li>
          <Tecnologia imageSrc={Java} altText="Java" />
        </li>
        <li>
          <Tecnologia imageSrc={MySQL} altText="MySQL" />
        </li>
        <li>
          <Tecnologia imageSrc={Python} altText="Python" />
        </li>
        <li>
          <Tecnologia imageSrc={JavaScript} altText="JavaScript" />
        </li>
        <li>
          <Tecnologia imageSrc={HTML} altText="HTML" />
        </li>
        <li>
          <Tecnologia imageSrc={CSS} altText="CSS" />
        </li>
        <li>
          <Tecnologia imageSrc={Tailwind} altText="Tailwind" />
        </li>
    
      </ul>
    </section>
  );
};

export default Tecnologias;
