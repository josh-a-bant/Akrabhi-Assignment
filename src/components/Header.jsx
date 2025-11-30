import { IconX } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[76px] border border-[#E4E4E7] w-full">
      <div className=" flex gap-0.5 text-lg font-medium text-[#09090B]">
        <Navbar to="/">New Patient Registration</Navbar>
        <Navbar className={"flex gap-2 items-center"} to="/page-not-found">
          <span className="rounded-xl size-6 bg-[#007AFF] flex justify-center items-center text-[11px] text-[#FFFFFF]">
            1
          </span>
          <p>Incoming ABHA Consent</p>
        </Navbar>
      </div>

      <div className="bg-[#F4F4F5] rounded-xs mr-5 cursor-pointer size-10 flex justify-center items-center">
        <IconX stroke={1} className="size-6" />
      </div>
    </header>
  );
};

const Navbar = ({ children, className, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-6 px-9
       ${
         isActive ? "border-b-2 border-[#AF52DE] bg-[#F1F5F9CC]" : ""
       } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default Header;
