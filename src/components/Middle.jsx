const Middle = () => {
  return (
    <main className="px-6 mt-3h w-full">
      {/* Row */}
      <div className="py-2 max-w-md">
        <div className="flex justify-around items-center p-1 bg-[#F1F5F9] text-sm font-medium rounded-lg">
          <div className="rounded-sm py-1 px-3 bg-[#FFFFFF] text-[#020817] cursor-pointer">
            Regular
          </div>
          <div className="rounded-sm py-1 px-3 text-[#64748B] cursor-pointer">
            Quick
          </div>
          <div className="rounded-sm py-1 px-3 text-[#64748B] cursor-pointer">
            Import from ABHA
          </div>
          <div className="rounded-sm py-1 px-3 text-[#64748B] cursor-pointer">
            Scan Documents
          </div>
        </div>
      </div>

      {/* todo */}
      {/* <div></div> */}
    </main>
  );
};

export default Middle;
