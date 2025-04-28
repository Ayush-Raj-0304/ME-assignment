// src/components/Hero.jsx
import Button from './Button';

const Hero = () => {
  return (
    <section className="py-[17vh] px-[15vw] text-white">
      <div className="relative mx-auto max-w-full px-[120px] flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 absolute top-1/2 left-1 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 ">Land job interviews</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 "><span className="text-[#0649E7]">10x</span> faster</h2>
          <p className="mb-8 max-w-lg pt-4">Optimized to maximize the match rate of your knowledge, experience, and skills to land dream interviews.</p>
          <Button text="Get Started →" isPrimary={false} />
        </div>
        <div className='absolute top-1/2 right-1 size-64'>
          <img src="src/assets/book.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;