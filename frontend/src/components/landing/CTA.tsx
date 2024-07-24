
import landing from "../../assets/landing.jpeg"
const CTA = () => {
  return (
    <div className=" min-h-[427px] bg-[#cdcdcd] grid grid-cols-1 md:grid-cols-2 rounded-sm">
      <div className="p-8 sm:p-8 md:p-11">
        <h1 className="text-xl  md:text-1xl font-extrabold font-sans ">
          Nerisa Global
        </h1>

        <p className="font-sans tracking-wide pt-5  md:pt-7 text-lg font-medium">
        For over 18 years, we have been delivering targeted business
solutions using the latest information technologies in delivering
projects of all kinds.
Key to NERISA’s successes is the maintenance of a close working
relationship with our clients through endurances to the best possible
solutions to their needs and help them maximize their benefits. Our
platform and vendor independent approach allows best of breed
technologies to develop solutions grounds up or scale up existing
systems. 
        </p>

        <div className="">
          <button className="text-white bg-[#021f61] rounded-md p-4 text-lg font-extrabold uppercase font-sans mt-5">
            Request A Meeting
          </button>
        </div>
      </div>

      <div className="item-center justify-center ">
        <img
          src={landing}
          alt="governor-s-mansion-montgomery-alabama-grand-staircase"
          className=" w-full h-full block object-cover"
        />
      </div>
    </div>
  );
};

export default CTA;
