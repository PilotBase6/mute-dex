"use server";
import PokemonPagination from "@/components/pagination/pokemonPagination";
import { fetchPokeAPI } from "@/lib/fetchPokeAPI";
import PokeList from "@/components/cards/pokeList";

const CardList = async ({ limit, search }: { limit: number, search: string }) => {

  const data = await fetchPokeAPI({ limit, search });

  return (
    <div className="relative flex flex-col gap-y-10">
      <PokeList data={data} />
      <PokemonPagination />
    </div>
  );
};

export default CardList;
