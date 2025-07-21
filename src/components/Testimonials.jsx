import React from "react";
import './Testimonials.css'; 

const testimonials = [
  {
    name: "Rajan D Samuel",
    text: `Anbarasi is one of the best Software Developers I have come across in my career. She is a quick learner, ready to take responsibilities, has an eye for detail, and is especially artistic in designing and building websites. Her expertise in Python makes her a valuable asset to the company. She is very committed to work, complies with all HR policies, and is a great employee. Though she has just started her career, she is a valuable addition to our company by all means.`,
    image: "/images/RajanHR.jpg"
  },
 
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-heading">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
