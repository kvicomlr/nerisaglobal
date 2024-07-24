import React from 'react';
import {
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSkype,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-[#021f61]  text-white ">
        <div className=" mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Nerisa Global</h4>
              <p className="text-white">
              11th Street Sinkor, Russell Avenue <br />
               Monrovia, Liberia
                <br />
                <br />
                <strong>Phone:</strong>+231 (0770) 286387 / +231 (0886) 286387 
                <br />
                <strong>Email:</strong> info@nerisaglobal.com
              </p>
            </div>

            <div className="mb-5">
              <h4 className="  pb-4">Services</h4>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight />
                <Link>General Construction</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight /> <Link>Electrical Engineering</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight /> <Link>Supply Chain Management</Link>
              </div>
              <div className="flex items-center  textwhite0 pb-4">
                <FaChevronRight />
                <Link>Institutional Capicity Development</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight />
                <Link>Feasibility Studies & Research</Link>
              </div>
              
            </div>
            <div className="mb-5">
              <h4 className="pb-4">About</h4>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight />
                <Link>Mission & Vision</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight /> <Link>Team</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight /> <Link>Terms of services</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight />
                <Link>Privacy policy</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight />
                <Link>Careers</Link>
              </div>
              <div className="flex items-center  text-white pb-4">
                <FaChevronRight />
                <Link to="">Email</Link>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-gray-900 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              Copyright <strong>Nerisa Global</strong>. All Rights
              Reserved.
            </div>
            <div>
              Site Powered by{' '}
              <a href="https://kvilr.com"  className="text-primary">
               <span className='uppercase font-bold text-blue-400'>Kanstars Vision</span>
              </a>
            </div>
          </div>
          <div className="flex items-center text-xl text-white mb-2">
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg:primary mx-1  pt-1 "
            >
              <FaFacebook />
            </Link>
            <a
              href="https://www.instagram.com/amaratechitsolutions/" 
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/amaratechit" 
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UC5s62q-8DEAvxsb4ScqPZng" 
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1   pt-1"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaSkype />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
