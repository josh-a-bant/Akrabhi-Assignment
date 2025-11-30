import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Middle = () => {
  return (
    <main className="mt-6 w-full px-6 flex flex-col gap-6">
      {/* Row */}
      <Row />

      {/* todo */}
      <div>
        <RegistrationForm />
      </div>
    </main>
  );
};

const Row = () => {
  const lists = ["Regural", "Quick", "Import from ABHA", "  Scan Documents"];

  const [select, setSelect] = useState("Regural");

  return (
    <div className="flex justify-around items-center py-2 w-[472px] bg-[#F1F5F9] text-sm font-medium rounded-lg relative">
      {lists.map((list) => (
        <label
          key={list}
          className={`rounded-sm py-1 px-3 text-[#020817] cursor-pointer ${
            select === list ? "bg-[#FFFFFF]" : ""
          } `}
        >
          <input
            type="radio"
            name="row-option"
            value={list}
            checked={select === list}
            onChange={(e) => setSelect(e.target.value)}
            className="absolute opacity-0"
          />
          {list}
        </label>
      ))}
    </div>
  );
};
export default Middle;
