import CardPokemon from "@/components/cards/cardPokemon";
import { PokeListProps } from "@/interfaces/pokeList";

const PokeList = ({ data }: PokeListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.results.map((poke, index) => (
        <li key={poke.name} className="flex flex-col items-center gap-4">
          <CardPokemon
            name={poke.name}
            linkInfo={poke.url}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              index + 1
            }.png`}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokeList;
