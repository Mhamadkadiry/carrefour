import React from 'react'

function Categories() {
  return (
    <div className=" hidden bg-white font-montserrat shadow-md lg:block">
      <div className="mx-auto flex max-w-7xl justify-between space-x-1  text-[12px] text-black">
        <div className="flex items-center space-x-5">
          <div className=" group relative inline-block items-center">
            <a className="flex cursor-pointer items-center space-x-3 border-[1px] border-t-0 border-b-0 border-l-0 border-r-gray-300 py-3 font-semibold hover:bg-gray-50 hover:text-blue-600">
              <div>All Categories</div>
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </a>
            <div className="absolute z-10  hidden w-[1300px] bg-white shadow-2xl group-hover:block">
              <div className="flex w-full flex-col">
                <ul className="w-fit">
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Fresh Food</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Fruits& Vegetables</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Food Cupboard</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Beverages</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Frozen Food</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Baby Products</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Bakery</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Bio& Organic Food</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Electronics& Appliances</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Smartphones, Tablets& Wearables</p>
                    </a>
                  </li>
                  <li
                    href="#"
                    className="cursor-pointer p-4 hover:bg-gray-200 hover:font-bold"
                  >
                    <a>
                      <p>Beauty & Personal Care</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a className="cursor-pointer hover:text-blue-600">Food Cupboard</a>
          <a className="cursor-pointer hover:text-blue-600">
            Fruits& Vegetables
          </a>
          <a className="cursor-pointer hover:text-blue-600">Fresh Food</a>
          <a className="cursor-pointer hover:text-blue-600">
            Electronics& Appliances
          </a>
          <a className="cursor-pointer hover:text-blue-600">
            Smartphones, Tablets& Wearables
          </a>
          <a className="cursor-pointer hover:text-blue-600">Baby Products</a>
          <a className="cursor-pointer hover:text-blue-600">Beverages</a>
        </div>

        <a className="flex cursor-pointer items-center space-x-1 border-[1px] border-t-0 border-b-0 border-r-0 border-l-gray-300 pl-4 text-[#e3870f]">
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
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <div>
            <p className="text-[10px]">Quick</p>
            <p className="text-[12px] font-bold">BUY AGAIN</p>
          </div>
        </a>
        <div className="relative hidden group-hover:block">
          <div className="absolute bottom-0"> hi</div>
        </div>
      </div>
    </div>
  )
}

export default Categories
