import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F4F4F5] py-6 px-3.5 absolute bottom-0">
      <div className="flex items-center justify-between text-sm">
        <div className="font-semibold leading-4">
          Registration Charges : 200
        </div>

        <div className="flex gap-4 leading-5">
          <button className="bg-[#2563EB] text-[#F8FAFC] py-2 px-4 rounded-md shadow-sm font-medium cursor-pointer">
            Collect Payment & Register
          </button>

          <button className="bg-[#F1F5F9] text-[#0F172A] py-2 px-4 rounded-md shadow-sm font-medium cursor-pointer ">
            Cancel
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
