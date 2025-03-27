import { Coffee, MapPin, Wallet } from "lucide-react";
import React, { useState } from "react";

interface Props {
  setConfirmedRidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  confirmedRidePanelOpen: boolean;
  setVehiclePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index = ({}: Props) => {
  const [searching, setSearching] = useState(true);
  return (
    <div className=" mt-4    ">
      {searching ? (
        <div className="text-center mb-4 px-4">
          <p className="text-black text-lg font-semibold">
            Looking for nearby drivers
          </p>
          <div className="flex justify-center mt-2">
            <div className="w-36 h-16 animate-pulse bg-[#eff3fe] rounded-3xl flex items-center justify-center">
              <div className="w-20 h-12 mb-4 animate-pulse bg-[#d4e2fc] rounded-2xl flex items-center justify-center"></div>
            </div>

            <img
              className="w-20 h-20 absolute bottom-96 top-7 "
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
              alt=""
            />
          </div>
        </div>
      ) : null}
      <div className=" border-t-2 border-[#eeee] mb-6 "></div>
      <div className="space-y-4 ">
        <div className="flex items-center space-x-4 px-4">
          <MapPin />
          <div>
            <p className="font-bold">562/11-A</p>
            <p className="text-gray-500 text-sm">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
          </div>
        </div>
        <div className=" border-t-2 border-[#eeee] mb-6 ml-14 "></div>
        <div className="flex items-center space-x-4 px-4">
          <Coffee className="text-brown-500" />
          <div>
            <p className="font-bold">Third Wave Coffee</p>
            <p className="text-gray-500 text-sm">
              17th Cross Rd, HSR Layout, Bengaluru
            </p>
          </div>
        </div>
        <div className=" border-t-2 border-[#eeee] mb-6 ml-14 "></div>
        <div className="flex items-center space-x-4 px-4 pb-7">
          <Wallet />
          <div className="flex  flex-col">
            <p className="text-lg font-semibold">₹193.20</p>
            <p className="text-gray-500">Cash</p>
          </div>
        </div>
      </div>
      {/* <div className=" bg-green-600 h-12 flex justify-center items-center rounded-xl mb-6 mx-4">
        <button className="text-white font-semibold w-full h-full cursor-pointer">Confirm</button>
      </div> */}
    </div>
  );
};

export default Index;
