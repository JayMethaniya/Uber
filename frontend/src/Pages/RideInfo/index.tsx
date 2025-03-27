import React from "react";
const Index = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      {/* Pickup Info */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold">Meet at the pickup point</h2>
        <div className="bg-black text-white text-sm px-3 py-1 rounded">
          <span className="font-bold text-lg">2</span> min
        </div>
      </div>

      {/* Driver and Car Info */}
      <div className="flex items-center gap-3 py-4">
        <div className="relative w-14 h-14">
          <img
            src="https://via.placeholder.com/50"
            alt="Driver"
            className="w-full h-full rounded-full border border-gray-300"
          />
          <img
            src="https://via.placeholder.com/60"
            alt="Car"
            className="absolute -right-4 top-3 w-14"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">KA15AK00-0</h3>
          <p className="text-gray-600 text-sm">White Suzuki S-Presso LXI</p>
        </div>
        <div className="ml-auto flex flex-col items-end">
          <span className="text-xs text-gray-500 font-medium">SANTH</span>
          <span className="text-gray-800 font-semibold">★ 4.9</span>
        </div>
      </div>

     
      {/* Bottom Buttons */}
      <div className="flex justify-around text-center text-sm text-gray-600">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
            🛡️
          </div>
          Safety
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
            📍
          </div>
          Share my trip
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
            📞
          </div>
          Call driver
        </div>
      </div>
    </div>
  );
};
export default Index;
