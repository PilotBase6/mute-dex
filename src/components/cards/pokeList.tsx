import CardPokemon from "@/components/cards/cardPokemon";
import { PokeListProps } from "@/interfaces/pokeList";

const PokeList = ({ data }: PokeListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.results.map((poke) => (
        <li key={poke.id} className="flex flex-col items-center gap-4">
          <CardPokemon
            name={poke.name}
            linkInfo={`/pokemon/${poke.id}`}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              poke.id
            }.png`}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokeList;
