"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-8">
      <input
      className="h-12 border-2 border-blue-500 bg-transparent p-4 rounded-lg "
        type="text"
        value={search}
        placeholder="Enter the Search Term "
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">search</button>
    </form>
  );
};

export default Search;
