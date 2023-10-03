// local imports
import { careTitle, careSubtitle, careList } from "../data";
import imageFour from "../assets/image-four.svg";
import FadeIn from "../components/FadeIn";
import CareItem from "../components/careItem";

const Care = () => {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {careSubtitle}
        </h5>
      </FadeIn>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-start gap-8">
          {careList.map((item, index) => (
            <CareItem
              key={index}
              keyIndex={index}
              img={item.img}
              title={item.title}
              subTitle={item.subtitle}
            />
          ))}
        </div>
        <FadeIn delay={0.6} direction="left">
          <img src={imageFour} alt="Plants" />
        </FadeIn>
      </div>
    </div>
  );
};

export default Care;
