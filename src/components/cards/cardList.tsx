"use server";
import PokemonPagination from "@/components/pagination/pokemonPagination";
import { fetchPokeAPI } from "@/lib/fetchPokeAPI";
import PokeList from "@/components/cards/pokeList";
import NoDataAlert from "@/components/alert/noDataAlert";
import ErrorAlert from "../alert/errorAlert";

const CardList = async ({
  limit,
  search,
}: {
  limit: number;
  search: string;
}) => {
  try {
    const data = await fetchPokeAPI({ limit, search });

    if (!data || data.results.length === 0) {
      return (
        <div className="relative flex flex-col gap-y-10">
          <NoDataAlert />
          <PokemonPagination />
        </div>
      );
    }

    return (
      <div className="relative flex flex-col gap-y-10">
        <PokeList data={data} />
        <PokemonPagination />
      </div>
    );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return (
      <div className="relative flex flex-col gap-y-10">
        <ErrorAlert message="Ocurrió un error al obtener los datos de Pokémon. Por favor, inténtelo de nuevo más tarde." />
        <PokemonPagination />
      </div>
    );
  }
};

export default CardList;
