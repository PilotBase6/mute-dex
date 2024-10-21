export const fetchPokeAPI = async ({
  limit = 20,
  search,
}: {
  limit?: number;
  search?: string;
}) => {
  try {
    let response;
    if (search) {
      limit = 1025;
      response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        { next: { tags: ["pokemonList"] } }
      );
    } else {
      response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        { next: { tags: ["pokemonList"] } }
      );
    }
    const data = await response.json();
    let results = data.results;

    if (search) {
      results = results.filter((poke: { name: string }) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    results = results.map((poke: { name: string; url: string }) => {
      const match = poke.url.match(/\/pokemon\/(\d+)\//);
      const id = match ? parseInt(match[1], 10) : null;
      return {
        ...poke,
        id,
      };
    });

    return { results: results, limit: limit };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Failed to fetch data from PokeAPI:", errorMessage);
    return { results: [], limit: limit, error: errorMessage };
  }
};

export const fetchPokeInfo = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  const name = data.forms[0].name;
  const image = data.sprites.other["home"].front_default;
  const abilities = data.abilities.map(
    (ability: { ability: { name: string } }) => ability.ability.name
  );
  const types = data.types.map(
    (type: { type: { name: string } }) => type.type.name
  );
  const height = data.height;
  const weight = data.weight;

  console.log(name, image, abilities, types, height, weight);

  return { name, image, abilities, types, height, weight };
};
