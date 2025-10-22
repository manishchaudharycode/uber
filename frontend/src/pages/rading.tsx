import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


function Rading() {
  return (
    <div className="h-screen">
     <Link to={"/home"} className="fixed h-10 w-10 items-center justify-center right-2 top-2"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg"
        />
      </div>
      <div className="h-1/2  p-6.5">
        <div className="flex items-center justify-between">
          <img
            className="h-10 mb-3  rounded-full"
            src="https://imgs.search.brave.com/Dj5bYOU5yCQ1X9pOm9oFBp09gBLN2yAHMFS-b4pOgQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbi1n/ZW8xLnViZXIuY29t/L2ltYWdlLXByb2Mv/Y3JvcC9yZXNpemVj/cm9wL3VkYW0vZm9y/bWF0PWF1dG8vd2lk/dGg9NTUyL2hlaWdo/dD0zNjgvc3JjYjY0/PWFIUjBjSE02THk5/MFlpMXpkR0YwYVdN/dWRXSmxjaTVqYjIw/dmNISnZaQzkxWkdG/dExXRnpjMlYwY3k4/ME1tVmlPRFZqTXkx/bE1tUmpMVFJsT1RV/dFlUY3daQzB5TW1W/bE5HWXdPREF4TldZ/dWNHNW4"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Vivek Kumar</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP12AC2635 </h4>
            <p className="text-sm text-neutral-600">
              White Maruti Suzuki Alto{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between  gap-4 flex-col items-center">
          <div className="w-full border-t-1 ">
            <div className="flex gap-5 mb-3 p-3 border-b-1">
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
            <div className="flex gap-5 mb-3 p-3 ">
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
        </div>

        <Button className="bg-neutral-500 px-27 py-5" variant="outline">
          Make a Payment
        </Button>
      </div>
    </div>
  );
}

export default Rading;
