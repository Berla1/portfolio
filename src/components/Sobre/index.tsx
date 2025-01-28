import EU from "../../assets/eu.png";

const Sobre = () => {
  return (
    <section className="flex h-screen text-white md:justify-evenly md:items-center gap-10">
        <div>
            <img src={EU} alt="eu" className="w-100"/>
        </div>
      <div className="flex flex-col md:w-1/2">
        <h2 className="text-6xl mb-10">Sobre</h2>
        <p className="text-xl font-light text-white ">
          Com 19 anos em busca de uma primeira experiência profissional no
          mercado de trabalho. No 3º período de Engenharia de Software na FIAP.
          Tive o meu primeiro contato com programação em 2019, desde então busco
          evoluir meus conhecimentos técnicos. Atualmente focado em aprimorar habilidades
          em back-end.
        </p>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
