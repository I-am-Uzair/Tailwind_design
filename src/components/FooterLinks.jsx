import React from "react";

const FooterLinks = (props) => {
  console.log(props);
  return (
    <div className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto">
      <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
        {props.title}
      </h6>
      <ul className="flex flex-col gap-4">
        {props.links.map((link, index) => (
          <div className="w-full flex mx-auto justify-center xl:justify-start">
            <li
        
              key={`list-item-${index}`}
              className={`font-medium text-sm md:text-base ${
                index !== 1 && "cursor-pointer"
              } text-center xl:text-start w-fit`}
            >{link}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
