import { BuildingLibraryIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, MapIcon, NewspaperIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline"
import ResultsHeaderOption from "./ResultsHeaderOption"

function ResultHeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b" >

      <div className="flex space-x-6">
        <ResultsHeaderOption Icon={MagnifyingGlassIcon} title='ALL' selected /> 
        <ResultsHeaderOption Icon={PhotoIcon} title='Images'  /> 
        <ResultsHeaderOption Icon={VideoCameraIcon} title='Videos'  /> 
        <ResultsHeaderOption Icon={NewspaperIcon} title='News'  /> 
        <ResultsHeaderOption Icon={MapIcon} title='Maps'  /> 
        <ResultsHeaderOption Icon={EllipsisVerticalIcon} title='More'  /> 

      </div>





        <div className="flex space-x-4">
            <p>Settings</p>
            <p>Tools</p>
        </div>

        
    </div>
  )
}
export default ResultHeaderOptions