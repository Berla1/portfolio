import Santander from "../../assets/Santander.svg";

const Experiencia = () => {
  return (
    <section
      className="text-white flex flex-col h-full md:p-25 scroll-m-14 py-10"
      id="experiencia"
    >
      <div className="flex flex-col md:flex-row justify-between gap-x-12 gap-y-10">
        <div className="max-w-5xl">
          <h1 className="py-10 text-4xl md:text-6xl leading-tight">
            Minha experiência profissional
          </h1>

          <h2 className="text-3xl mb-1 font-semibold">
            Estagiário de Pricing –
            <span className="text-[#D50032] font-semibold"> Banco Santander</span>
          </h2>

          <h4 className="text-sm font-light text-gray-300 mb-4">
            mai/25 – o momento
          </h4>

          <p className="text-md leading-relaxed mb-6">
            Minha experiência no Santander tem sido marcada por um aprendizado
            contínuo e por uma vivência real no ambiente corporativo. Tenho
            contato constante com análises e indicadores, o que fortalece minha
            visão crítica e meu senso de prioridade. Além da parte técnica, convivo
            diariamente com diferentes áreas, aprendendo a me comunicar melhor,
            estruturar demandas, organizar minhas tarefas e atuar de forma mais
            madura e profissional. Essa vivência tem sido essencial para meu
            desenvolvimento e reforça meu interesse por tecnologia e melhoria
            contínua.
          </p>

          <h3 className="text-2xl md:text-3xl py-4 font-bold">
            Responsabilidades e conquistas
          </h3>

          <ul className="list-disc list-inside space-y-2  leading-relaxed">
            <li>
              Análises de pricing para produtos financeiros, com foco em
              performance, rentabilidade e estratégia comercial.
            </li>
            <li>
              Automatização de processos e melhoria de fluxos internos usando
              ferramentas como PySpark, Power BI, SQL e Databricks.
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

        <img
          className="rounded-3xl shadow-xl md:w-[420px] object-cover md:mt-14"
          src={Santander}
          alt="Santander"
        />
      </div>
    </section>
  );
};

export default Experiencia;
