import React from "react";
import laundryImage from "./../assets/images/portofolio-apps-sample.png";

const Portofolio = () => {
  const portofolioApps = [
    {
      name: "Laundry Apps",
      description:
        "Laundry Digital merupakan aplikasi mobile untuk memudahkan owner laundry dan pelanggan dalam melakukan kegiatan layanan laundry",
      image: laundryImage,
    },
    {
      name: "Veil Store Apps",
      description:
        "Veil Store Apps merupakan aplikasi mobile untuk memudahkan owner kerudung dan pelanggan dalam melakukan penjualan kerudung serta memudahkan pemasaran",
      image: laundryImage,
    },
    {
      name: "Agpaii Digital",
      description:
        "Laundry Digital merupakan aplikasi mobile untuk memudahkan owner laundry dan pelanggan dalam melakukan kegiatan layanan laundry",
      image: laundryImage,
    },
    {
      name: "My Website",
      description:
        "Veil Store Apps merupakan aplikasi mobile untuk memudahkan owner kerudung dan pelanggan dalam melakukan penjualan kerudung serta memudahkan pemasaran",
      image: laundryImage,
    },
  ];
  return (
    <section className="min-h-[150px] bg-background flex py-8 overflow-hidden ">
      <div className="flex flex-col w-full">
        <div className="flex text-white text-center font-bold text-lg justify-center md:text-xl lg:text-3xl">
          Portofolio
        </div>
        <div className="flex my-8 px-4 justify-center  gap-5 lg:flex-row flex-wrap ">
          {/* box */}
          {portofolioApps.map((item, index) => {
            return (
              <div
                className="rounded-md bg-primaryBlue px-5 py-5 flex-col max-w-[300px] hover:scale-105 shadow-sm shadow-slate-500 hover:shadow-none"
                key={index}
              >
                <div>
                  <img
                    src={item.image}
                    alt="laundryImage"
                    className="rounded-t-md"
                  />
                </div>
                <div className="text-primary  font-bold text-xl pt-3">
                  {item.name}
                </div>
                <div className="text-gray-400  font-normal text-base  text-justify">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
