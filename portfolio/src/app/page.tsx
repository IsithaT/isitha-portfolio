import NavBar from "@/components/NavBar";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-white">
      <NavBar />

      <main className="flex flex-1 items-center justify-center px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
          {/* Left Panel: Name + Bio + Socials */}
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-lg">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Isitha <br /> Tennakoon
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I am a second-year CS Student at SFU. Welcome to my portfolio site! Here you
              can find info about me and some of the things I've done. <br /><br /> Happy Browsing! :D
            </p>

            <div className="flex gap-6 mt-2">
              <a href="https://github.com/IsithaT/" title="GitHub">
                <SiGithub className="w-10 h-10 hover:text-red-700 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/isithat/" title="LinkedIn">
                <SiLinkedin className="w-10 h-10 hover:text-blue-700 transition-colors" />
              </a>
              <a href="mailto:ilt@sfu.ca" title="Email">
                <MdAlternateEmail className="w-10 h-10 hover:text-green-700 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Panel: Image + Resume */}
          <div className="flex flex-col items-center gap-6 w-full max-w-xs">
            <div className="w-full relative pb-[140%] rounded-xl overflow-hidden">
              <Image
                src="/images/profile-pic.png"
                alt="Picture of the author"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <a
              href="/files/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div className="w-full text-center px-6 py-3 border-2 border-red-700 rounded-lg text-black font-semibold hover:bg-red-700 hover:text-white transition-colors">
                Resume
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
