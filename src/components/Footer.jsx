

const Footer = () => {
  return (
    <footer className="bg-[#0649E7] bg-cover text-[#0649E7] px-0 mx-0">
      <div className="bg-white max-w-full mx-auto ">
          <div className="mb-6 md:mb-0 px-10">
            <img src="/footerLogo.png" alt="" />
            <hr className="w-1/5 h-0.5 bg-blue-600 border-[#BCBCBC] m-5 ml-0 " />
          </div>
        <div className="flex flex-col md:flex-row justify-between p-6 pl-0">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <div>
              <h4 className="font-bold mb-2">Address</h4>
              <p className=" text-sm">
                123 Market St, Ste 4567<br />
                San Francisco, CA 94105
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Email</h4>
              <p className=" text-sm">hello@moduleengine.co</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Telephone</h4>
              <p className=" text-sm">555-555-5555</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2 ml-2 ">Social</h4>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-white font-black border-2 border-[#0649E7] text-[#0649E7] flex items-center justify-center pb-1 ">in</div>
              <div className="w-8 h-8 rounded-full bg-white font-black border-2 border-[#0649E7] text-[#0649E7] flex items-center justify-center pb-1">f</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-start text-sm text-[#FEFEFE] bg-[#0649E7] bg-cover p-6">
          <p className="Relative">© 2025 ModuleEngine LLC</p>
          <div className="relative">
            <a href="#" className=" mr-4">Terms & Conditions</a>
            <a href="#" className="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;