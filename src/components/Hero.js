import React from "react";
import myPhoto from "./../assets/images/my-photo.png";

const Hero = () => {
  return (
    <section className="lg:h-[85vh] flex items-center bg-background lg:bg-cover lg:bg-center lg:bg-no-repeat py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto text-white">
        <div className="flex items-center h-full pt-8">
          {/* Left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start ">
            <div className="px-3">
              <p className="text-sm items-start font-normal">Hello!</p>
              <p className="text-3xl md:text-4xl md:leading-tight lg:text-6xl lg:leading-[1.2] md:tracking-[-1px] font-bold leading-[44px]">
                I'm Bryan Althafano
              </p>
              <p className=" font-medium mt-2 text-sm md:text-xl md:leading-tight lg:text-2xl ">
                Website Programmer & Mobile Programmer
              </p>
              <p className=" font-light text-xs  md:text-sm md:leading-tight lg:text-lg ">
                my ultimate motto is to fulfill the demand of the buyyers by
                making them satisfied with proper file delivery in time and
                without any delay
              </p>
            </div>
            <div className="mt-8 px-3">
              <button className="btn btn-md hover:bg-red-600 bg-primary md:btn-lg transition-all rounded-sm">
                <div className="text-sm font-semibold py-1 px-5 md:text-lg ">
                  Work with me
                </div>
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full ">
            <img src={myPhoto} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
