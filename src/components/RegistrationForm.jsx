import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { FormField } from "./FormField";
import { Buttons } from "./Buttons";

import {
  IconChevronDown,
  IconAdjustmentsHorizontal,
  IconSquareCheck,
  IconTrash,
} from "@tabler/icons-react";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    control,
    // formState: { errors },
  } = useForm();

  const [toggle, setToggle] = useState(false);
  const [files, setFiles] = useState(["Lorem ipsum dolor sit amet."]);
  const [gender, setGender] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");

  const languages = ["Odia", "Hindi", "English"];
  const genders = ["Female", "Male", "Others"];
  const docTypes = ["Aadhar Card", "PAN Card", "Driving Licence", "Passport"];

  const handleSelect = (doc) => {
    setSelectedDoc(doc);
    setIsOpen(false);
  };

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
              register={register}
              name={"number"}
            />
            <div className="flex gap-3">
              <FormField
                placeholder={"First Name*"}
                register={register}
                name={"firstName"}
              />
              <FormField
                placeholder={"Last Name*"}
                register={register}
                name={"lastName"}
              />
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

            <Gender
              genders={genders}
              gender={gender}
              setGender={setGender}
              register={register}
              name={"gender"}
            />
          </div>

          {/* age & DOB */}
          <div className="flex items-center gap-4">
            {/* age */}
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
                  className="w-17 text-center rounded-lg"
                  register={register}
                  name={"ageYY"}
                />
                <FormField
                  placeholder={"MM"}
                  className="w-14 text-center rounded-lg"
                  register={register}
                  name={"ageMM"}
                />
                <FormField
                  placeholder={"DD"}
                  className="w-14 text-center rounded-lg"
                  register={register}
                  name={"ageDD"}
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
                  className="w-17 text-center rounded-lg"
                  register={register}
                  name={"dobYY"}
                />
                <FormField
                  placeholder={"MM"}
                  className="w-14 text-center rounded-lg"
                  register={register}
                  name={"dobMM"}
                />
                <FormField
                  placeholder={"DD"}
                  className="w-14 text-center rounded-lg"
                  register={register}
                  name={"dobDD"}
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
            <FormField
              placeholder={"Address Line 1*"}
              className="w-50"
              register={register}
              name={"add1"}
            />
            <FormField
              placeholder={"Address Line 2*"}
              className="w-50"
              register={register}
              name={"add2"}
            />
            <FormField
              placeholder={"PIN*"}
              className="w-25"
              register={register}
              name={"pin"}
            />
            <FormField
              placeholder={"Select Area*"}
              className="w-45"
              register={register}
              name={"area"}
            />
            <FormField
              placeholder={"City"}
              className="w-39"
              register={register}
              name={"city"}
            />
            <FormField
              placeholder={"District*"}
              className="w-35"
              register={register}
              name={"district"}
            />
            <FormField
              placeholder={"State*"}
              className="w-35"
              register={register}
              name={"state"}
            />
            <FormField
              placeholder={"IN"}
              className="w-11"
              register={register}
              name={"in"}
            />
          </div>

          {/* registation details */}
          <div className="grid grid-cols-3 gap-2">
            <FormField
              placeholder={"Primary Registered Number*"}
              register={register}
              name={"regNumber"}
            />
            <FormField
              placeholder={"Next Kin Contact No. *"}
              register={register}
              name={"konContact"}
            />
            <FormField
              placeholder={"Email"}
              register={register}
              name={"email"}
            />
          </div>

          {/* attendent details */}
          <div className="grid grid-cols-3 gap-2">
            <FormField
              placeholder={"Attendant Name"}
              register={register}
              name={"attendantName"}
            />
            <FormField
              placeholder={"Attendant Relationship"}
              register={register}
              name={"attedantRel"}
            />
          </div>
        </div>
      </section>

      {/* KYC */}
      <section className="flex flex-col gap-4">
        <SubHeading>KYC Documents ( Optional )</SubHeading>
        <div className="flex flex-col gap-4">
          {/* doc upload */}
          <div className="flex items-center justify-between h-9">
            <div className="flex w-[402px] border border-gray-300/60 rounded-md shadow-sm relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-1 py-[9px] px-2 border-[#E2E8F0] bg-[#F1F5F9]"
              >
                <span className="text-sm font-medium text-[#09090B]">
                  Doc Type
                </span>

                <IconChevronDown
                  stroke={1}
                  className={`w-6 text-gray-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute left-0 top-full w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                  {docTypes.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelect(doc)}
                      className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {doc}
                    </button>
                  ))}
                </div>
              )}

              <input
                type="text"
                value={selectedDoc}
                readOnly
                className="flex-1 px-4 focus:outline-none"
              />
            </div>

            <div>
              <div className="relative">
                <FormField
                  type="file"
                  id="identity-upload"
                  className="hidden"
                  register={register}
                  name={"identityProof"}
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
                  id="address-upload"
                  className="hidden"
                  register={register}
                  name={"addressProof"}
                />
                <label
                  htmlFor="address-upload"
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
                className="rounded-sm border size-4 border-[#2563EB]"
                {...register("kycVerified")}
              />
              <label
                htmlFor="kycVerified"
                className="text-sm text-[#020817] cursor-pointer"
              >
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
            <DropdownMenu
              options={languages}
              register={register}
              name={"language"}
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between text-sm w-full bg-[#F4F4F5] py-6 px-3.5 ">
        <div className="font-semibold leading-4">
          Registration Charges : 200
        </div>

        <div className="flex gap-4 leading-5">
          <NavLink
            to="/order-status"
            className="bg-[#2563EB] text-[#F8FAFC] py-2 px-4 rounded-md shadow-sm font-medium cursor-pointer"
          >
            Collect Payment & Register
          </NavLink>

          <button className="bg-[#F1F5F9] text-[#0F172A] py-2 px-4 rounded-md shadow-sm font-medium cursor-pointer ">
            Cancel
          </button>
        </div>
      </div>

      <DevTool control={control} />
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

const DropdownMenu = ({ options, register, name }) => {
  return (
    <div className="text-[#020817] px-4 py-2 border rounded-md border-[#E2E8F0]">
      <select id="language" {...(register && name ? register(name) : {})}>
        {options.map((option) => (
          <option value={option} key={option} selected={option === "Odia"}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Gender = ({ genders, name, register, gender, setGender }) => {
  return (
    <div className="flex rounded-md border max-w-max border-[#E5E7EB] overflow-hidden">
      {genders.map((item) => (
        <label
          key={item}
          type="button"
          className={`border-r text-sm text-[#71717A] font-medium cursor-pointer py-1.5 px-3 border-[#E5E7EB] ${
            gender === item ? "bg-[#F1F5F9]" : ""
          }`}
        >
          <input
            type="radio"
            value={item}
            checked={gender === item}
            onChange={(e) => setGender(e.target.value)}
            className="absolute opacity-0"
            name={name}
            {...(register && name ? register(name) : {})}
          />
          <div>{item}</div>
        </label>
      ))}
    </div>
  );
};

const FileUpload = ({ files }) => {
  return (
    <ul>
      {files.map((file) => (
        <li key={file} className="flex gap-6 items-center py-2">
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
