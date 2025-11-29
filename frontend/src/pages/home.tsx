import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "@/components/locationPanel";
import RideOptions from "@/components/vehicle";
import ConfirmedVehiclePanel from "@/components/confirmedVehiclePanel";
import LookingForDriveer from "@/components/lookingForDriveer";
import WaitingForDriver from "@/components/waitingForDriver";
import axios from "axios";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP);

function Home() {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");

  const [activeField, setActiveField] = useState<"pickup" | "destination">(
    "pickup"
  );

  const [pickupSuggestion, setPickupSuggestion] = useState<string[]>([]);
  const [destinationSuggestion, setDestinationSuggestion] = useState<string[]>(
    []
  );

  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [comfirmRidePanel, setComfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [fare, setFare] = useState({})

  const vehiclePanelRef = useRef(null);
  const comfirmRidePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const handlePickupChange = async (e: any) => {
    const value = e.target.value;
    setPickUp(value);
    setActiveField("pickup");

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPickupSuggestion(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDestinationChange = async (e: any) => {
    const value = e.target.value;
    setDestination(value);
    setActiveField("destination");

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setDestinationSuggestion(data);
    } catch (error) {
      console.error(error);
    }
  };
  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : "0%",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
    });
  }, [panelOpen]);

  useGSAP(
    () => {
      gsap.to(vehiclePanelRef.current, {
        transform: vehiclePanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehiclePanel]
  );

  useGSAP(
    () => {
      gsap.to(comfirmRidePanelRef.current, {
        transform: comfirmRidePanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [comfirmRidePanel]
  );

  useGSAP(
    () => {
      gsap.to(vehicleRef.current, {
        transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehicleFound]
  );

  useGSAP(
    () => {
      gsap.to(waitingForDriverRef.current, {
        transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
      });
    },
    [waitingForDriver]
  );

  async function findTrip(){
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
       params: {pickUp, destination}, 

  }) 
    console.log(response.data)
  }

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
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-0 right-5 cursor-pointer"
          >
            ▼
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form className="grid gap-3">
            <div className="line absolute h-20 w-1 top-[45%] left-9 bg-neutral-700" />

            <input
              onClick={() => setPanelOpen(true)}
              onChange={handlePickupChange}
              value={pickUp}
              className="bg-neutral-400 text-base border px-10 py-2"
              type="text"
              placeholder="Add a pick-up location"
            />

            <input
              onClick={() => setPanelOpen(true)}
              onChange={handleDestinationChange}
              value={destination}
              className="bg-neutral-400 text-base border px-10 py-2"
              type="text"
              placeholder="Enter your destination"
            />
          </form>

          <Button 
          onClick={findTrip}
          className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full">Find Trip</Button>
        </div>
        <div ref={panelRef} className="h-[0] overflow-auto bg-neutral-200">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestion
                : destinationSuggestion
            }
            activeField={activeField}
            setPickup={setPickUp}
            setDestination={setDestination}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full p-3 bg-neutral-50 grid gap-3"
      >
        <h3 className="text-xl font-bold">Choose a Vehicle</h3>
        <RideOptions setConfirmRidePanel={setComfirmRidePanel} />
      </div>
      <div
        ref={comfirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full p-3 bg-neutral-50 grid gap-3"
      >
        <ConfirmedVehiclePanel
          setComfirmRidePanel={setComfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleRef}
        className="fixed w-full z-10 bottom-0 translate-y-full p-3 bg-neutral-50 grid gap-3"
      >
        <LookingForDriveer setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full p-3 bg-neutral-50 grid gap-3"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
}

export default Home;
