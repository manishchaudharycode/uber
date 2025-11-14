import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "@/components/locationPanel";
import RideOptions from "@/components/vehicle";
import ConfirmedVehiclePanel from "@/components/confirmedVehiclePanel";
import LookingForDriveer from "@/components/lookingForDriveer";
import WaitingForDriver from "@/components/waitingForDriver";

gsap.registerPlugin(useGSAP); // ✅ register the hook plugin

function Home() {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [comfirmRidePanel, setComfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false)


  const vehiclePanelRef = useRef(null);
  const comfirmRidePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleRef = useRef(null);
  const waitingForDriverRef = useRef(null)

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (comfirmRidePanel) {
      gsap.to(comfirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(comfirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [comfirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(()=>{
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current,{
        transform:"translateY(0)",
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform:"translateY(100%)",
      })
    }
  },[waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://imgs.search.brave.com/DXjcmHYT3Sqda7-LVO8zoTJNzUSMIgu1uA8HdhhE8us/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTgtcHJlc2Vu/dC03MDB4Mzk0Lmpw/Zw"
        alt=""
      />
      <div className="w-screen h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://imgs.search.brave.com/SUAmZzkxdcsS5wDDTdANVbe0rpX_lmaqGV15fzVwON8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vLXNlbnNl/LmpwZw"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white relative p-5 grid gap-2">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 *: top-0 right-5"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
            </svg>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            className="grid gap-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-20 w-1 top-[45%] left-9 bg-neutral-700"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
              value={pickUp}
              className="bg-neutral-400 text-base border px-10 py-2"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              value={destination}
              className="bg-neutral-400 text-base border px-10 py-2"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0] bg-neutral-200">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  p-3 bg-neutral-50 grid gap-3"
      >
        <h5
          ref={panelCloseRef}
          onClick={() => {
            setVehiclePanel(false);
          }}
          className="absolute opacity-0  top-0 right-5"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="test-black  icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
          </svg>
        </h5>
        <h3 className="text-xl font-bold">Choose a Vehicle</h3>
        <div>
          <RideOptions setConfirmRidePanel={setComfirmRidePanel} />
        </div>
      </div>
      <div
        ref={comfirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  p-3 bg-neutral-50 grid gap-3"
      >
        <ConfirmedVehiclePanel
          setComfirmRidePanel={setComfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  p-3 bg-neutral-50 grid gap-3"
      >
        <LookingForDriveer setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0   p-3 bg-neutral-50 grid gap-3"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
      
    </div>
  );
}

export default Home;
