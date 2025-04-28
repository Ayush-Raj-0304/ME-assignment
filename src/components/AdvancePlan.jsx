import Button from './Button';

const AdvancePlan = () => {
  const features = [
    'Everything in Plus',
    'Custom Resume + Cover Letter',
    '50-75 customized application assurance',
    'Priority 1 applicant'
  ];
  
  return (
    <section className="py-8 px-6 bg-white ">
      <div className="mx-auto max-w-full px-[120px] rounded-3xl">
        <div className="bg-[#0649E7] rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-white text-3xl font-semibold">Advance</h3>
            <p className="text-white text-md mb-4">Top-Tier support for ambitious hunters</p>
            <hr className="w-full h-0.5 bg-blue-600 border-[#BCBCBC] mb-4" />
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-white ">
                  <img className='pr-2 object-none' src="./src/assets/tick.png" alt="" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:mt-0 text-center">
            <div className="mb-[100px] object-top-left">
              <span className="text-white text-3xl font-black">$150</span>
              <span className="text-white">/week</span>
            </div>
            <Button text="Get Started →" isPrimary={false} className={'font-bold text-[#0649E7]'}/>
          </div>
        </div>
      </div>
      <hr className="max-w-[79vw] my-[100px] mx-[100px] mb-0 bg-[#BCBCBC] border-[#BCBCBC] " />
    </section>
  );
};

export default AdvancePlan;