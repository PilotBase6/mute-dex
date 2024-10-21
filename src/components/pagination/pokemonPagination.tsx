"use client";
import LoadButton from "@/components/buttons/loadButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

// interface PokemonPaginationProps {
//   initialLimit: number;
// }

const PokemonPagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef<number>(0);

  const initialLimit = 20;
  const limitPage = searchParams.get("limit")
    ? Number(searchParams.get("limit"))
    : initialLimit;

  const loadMore = () => {
    ref.current = window.scrollY;
    router.replace(`/?limit=${limitPage + 20}`);
  };

  useEffect(() => {
    window.scrollTo({ top: ref.current });
  }, [limitPage]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <LoadButton disabled={limitPage >= 1025} loadMore={loadMore}>
          Cargar más
        </LoadButton>
      </div>
    </div>
  );
};

export default PokemonPagination;
