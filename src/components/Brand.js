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
    <section className="min-h-[150px] bg-primaryBlue flex items-center flex-col py-5">
      <div className="text-lg text-white my-5 font-semibold md:text-xl lg:text-2xl">
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
                  logo.name == "javascript" ? "w-14" : ""
                } w-12 mx-2 my-2`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brand;
