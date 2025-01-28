type TecnologiaProps = {
  imageSrc: string;
  altText: string;
};

const Tecnologia: React.FC<TecnologiaProps> = ({ imageSrc, altText }) => {
  return (
      <img
        src={imageSrc}
        alt={altText}
        className="transition-transform duration-300 hover:scale-120 w-10 md:w-14"
      />
  
  );
};

export default Tecnologia;
