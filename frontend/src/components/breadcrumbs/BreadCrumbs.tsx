import { FaArrowRight } from "react-icons/fa";

const BreadCrumbs = () => {
  return (
    <section className="bg-[#021f61] text-white w-full h-14 flex items-center justify-between px-7">
      <div className="flex space-x-7 font-bold item">
        <a href="">Why choose Nerisa Global</a>
                <a href="">FAQ</a>
      </div>

      <div className="flex items-center space-x-3 font-bold">
        <a href="">CONTACT US</a>
        <FaArrowRight />
      </div>
    </section>
  );
};

export default BreadCrumbs;
