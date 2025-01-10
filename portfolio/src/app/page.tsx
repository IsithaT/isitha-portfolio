import NavBar from "@/components/NavBar";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <NavBar />
      <div className="flex h-screen w-full flex-col justify-center items-center">
        {/* Main Box */}
        <div className="w-[65%] h-[60%] min-h-fit flex flex-col gap-13 justify-between">
          <div className="flex h-full w-full justify-between">
            <div className="flex flex-col justify-between h-full w-min p-5">
              <h1 className="text-7xl">
                Isitha <br/>
                Tennakoon
              </h1>
              <p className="text-lg text-justify">
               I am a second year CS Student at SFU.
               Welcome to my portfolio site! Here you 
               can find info about me and some of the things I've done. <br /><br /> Happy Browsing! :D
              </p>
              <div className="flex justify-between items-center">
                <a href="">
                  <SiGithub className="w-[40px] h-[40px]" />
                </a>
                <a href="">
                  <SiLinkedin className="w-[40px] h-[40px]" />
                </a>
                <a href="">
                  <MdAlternateEmail className="w-[40px] h-[40px] p-0" />
                </a>
              </div>
            </div>
            <div className="min-w-fit min-h-fit gap-3 flex flex-col justify-between items-end p-5">
              {/* <img className="grow object-cover w-[354px] rounded-2xl" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2Fb31f%2Fth%2Fpre%2Ff%2F2017%2F085%2Fe%2F4%2Fpixel_art_profile_image_by_lonezi-db3oypd.png&f=1&nofb=1&ipt=dfdcff8b2e6174b3ee851f6feed56c4962a325b440840367c48e0bcb5989d209&ipo=images' alt="placeholder" /> */}
                <Image
                className="grow object-cover w-[354px] rounded-xl" 
                src="/images/profile-pic.png"
                width={500}
                height={500}
                alt="Picture of the author"
                />
              <button
                className="w-full relative px-8 py-2 isolation-auto z-10 border-2 border-red-700 
                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-[#A12347] 
                before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                inline-flex items-center justify-center text-sm font-semibold text-black rounded-lg shadow-sm 
                gap-x-2 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-700"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
