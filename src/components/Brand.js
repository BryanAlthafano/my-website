import React from "react";
import htmlLogo from "./../assets/images/html-logo.png";
import cssLogo from "./../assets/images/css-logo.png";
import javascriptLogo from "./../assets/images/javascript-logo.png";
import reactLogo from "./../assets/images/react-logo.png";
import vueLogo from "./../assets/images/vue-logo.png";
import laravelLogo from "./../assets/images/laravel-logo.png";
import phpLogo from "./../assets/images/php-logo.png";
import mysqlLogo from "./../assets/images/mysql-logo.png";

const Brand = () => {
  const programmingLanguage = [
    {
      name: "Html",
      img: htmlLogo,
    },
    {
      name: "css",
      img: cssLogo,
    },
    {
      name: "javascript",
      img: javascriptLogo,
    },
    {
      name: "php",
      img: phpLogo,
    },
    {
      name: "react",
      img: reactLogo,
    },
    {
      name: "vue",
      img: vueLogo,
    },
    {
      name: "laravel",
      img: laravelLogo,
    },
    {
      name: "mysql",
      img: mysqlLogo,
    },
  ];
  return (
    <section className="min-h-[150px] bg-primaryBlue flex items-center flex-col py-8 overflow-hidden">
      <div className="flex-row py-5 px-5 flex justify-evenly w-full">
        <div className="flex-col items-center flex justify-center xl:px-6">
          <div className="text-white font-bold text-2xl  md:text-3xl lg:text-6xl text-center">
            1 Year Of Experience
          </div>
          <div className="text-white font-base text-md  md:text-1xl lg:text-2xl text-center pt-5 ">
            I am a junior programmer but I have passion in learning further
            programming and improving my skills
          </div>
        </div>
        <div className="flex-row justify-evenly xl:flex hidden">
          {/* box 1 */}
          <div className=" hover:bg-primary rounded-md  px-6 py-5 max-w-xs mx-1 border-solid border-primary border-2 hover:text-white text-primary">
            <div className="text-white text-xl font-bold text-center ">
              Website Programming
            </div>
            <div className="text-white text-md font-normal text-center pt-4 mx-2">
              Website programming using pure Html Css or Tailwind and Javascript
              <div className="pt-3">
                Website programming using framework like Vue js, React js and
                Laravel for back-end
              </div>
            </div>
            <div className="  text-lg font-bold px-5 pt-5">5+ Project</div>
          </div>
          {/* box 2 */}
          <div className="hover:bg-primary rounded-md  px-6 py-5 max-w-xs mx-1 flex flex-col border-solid border-primary border-2 hover:text-white text-primary">
            <div>
              <div className="text-white text-xl font-bold text-center ">
                Mobile Programming
              </div>
              <div className="text-white text-md font-normal text-center pt-4 mx-2">
                Mobile programming using Vue js or React js and Laravel for
                back-end
              </div>
            </div>
            <div className="  text-lg font-bold px-5 pt-5 flex flex-auto items-end">
              2+ Project
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row xl:hidden pt-8 md:justify-evenly w-full gap-3 md:gap-0">
        {/* box 1 */}
        <div className=" hover:bg-primary rounded-md  px-6 py-5 max-w-xs mx-1 border-solid border-primary border-2 hover:text-white text-primary">
          <div className="text-white text-xl font-bold text-center ">
            Website Programming
          </div>
          <div className="text-white text-md font-normal text-center pt-4 mx-2">
            Website programming using pure Html Css or Tailwind and Javascript
            <div className="pt-3">
              Website programming using framework like Vue js, React js and
              Laravel for back-end
            </div>
          </div>
          <div className="  text-lg font-bold px-5 pt-5">5+ Project</div>
        </div>
        {/* box 2 */}
        <div className="hover:bg-primary rounded-md  px-6 py-5 max-w-xs mx-1 flex flex-col border-solid border-primary border-2 hover:text-white text-primary">
          <div>
            <div className="text-white text-xl font-bold text-center ">
              Mobile Programming
            </div>
            <div className="text-white text-md font-normal text-center pt-4 mx-2">
              Mobile programming using Vue js or React js and Laravel for
              back-end
            </div>
          </div>
          <div className="  text-lg font-bold px-5 pt-5 flex flex-auto items-end">
            2+ Project
          </div>
        </div>
      </div>
      <div className="text-lg text-white my-5 font-bold md:text-xl lg:text-3xl pt-8">
        Programming Language
      </div>
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {programmingLanguage.map((logo, index) => {
          return (
            <div key={index}>
              <img
                src={logo.img}
                alt="htmlLogo"
                className={`${
                  logo.name === "javascript" ? "w-16" : "w-"
                } w-12 mx-2 my-2 hover:scale-125`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brand;
