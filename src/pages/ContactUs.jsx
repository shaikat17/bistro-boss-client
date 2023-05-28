import PageCover from "../components/shared/PageCover";
import TitleSection from "../components/shared/TitleSection";
import banner from "../assets/contact/banner.jpg";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <PageCover
        img={banner}
        Title="Contact Us"
        SubTitle="would you like to try a dish?"
      />
      <TitleSection Title="Our Location" subTitle="Visit Us" />
      <div className="flex w-3/5 mx-auto gap-4 mb-5">
        <div className="w-50 text-center mx-auto flex flex-col items-center">
          <div className="bg-[#D1A054] w-full flex items-center justify-center py-3 text-white">
            <FaPhone />
          </div>
          <div className="border border-t-0 p-4 w-full h-36">
            <div className="bg-gray-200 rounded p-4 h-full">
              <h3 className="font-semibold uppercase">Phone</h3>
              <p className="font-thin">+880 1XXXX XXXXX</p>
            </div>
          </div>
        </div>
        <div className="w-50 text-center mx-auto flex flex-col items-center">
          <div className="bg-[#D1A054] w-full flex items-center justify-center py-3 text-white">
            <FaMapMarkerAlt />
          </div>
          <div className="border border-t-0 p-4 w-full h-36">
            <div className="bg-gray-200 rounded p-4 h-full">
              <h3 className="font-semibold uppercase">Address</h3>
              <p className="font-thin">+880 1XXXX XXXXX</p>
            </div>
          </div>
        </div>
        <div className="w-50 text-center mx-auto flex flex-col items-center">
          <div className="bg-[#D1A054] w-full flex items-center justify-center py-3 text-white">
            <FaClock />
          </div>
          <div className="border border-t-0 p-4 w-full h-36">
            <div className="bg-gray-200 rounded p-4 h-full">
              <h3 className="font-semibold uppercase">Working Hours</h3>
              <p className="font-thin">Mon - Fri: 08:00 - 22:00</p>
              <p className="font-thin">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
      <TitleSection subTitle="Send Us a Message" Title="Contact Form" />
      <div className="bg-gray-200 p-10 grid grid-cols-2 gap-4 mx-10 place-items-center">
      <div className="form-control w-full">
  <label className="label">
    Enter Your Name
  </label>
  <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
</div>
<div className="form-control w-full">
  <label className="label">
    Enter Your Email
  </label>
  <input type="Email" placeholder="Enter Your Email" className="input input-bordered w-full" />
</div>
<div className="form-control w-full col-span-2">
  <label className="label">
    Enter Your Phone No
  </label>
  <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
</div>
<div className="form-control col-span-2 w-full">
  <label className="label">
    Enter Your Message
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Enter Your Message"></textarea>
</div>
<button className="bg-gradient-to-r from-[#D1A054] to-orange-200 p-2 rounded col-span-2">Send Message</button>
      </div>
    </>
  );
};

export default ContactUs;
