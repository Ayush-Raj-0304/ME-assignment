import Button from './Button';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Holly is a senior executive who got over 10 job interviews and an offer she accepted',
      icon: '↗'
    },
    {
      text: 'Holly is a senior executive who got over 10 job interviews and an offer she accepted',
      icon: '↗'
    },
    {
      text: 'Holly is a senior executive who got over 10 job interviews and an offer she accepted',
      icon: '↗'
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-full px-[150px]">
        <h2 className="text-2xl font-semibold text-[#0649E7] mb-10 text-start px-10">What our clients have to say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <Button text="More customer testimonials" isPrimary={false}  className={'border border-2 border-[#0649E7] '}/>
          <Button text="Get Started" isPrimary={true} className={'border border-2 border-[#0649E7] ' }/>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;