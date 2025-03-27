import React from 'react'

const Index = () => {
    return(
        <div className="bg-white p-4 rounded-t-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Driver"
              className="w-10 h-10 object-cover rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg">Harsh Patel</h3>
              <span className="text-gray-400 text-xs">●</span>
            </div>
          </div>
          <h2 className="font-bold text-xl">₹295.20</h2>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between mt-4 text-center text-gray-600">
          <div>
            
            <h4 className="font-semibold text-lg">10.2</h4>
            <p className="text-xs">Hours Online</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">10.2</h4>
            <p className="text-xs">Hours Online</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">10.2</h4>
            <p className="text-xs">Hours Online</p>
          </div>
        </div>
      </div>
    )
}

export default Index