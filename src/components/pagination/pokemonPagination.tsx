"use client";
import { useState, useEffect } from "react";

import LoadButton from "@/components/buttons/loadButton";
import PokeList from "@/components/cards/pokeList";

import { fetchPokeAPI } from "@/lib/fetchPokeAPI";

interface PokemonPaginationProps {
  initialLimit: number;
}

const PokemonPagination = ({ initialLimit }: PokemonPaginationProps) => {
  const [limitPage, setLimitPage] = useState<number>(initialLimit);
  const [data, setData] = useState<{ results: { name: string; url: string; }[], limit: number }>();

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchPokeAPI({ limit: limitPage });
      setData(result);
    };
    loadData();
  }, [limitPage]);

  const loadMore = () => {
    setLimitPage(limitPage + 20);
  };

  return (
    <div>
      {data && <PokeList data={data} />}
      <div className="flex justify-center mt-4">
        <LoadButton loadMore={loadMore}>Cargar más</LoadButton>
      </div>
    </div>
  );
};

export default PokemonPagination;