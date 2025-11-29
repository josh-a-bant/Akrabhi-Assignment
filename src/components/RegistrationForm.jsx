import { FormField } from "./FormField";
import { Buttons } from "./Buttons";
import {
  IconChevronDown,
  IconAdjustmentsHorizontal,
  IconSquareCheck,
  IconTrash,
} from "@tabler/icons-react";
// import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

const RegistrationForm = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Identification Details */}
      <section className="flex flex-col gap-4">
        <SubHeading>Identification Details</SubHeading>
        <div className="flex w-full gap-2 items-center justify-between">
          {/* TODO: Add Photo */}
          {/* <div></div> */}

          {/* contact */}
          <div className="flex gap-3 flex-col">
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
          <div>
            <label htmlFor="gender">Gender*</label>
            <div className="flex rounded border-2 max-w-max border-gray-300/60">
              <Buttons type="button" className="border-r-2">
                Female
              </Buttons>
              <Buttons type="button" className="border-r-2">
                Male
              </Buttons>
              <Buttons type="button">Others</Buttons>
            </div>
          </div>

          {/* age & DOB */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="age">Age*</label>
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
              <label htmlFor="age">Date od Birth*</label>
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
            <div className="flex w-[402px] border border-gray-300/60 rounded-md">
              <Buttons className="flex items-center justify-center gap-1 border-r ">
                Doc Type
                <IconChevronDown stroke={1} className="w-4" />
              </Buttons>
              <input
                // placeholder={"TODO: Change it"}
                className="flex-1 px-3 py-1 focus:outline-none"
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
                  className=" inline-block px-3 py-1 text-gray-600 bg-white border border-gray-300 rounded-md cursor-pointer"
                >
                  Upload Identity Proof
                </label>
              </div>
            </div>

            <div>
              <Buttons className="relative flex items-center border gap-2 rounded-md">
                <IconAdjustmentsHorizontal stroke={1} />
                <FormField
                  type="file"
                  id="identity-upload"
                  className="hidden"
                />
                <label
                  htmlFor="identity-upload"
                  className="inline-block text-gray-600 bg-white cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                  Upload Address Proof
                </label>
              </Buttons>
            </div>

            <div className="flex items-center rounded-md justify-center border gap-2 px-3 py-1 focus:outline-none focus:border-gray-500 border-gray-300/50 cursor-pointer">
              <input
                type="checkbox"
                name="kycVerified"
                id="kycVerified"
                className="rounded-full"
              />
              <label htmlFor="kycVerified">KYC Verified</label>
            </div>
          </div>

          {/* upload successfull */}
          <div className="w-fit">
            <div className="flex gap-6 items-center py-2">
              <div className="flex items-center gap-1 justify-between">
                <span>
                  <IconSquareCheck stroke={1} size={16} />
                </span>
                <p className="text-[Blue] text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <IconTrash stroke={1} size={16} />
            </div>
            <div className="flex gap-6 items-center py-2">
              <div className="flex items-center gap-1 justify-between">
                <span>
                  <IconSquareCheck stroke={1} size={16} />
                </span>
                <p className="text-[Blue] text-sm ">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <IconTrash stroke={1} size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* preferance */}
      <section>
        <SubHeading>Preferences</SubHeading>

        <div>
          
        </div>
      </section>
    </div>
  );
};

const SubHeading = ({ children }) => {
  return <h2>{children}</h2>;
};

export default RegistrationForm;
