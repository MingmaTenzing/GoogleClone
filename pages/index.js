import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon, CameraIcon } from "@heroicons/react/24/solid";
import Footer from "../Components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const Router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    Router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <Head>
        <title>Google Clone</title>
      </Head>

      <Header />

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5 ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt=''
        />

        <div className="w-full flex mt-5 hover:shadow-lg  focus-within:lg max-w-md rounded-full border-gray-200 px-5 py-3  items-center border">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500 " />

          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow "
          ></input>
          <MicrophoneIcon className="h-5 mr-2" />
          <CameraIcon className="h-5" />
        </div>

        <div className="flex  space-x-3 mt-4 items-center   justify-center    sm:space-y-0 sm:space-x-4 ">
          <button onClick={search} className="btn p-3">
            {" "}
            Google Search
          </button>
          <button onClick={search}className="btn p-3"> I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
