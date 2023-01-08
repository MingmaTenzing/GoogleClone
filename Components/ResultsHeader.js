import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {  CameraIcon, MicrophoneIcon, MinusIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import ResultHeaderOptions from "./ResultHeaderOptions";

function ResultsHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);


  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) {
        return
    }

    router.push(`/search?term=${term}`);



  }


  



  return (
    <header className='sticky top-0 bg-white'>
      <div className = 'flex w-full items-center p-6'>
      <Image
        onClick={() => {
          router.push("/");
        }}
        className="cursor-pointer"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        alt='Google Logo'
      />

    <form className="flex flex-grow border border-gray-200 shadow-lg rounded-full max-w-3xl items-center px-6 py-3 ml-10 mr-5">
        <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text'/>
        
       
        <XMarkIcon onClick={() => {
            (searchInputRef.current.value = '')
        }} className='h-7 sm:mr-3  cursor-pointer hover:scale-110'/>
       <div className="hidden sm:inline-flex">
        <MinusIcon className="h-8 text-gray-300 rotate-90 "/>
        <MicrophoneIcon className="cursor-pointer h-6 mr-3 text-blue-500" />
        <CameraIcon className="cursor-pointer h-6 mr-3 text-yellow-500" />
        <MagnifyingGlassIcon onClick={search} className="cursor-pointer h-6 text-green-500" />
        <button hidden type='submit' onClick={search}></button>
        </div>

    
    </form>

    <UserCircleIcon className="h-10 sm:ml-auto"/>
    </div>

    <ResultHeaderOptions />
    </header>

  );
}
export default ResultsHeader;
