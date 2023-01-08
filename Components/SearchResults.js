import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%]">
      <p className="text-gray-600 text-md mb-5 mt-3 ">
        {" "}
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.searchTime})
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className='max-w-xl mb-8 group'>
          <div>
            <a href={result.link} className='text-sml line-clamp-1'>
         {result.formattedUrl}
            </a>
            <a>
            <h2 className=" group-hover:underline truncate cursor-pointer text-xl text-blue-700">{result.title}</h2>
         </a>
          </div>
         

          <p className="line-clamp-2">{result.snippet}</p>

          </div>
      ))}


<PaginationButtons />

</div>
      )}
export default SearchResults;
