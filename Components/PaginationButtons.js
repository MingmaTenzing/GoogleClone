import { ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

import { useRouter } from "next/router"

function PaginationButtons() {
const router = useRouter();

const startIndex = Number (router.query.start) || 0; 



  return (
    <div className="flex text-blue-700  justify-center mb-10 space-x-40 max-w-lg ">
        {startIndex >= 10 && (
            <Link href={`search?term=${router.query.term}&start=${startIndex - 10}`}>
            <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                <ChevronLeftIcon  className="h-5 "/>
                <p>Previous</p>
            </div>

            </Link>
        )}


        <Link href={`search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronRightIcon className="h-5 " />
            <p>Next</p>
        </div>
        </Link>

    </div>
  )
}
export default PaginationButtons