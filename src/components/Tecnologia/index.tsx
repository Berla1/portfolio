type TecnologiaProps = {
  imageSrc: string;
  altText: string;
  toolTip: string;
};

const Tecnologia: React.FC<TecnologiaProps> = ({ imageSrc, altText, toolTip }) => {
  return (
    <>

    <div className="flex pr-2 justify-center group relative transition-transform duration-300 hover:scale-110 md:w-14">
      <img
        src={imageSrc}
        alt={altText}
      />
      <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"> {toolTip}</span>
    </div>


    </>
  );
};

export default Tecnologia;
