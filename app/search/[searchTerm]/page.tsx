import React from "react";

type searchResult = { // this should be structurized in a same way as response is coming.
  organic_results: [
    {position: number,
    title: string,
    link: string,
    thumbnails: string,
    snippet: string}
  ];
};

type pageProps = {
  params: {
    searchTerm: string; // this key name should be the  same as folder name is : [searchTerm]
  };
};

const fetchSearch = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );

  const data: searchResult = await res.json();
  return data;
};

const page = async ({ params: { searchTerm } }: pageProps) => {
  const searchResult = await fetchSearch(searchTerm);
  return (
    <div>
      <p className="Otext-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResult.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default page;
