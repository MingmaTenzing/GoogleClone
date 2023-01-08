import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import PaginationButtons from "../Components/PaginationButtons";
import Results from "../Components/Results";
import ResultsHeader from "../Components/ResultsHeader";
import SearchResults from "../Components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
const router = useRouter();

  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <ResultsHeader />
      <SearchResults results={results} />
    
    </div>
  );
}
export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0' ;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
