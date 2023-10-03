// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";
import ServiceItem from "../components/ServiceItem";

const Services = () => {
  return (
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full"
    >
      {services.map((service, i) => (
        <ServiceItem
          key={service.title}
          title={service.title}
          ServiceIcon={service.icon}
          subTitle={service.subtitle}
        />
      ))}
    </div>
  );
};

export default Services;
