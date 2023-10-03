import React from "react";
import FadeIn from "./FadeIn";

const CareItem = (props) => {
  return (
    <FadeIn delay={props.keyIndex * 0.2} direction="left">
      <div className=" flex flex-col xs:flex-row gap-6 items-center xs:items-start">
        <img src={props.img} alt={props.title} className="h-[88px] w-[68px]" />
      </div>
      <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
        {props.title}
      </h3>
      <h6 className="text-center xs:text-start text-base  lg:text-lg text-fontGray font-medium">
        {props.subTitle}
      </h6>
    </FadeIn>
  );
};

export default CareItem;
