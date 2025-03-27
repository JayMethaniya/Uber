import { User, ChevronDown } from "lucide-react";
import React, { forwardRef, useState } from "react";

interface Props {
  setConfirmedRidePanelOpen:React.Dispatch<React.SetStateAction<boolean>>;
  vehiclePanelOpen: boolean;
  setVehiclePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index =(({setConfirmedRidePanelOpen, vehiclePanelOpen, setVehiclePanelOpen }:Props) => {
  const [selectedRide, setSelectedRide] = useState<number | null>(null);

  return (
    <div
      
      className=" w-full px-5 space-y-4"
    >
      {!vehiclePanelOpen ? (
        <h2 className="text-xl font-semibold mb-4">Choose a Vehicle</h2>
      ) : (
        <button
          onClick={() => setVehiclePanelOpen(false)}
          className="flex items-center mt-4"
        >
          <ChevronDown />
        </button>
      )}

      {rides.map((ride) => (
        <div
          key={ride.id}
          className={`p-4 flex items-center h-28 justify-between border ${
            selectedRide === ride.id ? "border-black border-4" : "border-none"
          } rounded-xl cursor-pointer `}
          onClick={() => {
            setSelectedRide(ride.id);
            setConfirmedRidePanelOpen(true);
            setVehiclePanelOpen(false);
          }}
        >
          <div className="flex items-center space-x-4">
            <img className="w-20" src={ride.icon} alt={ride.type} />
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold text-lg">{ride.type}</h3>
                <div className="text-gray-500 flex text-sm">
                  <User size={20} color="black" /> {ride.capacity}
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                {ride.time} away • {ride.eta}
              </p>
              <p className="text-gray-400 text-xs">{ride.description}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">₹{ride.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Index;

const rides = [
  {
    id: 1,
    type: "UberGo",
    capacity: 4,
    price: 193.2,
    time: "2 mins",
    eta: "15:24",
    description: "Affordable, compact rides",
    icon: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png",
  },
  {
    id: 2,
    type: "Moto",
    capacity: 1,
    price: 65.17,
    time: "3 mins",
    eta: "15:24",
    description: "Affordable motorcycle rides",
    icon: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
  },
  {
    id: 3,
    type: "Premier",
    capacity: 4,
    price: 193.2,
    time: "4 mins",
    eta: "15:25",
    description: "Comfortable sedans, top-quality drivers",
    icon: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png",
  },
  {
    id: 4,
    type: "UberAuto",
    capacity: 3,
    price: 118.21,
    time: "2 mins",
    eta: "15:24",
    description: "Affordable auto rides",
    icon: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
  },
];
