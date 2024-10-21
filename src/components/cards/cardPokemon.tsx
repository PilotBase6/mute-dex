interface CardPokemonProps {
  name: string;
  image: string;
  linkInfo: string;
}

const CardPokemon = ({ name, image, linkInfo }: CardPokemonProps) => {
  return (
    <div className="group relative w-full max-w-sm bg-[#F2F2F2] rounded-lg shadow-md border-t transition-all delay-500">
      <a href={linkInfo}>
        <img
          className="w-full h-48 md:h-auto object-cover rounded-lg p-6 group-hover:scale-[120%] transition-transform duration-500"
          src={image}
          alt={name}
        />
        <div className="flex-grow flex justify-content items-center h-10 rounded-b-lg bg-gradient-to-r from-blue-500 to-red-500 group-hover:bg-none animate-waves transition-all duration-500 ease-in-out">
          <span className="w-full text-center text-xl font-semibold text-white group-hover:hidden uppercase">
            {name}
          </span>
        </div>
      </a>
    </div>
  );
};

export default CardPokemon;
