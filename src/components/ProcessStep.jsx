const ProcessStep = ({ number, title }) => {
  return (
    <div className="w-full md:w-1/4 mb-10 flex flex-col items-start text-left px-8">
      <div className="flex items-center w-full mb-2">
        <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-[#000000] text-3xl pb-1">
          {number}
        </div>
      </div>
      <hr className="w-full h-0.5 bg-blue-600 border-none mb-4" />
      <p className="text-blue-600 font-medium break-words">
        {title}
      </p>
    </div>
  );
};

export default ProcessStep;
