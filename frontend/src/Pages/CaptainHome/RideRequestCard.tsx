import { Link } from "react-router-dom";

interface RideRequestCardProps {
  onClose: () => void;
}


const RideRequestCard = ({ onClose }:RideRequestCardProps) => {
    return (
      <div className="fixed bottom-5  flex items-center justify-center w-[95%]">
        <div className="w-full max-w-md p-4 shadow-lg rounded-xl border bg-white">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">Esther Berry</span>
                <div className="flex gap-2 mt-1">
                  <span className="px-2 py-1 bg-yellow-400 text-black text-xs rounded-md">ApplyPay</span>
                  <span className="px-2 py-1 bg-yellow-400 text-black text-xs rounded-md">Discount</span>
                </div>
              </div>
              <span className="ml-auto flex items-center gap-1 text-lg font-bold">
                <span className="text-gray-700">$</span> 25.00
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📍</span>
                <span className="text-gray-700">7958 Swift Village</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📍</span>
                <span className="text-gray-700">105 William St, Chicago, US</span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <button 
                className="px-4 py-2 border rounded-md text-gray-500"
                onClick={onClose}
              >
                Ignore
              </button>
              <Link to="/captain/user-details" className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">Accept</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RideRequestCard