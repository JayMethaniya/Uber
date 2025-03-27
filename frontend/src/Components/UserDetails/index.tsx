import { MessageCircle, Phone, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function index({}: Props) {
  return (
    <div className="p-4 max-w-md mx-auto bg-white min-h-screen shadow-lg rounded-xl">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Esther Berry</h2>
              <div className="flex gap-1 text-xs text-yellow-600">
                <span className="bg-yellow-100 px-2 py-1 rounded">AppPay</span>
                <span className="bg-yellow-100 px-2 py-1 rounded">Discount</span>
              </div>
            </div>
          </div>
          <span className="text-lg font-semibold">$25.00</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">PICK UP</h3>
          <p className="text-md">7958 Swift Village</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500">DROP OFF</h3>
          <p className="text-md">105 William St, Chicago, US</p>
        </div>
       
        <div className="border-t pt-2">
          <h3 className="text-sm font-semibold text-gray-500">FARE DETAILS</h3>
         
          <div className="flex justify-between text-md font-semibold">
            <span>Paid Amount</span>
            <span>$25.00</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-around p-4 border-t">
        
        <Link to="/captain/home" className=" w-[1/3] flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg">
          <X size={16} /> Cancel
        </Link> 

        <Link to="/captain/pick-up" className="w-full bg-yellow-500 text-center  hover:bg-yellow-600 text-white py-3 rounded-lg">
        GO TO PICK UP
      </Link>
      </div>

     
    </div>  )
}