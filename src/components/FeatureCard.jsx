const FeatureCard = ({ icon, title, description }) => {  
    return (
      <div className="border border-[#022183] border-2 rounded-3xl text-start text-2xl">
        <div className="p-6"><img src={icon} alt="" /></div>
        <h3 className="font-semibold text-[#022183] mb-2 p-6">{title}</h3>
        <p className="text-[#022183] text-sm pb-6 pr-6 pl-6">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  