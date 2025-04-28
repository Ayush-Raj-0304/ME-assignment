import Button from './Button';

const PlanCard = ({ name, price, features, isPromo, isPopular }) => {
  return (
    <div className={` relative font-semibold border border-2 rounded-3xl border-[#0649E7] ${isPopular ? 'bg-[#F8FAFF]' : ''} p-6 relative`}>
      {isPopular && (
        <div className="absolute border border-1 border-[#0649E7] top-4 right-4 bg-[#EBF1FF] text-[#0649E7] text-xs px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      {isPromo && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
          Promo
        </div>
      )}
      <h3 className="font-bold text-[#0649E7] mb-4">{name}</h3>
      <div className="mb-6">
        <span className="text-2xl text-[#0649E7] font-bold">${price}</span>
        <span className="text-[#0649E7]">/week</span>
      </div>
      <ul className="mb-6 space-y-2 mb-[11vh]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <img className='pr-2 object-none' src="/tick.png" alt="" />
            <span className="text-sm text-[#0649E7] text-md">{feature}</span>
          </li>
        ))}
      </ul>
      <Button text="Get Started" isPrimary={true} className={'bg-[#0649E7] absolute bottom-6 left-6'} />
    </div>
  );
};

export default PlanCard;