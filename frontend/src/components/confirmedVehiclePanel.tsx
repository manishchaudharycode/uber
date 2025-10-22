/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "./ui/button";


export default function ConfirmedVehiclePanel(props: any) {


  return (
    <div>
      <h5 onClick={()=>{props.setVehiclePanel(false)}} className="p-1 text-center w-[93%] ml-40 absolate top-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon  icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex justify-between  gap-4 flex-col items-center">
        <img className="h-20 mb-3  rounded-full" src="https://imgs.search.brave.com/Dj5bYOU5yCQ1X9pOm9oFBp09gBLN2yAHMFS-b4pOgQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbi1n/ZW8xLnViZXIuY29t/L2ltYWdlLXByb2Mv/Y3JvcC9yZXNpemVj/cm9wL3VkYW0vZm9y/bWF0PWF1dG8vd2lk/dGg9NTUyL2hlaWdo/dD0zNjgvc3JjYjY0/PWFIUjBjSE02THk5/MFlpMXpkR0YwYVdN/dWRXSmxjaTVqYjIw/dmNISnZaQzkxWkdG/dExXRnpjMlYwY3k4/ME1tVmlPRFZqTXkx/bE1tUmpMVFJsT1RV/dFlUY3daQzB5TW1W/bE5HWXdPREF4TldZ/dWNHNW4" alt="" />   
        <div className="w-full border-t-1 ">
             <div className="flex gap-5 mb-3 p-3 border-b-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
               <div className="flex flex-col ">
                <h2>675/23-R</h2>
                <h5>Kaikondrahalli, Bengaluru, Karnataka</h5>
               </div>
             </div>
             <div className="flex gap-5 mb-3 p-3 border-b-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-rectangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /></svg>
              <div className="flex flex-col">
                <h2 className="font-semibold">Third Wave Coffee</h2>
                <h5 className="text-sm">17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka</h5>
              </div>
             </div>
             <div className="flex gap-5 mb-3 p-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 10l18 0" /><path d="M7 15l.01 0" /><path d="M11 15l2 0" /></svg>
              <div className="flex flex-col">
                <h2 className="font-semibold">₹193.00</h2>
                <h5 className="text-sm">Cash Cash</h5>
              </div>
             </div>
        </div>
        <Button onClick={()=>{props.setVehicleFound(true)
          props.setComfirmRidePanel(false     )
        }} variant={"outline"} className="w-full bg-neutral-500/40">Confirm</Button>
        </div> 
    </div>
  );
}
