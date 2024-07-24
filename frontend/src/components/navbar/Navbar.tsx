import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white h-16 border-b-2 flex items-center justify-between px-7">
      <div className="">
        <img src={logo} alt="logo" className="w-16" />
      </div>

      <nav className=" flex space-x-7 text-black font-bold">
        <Link to="/">Home</Link>
        <Link to="/job-listing">Services</Link>
        <Link to="/job-listing">Partners</Link>
        <Link to="/job-listing">Projects</Link>
        <Link to="/job-listing">Company</Link>
        
      </nav>
    </header>
  );
};

export default Navbar;
