const TeamMember = ({ name, image, bio }) => {
  return (
    <div className="flex md:flex-row items-center md:items-start">
      <div className="basis-1/5">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="basis-3/5 p-5">
        <p className="text-white text-[9px]">
          <span className="font-semibold">{name}</span> {bio}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
