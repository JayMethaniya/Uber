import { useRef, useState } from "react";
import { ChevronDown, Clock, User } from "lucide-react";
import logo from "../../assets/images/Uber_Logo_Black_RGB.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../Components/LocationSearchPanel/index";
import ChooseVehicle from "../../Components/ChooseVehicle/index";

export default function UberUI() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef<HTMLDivElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "65%",
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );
  return (
    <div className="relative h-screen w-full">
      <img src={logo} alt="logo" className="w-16 absolute left-5 top-5" />
      <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Map Placeholder</p>
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[35%] bg-white relative p-5 rounded-t-3xl">
          {!panelOpen ? (
            <h2 className="text-xl font-semibold mb-4">Find a trip</h2>
          ) : (
            <button
              onClick={() => setPanelOpen(false)}
              className="flex items-center mb-4"
            >
              <ChevronDown />
            </button>
          )}

          <form onSubmit={submitHandler} className="space-y-3">
            <div className="absolute bg-white h-2 w-2 left-10 top-[31%] border-2 border-black rounded-full"></div>
            <div className="line absolute h-14 w-[3px] left-11 top-[31%] bg-gray-900 rounded-full"></div>
            <div className="absolute bg-black h-2 w-2 left-10 top-[55%]"></div>

            <input
              type="text"
              placeholder="Add a pick-up location"
              className="flex w-full items-center border py-3 px-9 rounded-lg bg-gray-100"
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your destination"
              className="flex w-full items-center border py-3 px-9 rounded-lg bg-gray-100"
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>

          <div className="flex items-center mt-4 bg-gray-100 p-3 rounded-lg">
            <Clock className="text-gray-500 mr-2" />
            <span className="text-gray-700">Leave Now</span>
          </div>
        </div>

        <div ref={panelRef} className={`bg-white overflow-hidden  `}>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
        <div  ref={vehiclePanelRef} className={`bg-white overflow-hidden fixed  `}>
          <ChooseVehicle
          
           vehiclePanelOpen={vehiclePanelOpen}
           setVehiclePanelOpen={setVehiclePanelOpen}
            />
        </div>
      </div>
    </div>
  );
}
