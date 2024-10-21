
export const fetchPokeAPI = async ({limit = 20, search}:{limit?: number, search ?: string}) => {
  const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {next: {tags: ["pokemonList"]}}
  );
  const data = await response.json();
  let results = data.results;

  if (search) {
    results = results.filter((poke: { name: string }) => poke.name.toLowerCase().includes(search.toLowerCase()));
  }

  results = results.map((poke: { name: string, url: string }) => {
    const match = poke.url.match(/\/pokemon\/(\d+)\//);
    const index = match ? parseInt(match[1], 10) : null;
    return {
      ...poke,
      index
    };
  });

  console.log(results);

  return { results: results, limit:limit };
};

