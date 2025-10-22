import { Link } from "react-router-dom";

export function Start() {
  return (
    <div className="w-full h-screen bg-neutral-800/40 flex bg-cover  bg-center justify-between flex-col bg-[url(https://imgs.search.brave.com/wNfDFrDaw7waXxFkqW0zcO0-Thxo7nDRlfvaAsXn0F0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzA2NTI0OTk0NzQt/OWRhMGY5MWQ2NzUz/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1USjhmSFJ5/WVdabWFXTWxNakJz/YVdkb2RITjhaVzU4/TUh4OE1IeDhmREE9)]">
      <img
        className="p-57 pt-10 pl-12"
        src="https://imgs.search.brave.com/AaQVII3Laf15MtlnCUtkuPhRE76JSwoiqbE4R8bl__g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTUz/NDI1MTUuanBn"
        alt=""
      />
      <div className=" pb-10 py-4 px-12  bg-neutral-400/60">
        <h2 className="text-3xl text-black mb-5 ">Get started with Uber</h2>

        <Link
          to={"/login"}
          className="w-full px-30 bg-neutral-600/70 py-2.5 text-white  "
        >
          Continue
        </Link>
      </div>
    </div>
  );
}


