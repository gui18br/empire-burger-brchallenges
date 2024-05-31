import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getTestimonials } from "../../services/routes";

interface TestimonialsProps {
  name: string;
  image: string;
  age: string;
  testimonial: string;
}

const CarouselItems = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsProps[]>([]);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 13,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 900px)": {
        slides: {
          perView: 1,
          spacing: 5,
        },
      },
    },
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        setTestimonials(response);
        if (instanceRef) {
          instanceRef.current?.update();
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, [instanceRef]);

  return (
    <div className="flex flex-col justify-center  mr-48 ml-48 mt-[128px]">
      <div className="mb-[16px]">
        <h1 className="text-32 text-secondary font-bold">Nossa realeza</h1>
        <p className="text-primary text-[18px]">
          A satisfação de nossos clientes em primeiro lugar!
        </p>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white hover:transition-shadow hover:duration-500 hover:shadow-[#00000071] hover:shadow-2xl rounded-xl cursor-grab p-3 "
          >
            <div className="">
              <p className="text-primary line-clamp-4">
                {testimonial.testimonial}
              </p>
            </div>
            <div className="flex mt-3 gap-2 ">
              <img
                src={testimonial.image}
                alt=""
                className="w-[48px] h-[48px] rounded-full bg-black "
              />
              <div>
                <h2 className="text-[18px] text-secondary font-bold">
                  {testimonial.name}
                </h2>
                <div className="flex gap-1 text-primary">
                  <p>{testimonial.age}</p>
                  <p> • </p>
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselItems;
