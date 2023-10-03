import React from "react";
import FadeIn from "./FadeIn";

const ServiceItem = (props) => {
  return (
    <FadeIn delay={0.4} direction="down" padding fullWidth>
      <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
        <img
          src={props.ServiceIcon}
          alt={props.title}
          className="max-h-[84px] max-w-[84px]"
        />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
            {props.title}
          </h3>
          <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
            {props.subTitle}
          </h6>
        </div>
      </div>
    </FadeIn>
  );
};

export default ServiceItem;
