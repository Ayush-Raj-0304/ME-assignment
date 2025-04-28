import ServiceCard from './ServiceCard';

const ResumeServices = () => {
  const services = [
    {
      title: 'Resume Rebuild',
      subtitle: 'Updating yours to get results with clear, ATS friendly copy',
      price: 1000,
      oneTime: true,
      features: [
        '1-on-1 live coaching',
        'Personal branding (expert formatting)',
        'Expert + HR application team of insights',
        'Targeted to your target industry sectors or positions',
        'Word doc + ATS-txt for transfer into LinkedIn / Indeed / ZipRecruiter'
      ]
    },
    {
      title: 'Interview Prep',
      subtitle: 'We conduct the interview away from keyboard = easy',
      price: 500,
      oneTime: true,
      features: [
        '2-4+ live coaching with real co.',
        'Real-time, practical feedback',
        'Submit for aligned + sourced presenter',
        'The secrets of backstage rules — explained to increase!'
      ]
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-full px-[120px] rounded-3xl">
        <h2 className="text-2xl font-bold text-[#0649E7] mb-4">Resume Building & Coaching</h2>
        <p className="text-[#0649E7] mb-10">Let's talk about another critical aspect of how you can show what you know and what you can do.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[13vw]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeServices;