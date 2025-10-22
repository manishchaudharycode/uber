/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { InputOTPControlled } from "./inputOtp";

function    RidePopUp(props: any) {
  return (
    <div className="h-screen">
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-1 text-center w-[93%]  ml-40 absolate top-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon  icon-tabler icons-tabler-outline icon-tabler-chevron-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </h5>
      <h3 className="text-2xl mb-10 font-semibold">New Ride Available !</h3>
      <div className="flex items-center justify-between p-3 bg-neutral-600/30 rounded-md mb-4">
        <div className="flex items-center   gap-3">
          <img
            className="w-20  object-cover rounded-full"
            src="https://imgs.search.brave.com/6l9q_hbn9SrYPIQc5nKvWyBxa-cqrEVN5laWSOLCGwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzk4LzIyLzAw/LzM2MF9GXzg5ODIy/MDAyNl9ZcEV0WGwz/R0NhSk0zOXJQTHV4/OHQwYWN4eTN3cHNR/Ti5qcGc"
            alt=""
          />
          <h2 className="text-xl font-medium">Arohi Kumari</h2>
        </div>
        <h5>4.5 km</h5>
      </div>
      <div className="flex justify-between  gap-5 flex-col items-center">
        <div className="w-full border-t-1 ">
          <div className="flex gap-5 mb-3 p-2 border-b-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <div className="flex flex-col ">
              <h2>675/23-R</h2>
              <h5>Kaikondrahalli, Bengaluru, Karnataka</h5>
            </div>
          </div>
          <div className="flex gap-5 mb-3 p-2 border-b-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-rectangle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
            </svg>
            <div className="flex flex-col">
              <h2 className="font-semibold">Third Wave Coffee</h2>
              <h5 className="text-sm">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </h5>
            </div>
          </div>
          <div className="flex gap-5 mb-3 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
              <path d="M3 10l18 0" />
              <path d="M7 15l.01 0" />
              <path d="M11 15l2 0" />
            </svg>
            <div className="flex flex-col">
              <h2 className="font-semibold">₹193.00</h2>
              <h5 className="text-sm">Cash Cash</h5>
            </div>
          </div>
        </div>
       <form >
       <div className="grid gap-4 w-full">
         <InputOTPControlled  />
         <Button
          onClick={() => props.setRidePopupPanel(false)}
          variant={"outline"}
          className="w-full bg-neutral-400/30"
        >
          Ignore
        </Button>
        <Link 
         to={"/captain-ride"}
          className="w-full bg-neutral-500/60 flex justify-center items-center p-1.5 rounded-md"
        >
          confirm
        </Link>
       </div>
       </form>
      </div>
    </div>
  );
}

export default RidePopUp;
