
import { HandThumbDownIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import Avatar from './Avatar'
function Header() {
  return (
    <div className="   w-full flex justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
            <p className='link'>About</p>
            <p className='link'>Store</p>
        </div>

        <div className="flex space-x-4 items-center">
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>
            
            <Squares2X2Icon className="  rounded-full p-2 hover:bg-gray-300 h-10 cursor-pointer"/>
            <UserCircleIcon className='h-8 hover:scale-125 cursor-pointer transition-all  100'/>
           
        </div>
       
        
    </div>
  )
}
export default Header