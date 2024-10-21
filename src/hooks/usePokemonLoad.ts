// hooks/usePokemonPagination.ts
import { useState, useEffect } from "react";
import { fetchPokeAPI } from "@/services/fetchPokeAPI";

interface PokemonPagination {
    name: string;
    url: string;
}

export const usePokemonPagination = (limit = 20) => {
  const [pokemonList, setPokemonList] = useState<PokemonPagination[]>([]);
  const [page, setPage] = useState(limit);
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 

  const loadPokemon = async (pageToLoad: number) => {
    setLoading(true);

    try {
      const data = await fetchPokeAPI(pageToLoad: ); 
      setPokemonList((prevList) => [...prevList, ...data.results]);

      if (data.results.length < limit) {
        setHasMore(false); 
      }
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadPokemon(page);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPokemon(nextPage);
  };

  return {
    pokemonList,
    loading,
    hasMore,
    loadMore,
  };
};
