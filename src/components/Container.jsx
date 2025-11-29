import { useState } from "react";
import {
  IconBrandPaypalFilled,
  IconCreditCardFilled,
} from "@tabler/icons-react";
const Container = () => {
  const [selectedOption, setSelectedOption] = useState("view-profile");

  const options = [
    { id: "view-profile", label: "View Profile", icon: "card" },
    { id: "print-receipt", label: "Print Receipt", icon: "paypal" },
    { id: "print-uhid-1", label: "Print UHID Card", icon: "paypal" },
    { id: "print-uhid-2", label: "Print UHID Card", icon: "paypal" },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-4 flex-wrap">
        {options.map((option) => (
          <label
            key={option.id}
            className={`relative p-4 rounded-md border-2 cursor-pointer transition-all ${
              selectedOption === option.id
                ? "border-blue-500"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="card-option"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="absolute opacity-0"
            />

            <div className="flex flex-col w-[123px] h-20 items-center justify-center gap-3">
              {option.icon === "card" ? (
                <IconCreditCardFilled />
              ) : (
                <IconBrandPaypalFilled />
              )}

              <span className={`text-sm leading-3 text-[#020817]`}>
                {option.label}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Container;
