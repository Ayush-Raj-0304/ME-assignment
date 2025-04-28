import TeamMember from './TeamMember';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Ashwin',
      image: '/ashwin.png',
      bio: 'is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University. Ashwin &apos vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.',
      linkedin: '#'
    },
    {
      name: 'Nicole',
      image: '/Nicole.png',
      bio: 'is an Executive coach at Mobius specializing in resume builds and career advisory. With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.',
      linkedin: '#'
    }
  ];
  
  return (
    <div
      className="min-h-screen bg-cover bg-center relative bg-[url(/Rectangle.png)]">

      <section className="py-16 px-6 text-white">
      <div className="items-centermax-w-full px-[150px] ">
        <h2 className="text-2xl font-semibold mb-12 text-start">About Us</h2>
        <div className="space-y-12 px-[15vw]">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="mb-2">Learn more about our Board of Advisors ↗</p>
          <p>Follow us on <a href="#" className="">LinkedIn Page ↗</a></p>
        </div>
      </div>
    </section>

  </div>
    
  );
};

export default AboutUs;