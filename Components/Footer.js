import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid'


function Footer() {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 text-sm text-gray-500 bg-gray-100 '>
    <div className='px-8 py-2' >
     <p>Australia</p> 
    </div>
    <div className='sm:flex sm:justify-between sm:pr-3 sm:pl-3'>
      <div className='flex items-center  space-x-4 justify-center p-2 mt-2 sm:mt-0'>
      <p>Advertising</p>
      <p>Business</p>
      <p>How Search Works</p>
      </div>

      <div className='flex items-center space-x-4 justify-center p-4'>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Settings</p>
      </div>
    </div>
    </footer>
  )
}
export default Footer