"use server";
import PokemonPagination from "@/components/pagination/pokemonPagination";

const CardList = async () => {
  const limitPage = 20;

  return (
    <div>
      <PokemonPagination initialLimit={limitPage} />
    </div>
  );
};

export default CardList;
