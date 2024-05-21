
import CarouselSec from "@/sections/CarouselSec";
import WhyUs from "@/sections/WhyUs";
import ContactUs from "@/sections/ContactUs";

import Image from "next/image";
import Choose from "@/sections/Choose";
import Counter from "@/sections/Counter";
import UniScroll from "@/sections/UniScroll";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="w-screen">
        <CarouselSec />
      </div>
     
      <div className="padding-x padding-y">
        <Counter />
      </div>
      <div className="padding-x pb-10">
        <WhyUs />
      </div>

      <div>
        <ContactUs />
      </div>
      <div className="padding-x padding-y">
        <Choose />
      </div>
      <div className="padding-y padding-x">
        <UniScroll />
      </div>
    </div>
  );
}
