"use client";
import React, { useState, useEffect } from "react";
import parse, { domToReact } from "html-react-parser";
import Image from "next/image";
import gif from '../../../assets/image/gif.gif';
import CityList from "@/app/Components/Citylist/Citylist";

const Adobepremiere1 = ({ data }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(!data.name); // If data is not available, show loading

  useEffect(() => {
    if (!data.name) {
      setIsLoading(true);
      // Optionally you could re-fetch data here if not provided on the server side.
      setIsLoading(false);
    }
  }, [data]);

  const parsedDescription = data.description
    ? parse(data.description, {
        replace: (domNode) => {
          let isFirstH2 = true;

          if (domNode.type === "tag") {
            if (domNode.name === "p") {
              const props = { className: "p-5 dark:text-white text-justify" };
              return <p {...props}>{domToReact(domNode.children)}</p>;
            }
            if (domNode.name === "h3") {
              const props = { className: "p-5 text-lg dark:text-white" };
              return <p {...props}>{domToReact(domNode.children)}</p>;
            }
            if (domNode.name === "ul") {
              const props = { className: "p-5 dark:text-white" };
              return <p {...props}>{domToReact(domNode.children)}</p>;
            }
            if (domNode.name === "h2" && isFirstH2) {
              const props = {
                className: "text-[#013E6D] p-5 font-bold text-4xl dark:text-white",
              };
              isFirstH2 = false;
              return <h2 {...props}>{domToReact(domNode.children)}</h2>;
            }
          }
        },
      })
    : null;

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader-overlay"></div>
        <div className="loaderContainer">
          <Image className="w-52 h-52" src={gif} alt="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5">
        <div className="text-[48px] max-sm:text-[24px] max-sm:text-center font-semibold">
          {data.name}
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10 max-sm:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <div className="md:col-span-2 lg:col-span-3">
            <img
              src={data.spage_image}
              alt="Content"
              className="w-full max-sm:mt-5"
            />
            <div className="mt-4">
              {parsedDescription ? parsedDescription : <p>No Description Available</p>}
            </div>
          </div>

          <CityList />
        </div>
      </div>
    </>
  );
};

export default Adobepremiere1;
