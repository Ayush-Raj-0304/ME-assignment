import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/wcu1.png',
      title: 'Tried, Tested, Trusted',
      description: 'Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.'
    },
    {
      icon: '/wcu2.png',
      title: 'Real People, Real Help',
      description: 'A hands-on team that actually cares — guiding you through every twist in your career path.'
    },
    {
      icon: '/wcu3.png',
      title: 'Beat The Line',
      description: 'We search, shortlist, and apply for you, so your name shows up first — every single day.'
    }
  ];
  
  return (
    <section className="py-16 px-6 mx-auto max-w-full px-[150px] ">
      <div className="max-w-6xl mx-auto bg-[#F8FAFF] p-10 rounded-3xl">
        <h2 className="text-2xl font-semibold text-[#022183] mb-10 text-start">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;