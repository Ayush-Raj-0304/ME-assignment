import ProcessStep from './ProcessStep';

const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit intake form',
      description: ''
    },
    {
      number: 2,
      title: 'We do the search and curation for list of jobs',
      description: ''
    },
    {
      number: 3,
      title: 'You approve, we do the tedious part (applying)',
      description: ''
    },
    {
      number: 4,
      title: 'You get the interviews',
      description: ''
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-full px-[150px]">
        <h2 className="text-2xl font-semibold text-[#0649E7] mb-12 text-start px-4">How we work?</h2>
        <div className="flex flex-wrap justify-center">
          {steps.map((step) => (
            <ProcessStep key={step.number} number={step.number} title={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;