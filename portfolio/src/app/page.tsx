import NavBar from "@/components/NavBar";

export default function Home() {
  return (
      <div className="flex flex-col h-screen w-full justify-center items-center">
        
        {/* Main Box */}
        <div className="w-[65%] h-[60%] min-h-fit flex flex-col gap-13 justify-between">


          <div className="flex h-full w-full justify-between">
              <div className="flex flex-col justify-between h-full w-min p-5">
              <h1 className="text-7xl">
                Isitha <br/>
                Tennakoon
              </h1>
              <p className="text-lg text-justify">
                I am a second year CS Student at SFU. I love a b and c. 
                And will dsaaffd asdfasdf. asfdsaf asdfa y sdfa sdfasdf asd f 
                as  fsd fasdf asdf asd fsd df adf asdf  asg fa d asdfsdag dsg   
                ag sdf sfasdf dsf 
              </p>
              
              <div className="flex justify-between items-center">
                <p>s</p>
                <p>e</p>
                <p>w</p>
              </div>
            </div>

            <div className="min-w-fit min-h-fit gap-3 flex flex-col justify-between items-end p-5">
              <img className="grow object-cover w-[354px] rounded-2xl" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2Fb31f%2Fth%2Fpre%2Ff%2F2017%2F085%2Fe%2F4%2Fpixel_art_profile_image_by_lonezi-db3oypd.png&f=1&nofb=1&ipt=dfdcff8b2e6174b3ee851f6feed56c4962a325b440840367c48e0bcb5989d209&ipo=images' alt="placeholder" />
              <div className="bg-red-200 grow-0 w-[354px] h-[40px]">sa</div>
            </div>
          </div>
        </div>


      </div>
  );
}
