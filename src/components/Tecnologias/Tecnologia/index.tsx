type TecnologiaProps = {
  imageSrc: string;
  altText: string;
};

const Tecnologia: React.FC<TecnologiaProps> = ({ imageSrc, altText }) => {
  return (
    <img
      src={imageSrc}
      alt={altText}
      className="transition-transform duration-300 group-hover:scale-120 w-10"
    />
  );
};

export default Tecnologia;
