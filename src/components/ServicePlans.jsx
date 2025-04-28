import PlanCard from './PlanCard';

const ServicePlans = () => {
  const plans = [
    {
      name: 'April Promo',
      price: 35,
      features: [
        'Customized job list (10 jobs)',
        '10-15 minutes expert consultation',
        'Job description full analysis',
        'Email-ready ATS-friendly applications',
        'Application to each job within 1-3 business days',
        '1 free revision'
      ],
    },
    {
      name: 'Starter',
      price: 50,
      features: [
        '20-30 jobs in the Scraper Plan',
        'ATS optimization',
        '30 minute Expert Specialist',
        'Up to 10 job postings',
        'Updates at least one job posting within 24 hours',
        'Tailored resumes within 6 hours',
        '2-3 free revisions'
      ],
      isPopular: true
    },
    {
      name: 'Plus',
      price: 100,
      features: [
        'Everything in Starter, whereas',
        '50-75 job postings',
        'Up to 15 applications',
        'Apply / LinkedIn optimization team up',
        'Priority applications',
        'Everything within 6 hours'
      ]
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-white mx-auto max-w-full px-[150px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0649E7] mb-10 text-start">Job Application Service Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;