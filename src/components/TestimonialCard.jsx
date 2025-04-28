const TestimonialCard = ({ text, icon }) => {
    return (
      <div className="border border-[#0649E7] rounded-3xl overflow-hidden">
        <div className="h-32  bg-gray-50 flex items-center justify-center">
          <img src="/play.png" alt="" />
        </div>
        <div className="p-6 bg-[#0649E7] text-white relative">
          <p className="text-sm mb-6">{text}</p>
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0649E7] text-3xl pb-1">
            {icon}
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  