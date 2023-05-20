import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote:
        "The toys I bought from this store are amazing! My kids love them.",
    },
    {
      id: 2,
      name: "Jane Smith",
      quote: "Great selection of toys and excellent customer service.",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      quote:
        "'I've never seen such a wide variety of toys in one place. The quality is fantastic!'",
    },
    {
      id: 4,
      name: "Mike Thompson",
      quote:
        "'I'm impressed with the quick delivery and the toys arrived in perfect condition.'",
    },
    {
      id: 5,
      name: "Emily Brown",
      quote:
        "The customer support team was extremely helpful in assisting me with my purchase. Highly recommend!",
    },
    {
      id: 6,
      name: "David Wilson",
      quote:
        "This toy store has become my go-to place for all my children's toy needs. Never disappoints!",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md p-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <p className="text-lg mb-2">{testimonial.quote}</p>
              <p className="text-sm font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
