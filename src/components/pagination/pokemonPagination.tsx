"use client"
import LoadButton from "@/components/buttons/loadButton";
import { useState } from "react";

interface PokemonPaginationProps {
  limitPage?: number;
}

const PokemonPagination =  ({ limitPage }: PokemonPaginationProps) => {
    const [limitPokePage, setLimitPokePage] = useState<number>(limitPage??20);
  console.log(limitPage);

  const loadMore = async () => {
    setLimitPokePage(limitPokePage + 20);
  };

    
  return (
    <div className="flex justify-center mt-4">
      <LoadButton loadMore={loadMore}>Cargar más</LoadButton>
    </div>
  );
};

export default PokemonPagination;
