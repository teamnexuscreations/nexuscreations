import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialType } from './types';

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg relative border border-black">
      <Quote className="h-8 w-8 text-black mb-4" />
      <p className="text-black text-lg mb-4">{testimonial.text}</p>
      <div>
        <p className="font-semibold text-black">{testimonial.author}</p>
        <p className="text-black">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default Testimonial;