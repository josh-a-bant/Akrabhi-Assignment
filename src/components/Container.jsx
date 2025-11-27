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
            className={`relative flex flex-col items-center justify-center w-44 h-32 rounded-xl border-2 cursor-pointer transition-all ${
              selectedOption === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
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

            <div className="flex flex-col items-center gap-3">
              {option.icon === "card" ? (
                <IconCreditCardFilled />
              ) : (
                <IconBrandPaypalFilled />
              )}

              <span
                className={`text-sm font-medium ${
                  selectedOption === option.id
                    ? "text-blue-700"
                    : "text-gray-700"
                }`}
              >
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
