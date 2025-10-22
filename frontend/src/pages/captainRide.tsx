import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CaptainRide() {
  return (
    <div className="h-screen ">
      <div className="fixed p-4 top-0 flex w-full  items-center justify-between ">
        <img
          className="w-16"
          src="https://imgs.search.brave.com/DXjcmHYT3Sqda7-LVO8zoTJNzUSMIgu1uA8HdhhE8us/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTgtcHJlc2Vu/dC03MDB4Mzk0Lmpw/Zw"
          alt=""
        />
        <Link to={"/captain-home"} className="h-10 w-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M9 12h12l-3 -3" />
            <path d="M18 15l3 -3" />
          </svg>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg"
        />
      </div>
      <div className="h-1/5  bg-neutral-900/70 ">
          <h5 className="items-center justify-center flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white  icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-up"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 13l8 -3l8 3" />
            </svg>
          </h5>
        <div className="flex items-center justify-between p-8">
          <h4 className="text-white font-semibold">4.4 Km</h4>
          <Button className="bg-neutral-300/50 font-serif">
            Complete Ride
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CaptainRide;
