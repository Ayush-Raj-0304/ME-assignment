const Button = ({ text, isPrimary = true, onClick ,className }) => {
    return (
      <button 
        className={` ${className} px-4 py-2 rounded-full ${isPrimary ? 'bg-[#0649E7] text-[#FEFEFE] ' : 'bg-[#FEFEFE] text-[#022183] hover:bg-[#022183] hover:text-[#FEFEFE]'}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;