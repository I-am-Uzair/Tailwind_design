import React from "react";
import FadeIn from "./FadeIn";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

const ProductItem = (props) => {
  return (
    <FadeIn delay={(props.index + 1) * 0.2} direction="left" fullWidth>
      <div className="h-[510px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px]">
        <img
          src={props.img}
          alt={props.title}
          className="absolute -top-[120px] left-1/2 -translate-x-1/2"
        />
        <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px]  shadow-md px-8 py-[26px] flex flex-col justify-between">
          <div className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
            <h2>{props.title}</h2>
            <img src={starsIcon} alt="Stars Icon" />
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
              {props.price}
            </h3>
            <img
              src={plusIcon}
              alt="Plus Icon"
              className="cursor-pointer h-10 xs:h-12 w-10 xs:w-10 "
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ProductItem;
