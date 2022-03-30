import React from 'react'

function Bottombanner() {
  return (
    <div
      className=" bg-[#0e5aa7] font-montserrat"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.15)',
        borderRight: '0px',
        borderLeft: '0px',
        borderBottom: '0px',
        borderWidth: 'thin',
      }}
    >
      <div className="mx-auto flex max-w-7xl justify-between space-x-1 py-2">
        <div className="hidden items-center space-x-2 text-[12px] text-white lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <div>Next Standard Delivery - Today 3 pm - 7 pm</div>
        </div>
        <div className="flex items-center justify-between space-x-2 text-[12px] text-white">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <span>Deliver to:</span>
              <span className="font-bold"> Hazmieh - Baabda</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <button> Change </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottombanner
