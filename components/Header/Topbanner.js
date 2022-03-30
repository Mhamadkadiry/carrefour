import React from 'react'

function Topbanner() {
  return (
    <div className="hidden font-montserrat lg:flex">
      <div className=" w-full bg-[#0C4E91] py-2">
        <div className=" p-y-5 mx-auto flex max-w-7xl justify-between text-white">
          <div className="text-s flex space-x-4">
            <div className="flex items-center justify-center space-x-2 ">
              <img
                className="h-4 w-4"
                src="https://cdnprod.mafretailproxy.com/assets/images/fast_delivery_17b9ee4153_d668dca9eb_a8fdc87713.svg"
              />
              <p className="text-[10px] ">Fast & Free Delivery</p>
            </div>
            <div className="flex items-center justify-center space-x-2 ">
              <img
                className="h-4 w-4"
                src="https://cdnprod.mafretailproxy.com/assets/images/1million_639c1ee7d2_1c053c9c92_791f12fdc5.svg"
              />
              <p className="text-[10px] ">Shop from over 20,000 products</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <img
                className="h-4 w-4"
                src="https://cdnprod.mafretailproxy.com/assets/images/FREE_RETURN_d5a70bdcc9_e1226197e2_d8602b93c4.svg"
              />
              <p className="text-[10px] ">Free Returns</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 divide-x-[0.1px] divide-modified-blue">
            <div className="flex justify-center text-center">LBP</div>
            <div
              style={{ paddingLeft: '5px' }}
              className="flex justify-center  space-x-1 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
              <p className="mt-1 justify-center text-center text-xs">1548</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbanner
