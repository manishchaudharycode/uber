/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";



export default function RideOptions(props: any) {
  const [selected, setSelected] = useState<string | null>(null);

  const rides = [
    {
      id: "ubergo",
      name: "UberGO",
      price: "₹193.00",
      time: "2 mins away",
      description: "Affordable, compact rides",
      rating: 4,
     img: "https://imgs.search.brave.com/Dj5bYOU5yCQ1X9pOm9oFBp09gBLN2yAHMFS-b4pOgQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbi1n/ZW8xLnViZXIuY29t/L2ltYWdlLXByb2Mv/Y3JvcC9yZXNpemVj/cm9wL3VkYW0vZm9y/bWF0PWF1dG8vd2lk/dGg9NTUyL2hlaWdo/dD0zNjgvc3JjYjY0/PWFIUjBjSE02THk5/MFlpMXpkR0YwYVdN/dWRXSmxjaTVqYjIw/dmNISnZaQzkxWkdG/dExXRnpjMlYwY3k4/ME1tVmlPRFZqTXkx/bE1tUmpMVFJsT1RV/dFlUY3daQzB5TW1W/bE5HWXdPREF4TldZ/dWNHNW4",
    },
    {
      id: "moto",
      name: "Moto",
      price: "₹65.17",
      time: "3 mins away",
      description: "Affordable motorcycle rides",
      rating: 1,
     img: "https://imgs.search.brave.com/AGaD-1izzdu7n4_qRC24fAT0Wc-GQUy9TALxsuMU0Kw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA3/NzQvNzE0My90LzE1/L2Fzc2V0cy9wZi01/ZjVhZTY2Yy0wMWE4/LTQwOTMtYmNmYi02/YjYzYjNkODJlOWQt/LW5pdS1uZ3Qtd2hp/dGUtc3E0ODB4NDgw/LmpwZz82OTgyOQ",
    },
    {
      id: "auto",
      name: "UberAuto",
      price: "₹118.21",
      time: "2 mins away",
      description: "Affordable auto rides",
      rating: 3,
      img: "https://imgs.search.brave.com/nf8BaJ2DzS-3XVL3_VQzPJo-Z0UYemmBssGvlLIkyEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDg0/MzE3NzMvYXNzZXRz/LzFkL2RiOGM1Ni0w/MjA0LTRjZTQtODFj/ZS01NmExMWEwN2Zl/OTgvb3JpZ2luYWwv/VWJlcl9BdXRvXzU1/OHgzNzJfcGl4ZWxz/X0Rlc2t0b3AucG5n",
    },
  ];

  return (
    <div className="space-y-2">
      {rides.map((ride) => (
        <div
          key={ride.id}
          onClick={() => {
            setSelected(ride.id);
            props.setConfirmRidePanel(true); // ✅ correct prop name
          }}
          className={`flex w-full p-3 items-center justify-between border-2 rounded-xl transition-all duration-200 cursor-pointer
            ${
              selected === ride.id
                ? "border-black bg-neutral-200"
                : "border-transparent bg-neutral-100 hover:border-gray-300"
            }`}
        >
          <img src={ride.img} alt={ride.name} className="h-12 ml-1" />

          <div className="w-1/2">
            <h4 className="flex font-medium items-center">
              {ride.name}
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                </svg>
              </span>
              <span className="ml-1">{ride.rating}</span>
            </h4>
            <h5 className="font-black text-sm">{ride.time}</h5>
            <p className="font-bold text-xs whitespace-nowrap">{ride.description}</p>
          </div>

          <h2 className="mr-1 font-semibold">{ride.price}</h2>
        </div>
      ))}
    </div>
  );
}
