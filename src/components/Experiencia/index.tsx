import Santander from "../../assets/Santander.svg";

const Experiencia = () => {
  return (
    <section
      className="text-white flex flex-col h-full md:p-25 scroll-m-14 py-10"
      id="experiencia"
    >
      <div className="flex justify-between gap-x-12">
        <div>
          <h1 className="py-10 text-4xl md:text-6xl">
            Minha experiência profissional
          </h1>
          <h2 className="text-3xl mb-1">
            Estágiario de Pricing -
            <span className="text-[#D50032]"> Banco Santander</span>
          </h2>
          <h4 className="text-sm font-light">mai/25 - o momento</h4>
          <h3 className="text-3xl py-6 font-bold">
            Resposabilidades e conquistas
          </h3>
          <ul className="list-disc list-inside gap-0.5">
            <li>
              Análises de pricing para produtos financeiros, com foco em
              performance, rentabilidade e estratégia comercial.
            </li>
            <li>
              Automatização de processos e melhoria de fluxos internos usando
              ferramentas como Pyspark, Power BI, SQL e Databricks.
            </li>
            <li>
              Produção e atualização de relatórios gerenciais, incluindo
              indicadores de desempenho e análises comparativas.
            </li>
            <li>
              Parceria com times multidisciplinares para estruturar estudos,
              validar premissas e apoiar decisões estratégicas.
            </li>
            <li>
              Participação ativa em projetos que aprimoram a eficiência
              operacional e a qualidade das entregas da área.
            </li>
          </ul>
        </div>
        <img className="rounded-4xl" src={Santander} alt="Santander" />
      </div>
    </section>
  );
};

export default Experiencia;
