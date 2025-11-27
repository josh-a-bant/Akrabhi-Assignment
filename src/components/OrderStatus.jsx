import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import Container from "./Container";

const OrderStatus = () => {
  return (
    <div className="flex flex-col justify-between gap-10">
      <div className="border border-dashed rounded-md border-[#E2E8F0] w-[1200px] m-auto mt-6 p-4 flex flex-col gap-2">
        <h3 className="font-semibold leading-4 text-#71717A">
          Service Order Status
        </h3>

        <h2 className="flex gap-1.5 text-2xl items-center leading-5 text-[#09090B]">
          Patient Registration Succesfull.
          <span className="text-[#34C759]">
            <IconRosetteDiscountCheckFilled size={40} />
          </span>
        </h2>

        <p className="text-lg text-[#71717A]">
          UHID No : <span className="font-bold">IIGH-3828281</span>
        </p>

        <p className="text-lg text-[#71717A]">
          Bill No : <span className="font-bold">FB271181928</span>
        </p>

        <p className="text-[11px] text-[#71717A]">
          Created at 23 January 2025 09:94:47 by{" "}
          <span className="font-medium text-[12px]">Abhijeet Das</span>
        </p>

        <p className="text-[11px] text-[#71717A]">
          Transaction Ref No #292921819929
        </p>
      </div>

      <Container />
    </div>
  );
};

export default OrderStatus;
