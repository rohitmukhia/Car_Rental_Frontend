import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image: assets.testimonial_image_1,
      name: "John Doe",
      country: "Barcelona, Spain",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image: assets.testimonial_image_2,
      name: "Jane Smith",
      country: "New York, USA",
      content:
        "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image: assets.testimonial_image_2,
      name: "David Lee",
      country: "Syndey, Australia",
      content:
        "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-28">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  className="w-12 object-contain rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-xl">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.country}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      key={index}
                      src={assets.star_icon}
                      alt="star"
                      className="h-4"
                    />
                  ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
