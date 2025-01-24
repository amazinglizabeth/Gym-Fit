import React from "react";
import Logo from "../images/logo-name.png";
import Twitter from "../images/twitter-icon.png";
import Instagram from "../images/instagram-icon.png";
import Facebook from "../images/facebook-icon.png";

const Footer = () => {
  return (
    <div className="bg-neutral-200 py-4 pt-8 px-4 text-black">
      <div className="container mx-auto px-4">
        <img src={Logo} alt="Logo" className="w-20 mb-4" />
        <div className="flex flex-col md:flex-row items-start mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="pr-5">
              <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
              <p className=" mb-4">
                Stay in the loop with all things FitZone! Follow us on social
                media for fitness tips, motivation, and exclusive offers.
              </p>
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p className=" mb-4">
                Have questions or need assistance? Our friendly team is here to
                help! Reach out to us via our social media platforms – we're
                always happy to hear from you.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.twitter.com/amazin_lizabeth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="twitter" className="w-6" />
                </a>
                <a
                  href="https://www.instagram.com/amazing_lizabeth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="instagram" className="w-6" />
                </a>
                <a
                  href="https://wwww.facebook.com/Amazinglizabeth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="facebook" className="w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 md:w-1/3 pl-12 ml-12">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className=" space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fitness Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News and Events
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-1">
              <li>Mondays: 8:00AM-10:00PM</li>
              <li>Tuesdays: 8:00AM-10:00PM</li>
              <li>Wednesdays: 8:00AM-10:00PM</li>
              <li>Thursdays: 8:00AM-10:00PM</li>
              <li>Fridays: 8:00AM-10:00PM</li>
              <li>Saturdays: 8:00AM-10:00PM</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className=" mb-8">
          <h3 className="text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <div className="flex ">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-12 py-2 rounded-lg focus:outline-none text-black mr-3"
            />
            <button className="px-8 py-2 bg-red-500 rounded-md hover:bg-red-600 text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" pt-3 text-center font-bold">
          <p className=" text-sm">
            Copyright &copy; 2025 GymFit. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
