import Button from './Button';

const ServiceCard = ({ title, subtitle, price, oneTime, features }) => {
  return (
    <div className="border border-2 border-[#0649E7] rounded-3xl p-6 relative">
      <h3 className="text-[#0649E7] font-bold mb-1">{title}</h3>
      <p className="text-[#0649E7] text-sm mb-4">{subtitle}</p>
      <div className="mb-6">
        <span className="text-2xl font-bold text-[#0649E7]">${price}</span>
        <span className="text-[#0649E7]">{oneTime ? ' one time' : '/week'}</span>
      </div>
      <ul className="mb-[11vh] space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <img className='pr-2 object-none' src="src/assets/tick.png" alt="" />
            <span className="text-sm text-[#0649E7]">{feature}</span>
          </li>
        ))}
      </ul>
      <Button text="Get Started" isPrimary={true} className={'bg-[#0649E7] absolute bottom-5 left-5 '} />
    </div>
  );
};

export default ServiceCard;