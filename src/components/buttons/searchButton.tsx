"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchButton = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  

  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    router.replace(`/?search=${e.target.value}`);
  }

  return (
    <>
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="w-14 h-14 flex fixed justify-center items-center bottom-4 right-4 bg-black text-white rounded-full z-30 transition-transform duration-500 ease-in-out"
        aria-label="Toggle Search"
        style={{
          transform: searchOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        Search
      </button>

      <aside
        className={`${
          searchOpen ? "w-64 h-12" : "w-14 h-14"
        } fixed bottom-4 right-4 z-20 bg-white rounded-full overflow-hidden shadow-lg transition-all duration-500 ease-in-out flex items-center`}
      >
        <form
          className={`flex items-center transition-opacity duration-300 ${
            searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search"
            className="w-full h-full pl-4 pr-2 rounded-l-full text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white h-full px-4 rounded-r-full"
          >
            Go
          </button>
        </form>
      </aside>
    </>
  );
};

export default SearchButton;
