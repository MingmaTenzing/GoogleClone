import { Bars3Icon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

function Results() {
  return (
    <div>

      <div className=" w-full grid grid-cols-3 mt-4 items-center">
<Bars3Icon className="h-7 pl-4"/>
<Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height={100} width={150} alt='Google Logo' />
<UserCircleIcon className="h-7 ml-auto pr-4" />
      </div>

      <div className="flex justify-center ">
        <form className="flex border rounded-full w-full max-w-md h-8 items-center p-4 ">
          <MagnifyingGlassIcon className="h-5" />
          <input type='text'className= " pl-2 focus:outline-none flex-grow"/>
          <XMarkIcon className="h-5" />
        </form>


      </div>

   
    
    
    </div>
  )
}
export default Results