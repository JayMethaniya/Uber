import { Hotel, Plane } from "lucide-react";
import React from "react";

interface Props {
  vehiclePanelOpen: boolean;
  setVehiclePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index = ({ vehiclePanelOpen, setVehiclePanelOpen, setPanelOpen }: Props) => {
  return (
    <div className="w-full px-5 space-y-4">
      {locations.map((loc, index) => (
        <div
          key={index}
          onClick={() => {
            setVehiclePanelOpen(true);
            setPanelOpen(false);
          }}
          className="flex items-center gap-5 border-white border-2 rounded-xl active:border-black h-20 cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#eeee]">
            {loc.icon}
          </div>

          <div>
            <div className="font-semibold">{loc.name}</div>
            <div className="text-sm text-gray-500">{loc.address}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const locations = [
  {
    icon: <Plane size={20} />,
    name: "Kempegowda International Airport",
    address: "KIAL Rd, Devanahalli, Bengaluru, Karnataka",
  },
  {
    icon: <Hotel size={20} />,
    name: "Sheraton Grand Bengaluru Whitefield",
    address:
      "Prestige Shantiniketan Hoodi, Whitefield, Thigalarapalya, Krishnarajapura, Bengaluru",
  },
  {
    icon: <Plane size={20} />,
    name: "Kempegowda International Airport",
    address: "KIAL Rd, Devanahalli, Bengaluru, Karnataka",
  },
  {
    icon: <Hotel size={20} />,
    name: "Sheraton Grand Bengaluru Whitefield",
    address:
      "Prestige Shantiniketan Hoodi, Whitefield, Thigalarapalya, Krishnarajapura, Bengaluru",
  },
  {
    icon: <Plane size={20} />,
    name: "Kempegowda International Airport",
    address: "KIAL Rd, Devanahalli, Bengaluru, Karnataka",
  },
  {
    icon: <Hotel size={20} />,
    name: "Sheraton Grand Bengaluru Whitefield",
    address:
      "Prestige Shantiniketan Hoodi, Whitefield, Thigalarapalya, Krishnarajapura, Bengaluru",
  },
];

export default Index;
