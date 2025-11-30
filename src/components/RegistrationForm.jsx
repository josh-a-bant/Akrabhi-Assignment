import { FormField } from "./FormField";
import { Buttons } from "./Buttons";
import {
  IconChevronDown,
  IconAdjustmentsHorizontal,
  IconSquareCheck,
  IconTrash,
} from "@tabler/icons-react";
import { useState } from "react";

const RegistrationForm = () => {
  const [toggle, setToggle] = useState(true);
  const languages = ["Odia", "Hindi", "English"];
  const genders = ["Female", "Male", "Others"];
  const [files, setFiles] = useState(["Lorem ipsum dolor sit amet."]);

  return (
    <div className="flex flex-col gap-6">
      {/* Identification Details */}
      <section className="flex flex-col gap-4">
        <SubHeading>Identification Details</SubHeading>
        <div className="flex w-full items-center justify-between">
          {/* TODO: Add Photo */}
          {/* <div></div> */}

          {/* contact */}
          <div className="flex flex-col gap-3">
            <FormField
              placeholder={"Enter Mobile Number *"}
              className="w-full"
            />
            <div className="flex gap-3">
              <FormField placeholder={"First Name*"} />
              <FormField placeholder={"Last Name*"} />
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="gender"
              className="text-sm font-medium leading-[150%] text-[#71717A]"
            >
              Gender*
            </label>

            <Gender genders={genders} />
          </div>

          {/* age & DOB */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="age"
                className="text-sm font-medium leading-[150%] text-[#71717A]"
              >
                Age*
              </label>
              <div className="flex gap-1">
                <FormField
                  placeholder={"YY"}
                  className="w-14 text-center rounded-lg"
                />
                <FormField
                  placeholder={"MM"}
                  className="w-14 text-center rounded-lg"
                />
                <FormField
                  placeholder={"DD"}
                  className="w-14 text-center rounded-lg"
                />
              </div>
            </div>

            <p className="uppercase">or</p>

            {/* DOB */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="dob"
                className="text-sm font-medium leading-[150%] text-[#71717A]"
              >
                Date od Birth*
              </label>
              <div className="flex gap-1">
                <FormField
                  placeholder={"YY"}
                  className="w-14 text-center rounded-lg"
                />
                <FormField
                  placeholder={"MM"}
                  className="w-14 text-center rounded-lg"
                />
                <FormField
                  placeholder={"DD"}
                  className="w-14 text-center rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="flex flex-col gap-4">
        <SubHeading>Contact Details</SubHeading>
        <div className="flex flex-col gap-3 w-full">
          {/* address */}
          <div className="flex justify-between">
            <FormField placeholder={"Address Line 1*"} className="w-50" />
            <FormField placeholder={"Address Line 2*"} className="w-50" />
            <FormField placeholder={"PIN*"} className="w-25" />
            <FormField placeholder={"Select Area*"} className="w-45" />
            <FormField placeholder={"City"} className="w-39" />
            <FormField placeholder={"District*"} className="w-35" />
            <FormField placeholder={"State*"} className="w-35" />
            <FormField placeholder={"IN"} className="w-11" />
          </div>

          {/* registation details */}
          <div className="grid grid-cols-3 gap-2">
            <FormField placeholder={"Primary Registered Number*"} />
            <FormField placeholder={"Next Kin Contact No. *"} />
            <FormField placeholder={"Email"} />
          </div>

          {/* attendent details */}
          <div className="grid grid-cols-3 gap-2">
            <FormField placeholder={"Attendant Name"} />
            <FormField placeholder={"Attendant Relationship"} />
          </div>
        </div>
      </section>

      {/* KYC */}
      <section className="flex flex-col gap-4">
        <SubHeading>KYC Documents ( Optional )</SubHeading>
        <div className="flex flex-col gap-4">
          {/* doc upload */}
          <div className="flex items-center justify-between h-9">
            <div className="flex w-[402px] border border-gray-300/60 rounded-md shadow-sm">
              <Buttons className="flex items-center justify-center gap-1 py-[9px] border-r border-[#E2E8F0] bg-[#F1F5F9]">
                Doc Type
                <IconChevronDown stroke={1} className="w-4" />
              </Buttons>

              <input
                // placeholder={"TODO: Change it"}
                className="flex-1 px-4 focus:outline-none"
                readOnly
              />
            </div>

            <div>
              <div className="relative">
                <FormField
                  type="file"
                  id="identity-upload"
                  className="hidden"
                />
                <label
                  htmlFor="identity-upload"
                  className="text-sm font-medium inline-block py-2 px-4 text-gray-600 bg-white border border-[#E4E4E7] shadow-sm rounded-md cursor-pointer"
                >
                  Upload Identity Proof
                </label>
              </div>
            </div>

            <div>
              <Buttons className="relative flex items-center border gap-2 rounded-md py-2 px-4">
                <IconAdjustmentsHorizontal stroke={1} className="size-4" />
                <FormField
                  type="file"
                  id="identity-upload"
                  className="hidden"
                />
                <label
                  htmlFor="identity-upload"
                  className="inline-block text-sm font-medium text-gray-600 bg-white cursor-pointer hover:bg-gray-50 "
                >
                  Upload Address Proof
                </label>
              </Buttons>
            </div>

            <div className="flex items-center justify-center gap-2 px-2 py-1.5 cursor-pointer">
              <input
                type="checkbox"
                name="kycVerified"
                id="kycVerified"
                className="appearance-none rounded-sm border size-4 border-[#2563EB]"
              />
              <label htmlFor="kycVerified" className="text-sm text-[#020817]">
                KYC Verified
              </label>
            </div>
          </div>

          {/* upload successfull */}
          <div className="w-fit">
            <FileUpload files={files} />
          </div>
        </div>
      </section>

      {/* preferance */}
      <section className="flex flex-col gap-4">
        <SubHeading>Preferences</SubHeading>

        <div className="flex gap-7">
          <div className="flex gap-2 items-center w-[360px]">
            <div className="flex flex-col gap-1">
              <h3 className="text-xs font-medium text-[#020817] ">
                Consent for Medical Research
              </h3>
              <p className="text-xs text-[#64748B] ">
                These cookies are essential in order to use the website and use
                its features.
              </p>
            </div>
            <div>
              <ToggleSwitch toggle={toggle} setToggle={setToggle} />
            </div>
          </div>

          <div className="flex justify-between items-center w-[410px]">
            <div>
              <h3 className="text-xs font-medium text-[#020817] ">
                Communication Preferences
              </h3>
              <p className="text-xs text-[#64748B] ">
                Default Communication Language
              </p>
            </div>
            <DropdownMenu options={languages} />
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#F4F4F5] py-6 px-3.5">
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
    </div>
  );
};

const SubHeading = ({ children }) => {
  return (
    <h2 className="py-1 text-[13px] font-semibold leading-4 text-[#020817]">
      {children}
    </h2>
  );
};

const ToggleSwitch = ({ toggle, setToggle }) => {
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`w-12 h-6 p-1 rounded-full relative cursor-pointer transition-all duration-300 ease-in-out drop-shadow-sm ${
        toggle ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 ease-in-out shadow-md ${
          toggle ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

const DropdownMenu = ({ options }) => {
  return (
    <div className="text-[#020817] px-4 py-2 border rounded-md border-[#E2E8F0]">
      <select name="language" id="language">
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Gender = ({ genders }) => {
  return (
    <div className="flex rounded-md border max-w-max border-[#E5E7EB]">
      {genders.map((gender) => (
        <Buttons
          type="button"
          className="border-r-2 text-sm text-[#71717A] font-medium"
        >
          {gender}
        </Buttons>
      ))}
    </div>
  );
};

const FileUpload = ({ files }) => {
  return (
    <ul>
      {files.map((file) => (
        <li className="flex gap-6 items-center py-2">
          <div className="flex items-center gap-1">
            <span>
              <IconSquareCheck stroke={1} size={16} />
            </span>
            <p className="text-[Blue] text-sm">
              {file}{" "}
              <span className="text-[#1B1F26B8]">Uploaded Successfully</span>
            </p>
          </div>
          <IconTrash stroke={1} size={16} className="cursor-pointer" />
        </li>
      ))}
    </ul>
  );
};

export default RegistrationForm;
