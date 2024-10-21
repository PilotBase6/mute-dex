import { revalidateTag } from "next/cache";

export const fetchPokeAPI = async ({limit = 20}:{limit?: number}) => {
  const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {next: {tags: ["pokemonList"]}}
  );
  const data = await response.json();
  const results = { results: data.results, limit };
  return results;
};

export async function loadMorePokemon(limit: number) {
    await fetchPokeAPI({ limit });
    return console.log("Cargando más Pokémon...");
  }
