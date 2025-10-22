

function CaptainDetails() {
  return (
    <div>
         <div className="h-2/5  p-6.5">
        <div className="flex items-center justify-between">
          <div className="flex items-star justify-between gap-3  ">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://imgs.search.brave.com/lQRTQiBTmrQ_9a-BNQgS8Yl88kBxhejhfPkFaqpUTVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5LzQ1/LzhhL2M5NDU4YWQ0/NDI1YTk3MWNlMzcz/YzJhNGU1NTFlZTBh/LmpwZw  "
              alt=""
            />
            <h5 className="text-lg font-medium">Yogesh kumar</h5>
          </div>
          <div className="items-center   justify-end ">
            <h4 className="text-xl font-semibold">₹295.23</h4>
            <p className="text-sm  text-white font-medium bg-neutral-700">
              Earned
            </p>
          </div>
        </div>
        <div className="flex  mritems-start   justify-between gap-6  rounded-xl mt-10 shadow-full">
          <div className="flex flex-col items-center -ml-6 text-center">
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
              className="text-indigo-600 mb-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 12l-3 -2" />
              <path d="M12 7v5" />
            </svg>
            <h5 className="text-lg font-semibold text-gray-800">10.2</h5>
            <p className="text-sm text-neutral-600 whitespace-nowrap">
              HOURS ONLINE
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
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
              className="text-blue-600 mb-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
              <path d="M16 9l-4 4" />
            </svg>
            <h5 className="text-lg font-semibold text-gray-800">50 km</h5>
            <p className="text-sm text-neutral-600 whitespace-nowrap">
              TOTAL DISTANCE
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
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
              className="text-green-600 mb-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 21h-9a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
              <path d="M9 18h6" />
              <path d="M19 16v3" />
              <path d="M19 22v.01" />
            </svg>
            <h5 className="text-lg font-semibold text-gray-800">20</h5>
            <p className="text-sm text-neutral-600 whitespace-nowrap">
              TOTAL DEVICES
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails