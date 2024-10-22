"use server";
import PokemonPagination from "@/components/pagination/pokemonPagination";
import { fetchPokeAPI } from "@/lib/fetchPokeAPI";
import PokeList from "@/components/cards/pokeList";

const CardList = async ({
  limit,
  search,
}: {
  limit: number;
  search: string;
}) => {
  const data = await fetchPokeAPI({ limit, search });

  return (
    <div className="relative flex flex-col gap-y-10">
      {/* <div className="flex flex-col items-center justify-center bg-[#F2F2F2] text-gray-800 px-6 py-4 rounded-lg max-w-md mx-auto">
        <img
          src="/gif-nodata.gif"
          alt="Pika crying"
          className="w-4/5 h-40 mb-4 object-cover"
        />
        <h2 className="text-xl mb-2 font-bold bg-gradient-to-r from-red-700 to-blue-700 hover:from-blue-600 hover:to-red-600 text-transparent bg-clip-text">
          Pokémon no encontrado!
        </h2>
        <p className="text-center text-gray-600">
          Ningún Pokémon coincide con tus criterios de búsqueda. ¡Intenta
          ajustar tu búsqueda!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#F2F2F2] text-gray-800 px-6 py-4 rounded-lg  max-w-md mx-auto">
        <img
          src="/gif-nodata.gif"
          alt="Pikachu crying"
          className="w-4/5 h-40 mb-4 object-cover"
        />
        <h2 className="text-xl text-center font-bold bg-gradient-to-r from-red-700 to-blue-700 hover:from-blue-600 hover:to-red-600 text-transparent bg-clip-text mb-2">
          ¡Oh no! Algo salió mal...
        </h2>
        <p className="text-center text-gray-600">Mensaje de error</p>
      </div> */}

      <PokeList data={data} />
      <PokemonPagination />
    </div>
  );
};

export default CardList;
