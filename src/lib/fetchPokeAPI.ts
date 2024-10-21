
export const fetchPokeAPI = async ({limit = 20}:{limit?: number}) => {
  const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {next: {tags: ["pokemonList"]}}
  );
  const data = await response.json();
  console.log(data);
  const results = { results: data.results, limit };
  return results;
};

