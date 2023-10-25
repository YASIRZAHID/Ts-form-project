import React from "react";

const Header = ({
  headerText,
  headerDescription,
}: {
  headerText: string;
  headerDescription: string;
}) => {
  return (
    <div className="pb-10 absolute text-center items-center justify-center flex flex-col w-[100%] h-[30%]">
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">
        {headerText}
      </h2>
      <h2 className="text-xl text-[#817DA4] mb-4 text-center">
        {headerDescription}
      </h2>
    </div>
  );
};

export default Header;
