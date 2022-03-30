import React from 'react'

function MainBody() {
  return (
    <div className="px-2 lg:px-0">
      <p className="mt-5 pl-1 text-xl font-bold md:text-3xl lg:mt-10">
        Top Categories
      </p>
      <div className="mt-10 flex space-x-2 overflow-x-scroll lg:overflow-hidden">
        <div className="flex space-x-2">
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#A88125]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_ramadanessentials_3eced0c4b5.png"
                />
              </div>
              <p className="text-center font-bold">Ramadan Essentials</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_grocery_edfb93d779.png"
                />
              </div>
              <p className="text-center font-bold">Grocery</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_fruitsvegetables_75a4011cc5.png"
                />
              </div>
              <p className="text-center font-bold">Fruits& Vegetables</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_dairy_604e5ee295.png"
                />
              </div>
              <p className="text-center font-bold">Dairy</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_beverages_dc3ccc9dcd.png"
                />
              </div>
              <p className="text-center font-bold">Beverages</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_frozenfood_a1b6c111b4.png"
                />
              </div>
              <p className="text-center font-bold">Frozen Food</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_cookware_aa08fa5484.png"
                />
              </div>
              <p className="text-center font-bold">Cookware</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_kitchenappliances_35d2ef69c3.png"
                />
              </div>
              <p className="text-center font-bold">Appliances</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_cleaningsupplies_bb90531fb7.png"
                />
              </div>
              <p className="text-center font-bold">Cleaning Supplies</p>
            </div>
          </div>
          <div className="flex w-[80px] justify-center md:w-[120px]">
            <div>
              <div className="cursor-pointer rounded-full bg-[#E5D9BE]">
                <img
                  className="w-[80px] transform transition duration-500 hover:scale-125 md:w-[120px]"
                  src="https://cdnprod.mafretailproxy.com/assets/images/22032022_leb_web_hp_ramadan_cc_babyproducts_2b74c67c2d.png"
                />
              </div>
              <p className="text-center font-bold">Baby Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
