import { IconX } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center min-h-[76px] border-b border-[#E4E4E7] w-full">
      <div className=" flex gap-0.5 text-lg font-medium text-[#09090B]">
        <div className="py-6 px-9 border-b-2 border-[#AF52DE] bg-[#F1F5F9CC]">
          New Patient Registration
        </div>
        <div className="py-6 px-9 flex gap-2 text-lg items-center">
          <span className="rounded-xl size-6 bg-[#007AFF] flex justify-center items-center text-[#FFFFFF]">
            1
          </span>
          Incoming ABHA Consent
        </div>
      </div>
      <div className="p-2 bg-[#F4F4F5] rounded-xs mr-5 cursor-pointer">
        <IconX stroke={1} className="" />
      </div>
    </header>
  );
};

export default Header;
