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
        className={`${searchOpen? "border-blue-700" : "border-red-700"} w-14 h-14 flex fixed justify-center items-center font-bold bottom-8 right-8 bg-white text-blue-700 border-[1px] rounded-full z-30 transition-transform duration-500 ease-in-out`}
        aria-label="Toggle Search"
        style={{
          transform: searchOpen ? "rotate(40deg)" : "rotate(0deg)",
        }}
      >
        <svg    className={`${searchOpen? "fill-[rgb(29,78,216)]" : "fill-[rgb(185,28,28)]"} transition-all duration-500 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" transform="scale(1)" ><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
      </button>

      <aside
        className={`${
          searchOpen ? "w-64 h-12" : "w-14 h-14"
        } fixed bottom-8 right-8 z-20 bg-white border-[1px] border-blue-700 rounded-full overflow-hidden shadow-lg transition-all duration-500 ease-in-out flex items-center`}
        aria-label="search-bar"
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
        </form>
      </aside>
    </>
  );
};

export default SearchButton;
