/* eslint-disable @typescript-eslint/no-explicit-any */
function LocationSearchPanel(props: any) {
  console.log(props);
  const location = [
    {
      id: 0,
      name: "21F, Near H.R International Public School Goanda Road Aligarh",
    },
    {
      id: 1,
      name: "02G, Near medical store Aligarh",
    },
    {
      id: 2,
      name: "16Y, Near Gagan public school nadapul Aligarh",
    },
    {
      id: 3,
      name: "18A, Near ACET college mathura Road Aligarh ",
    },
  ];

  
  return (
    <div>
      {location.map((value, indx) => {
        return (
          <div key={indx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex  gap-4  p-5  items-center justify-start    "
          >
            <h2 className="flex  justify-items-center-safe ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="rounded-full icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
              </svg>
            </h2>
            <h4 className="font-medium">{value.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;
