import React from "react";

const Notfound = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black ">
      <div className="absolute  w-full h-full z-10"></div>

      <iframe
        src="https://giphy.com/embed/YyKPbc5OOTSQE"
        className=" w-[50%] h-[50%] object-cover z-1"
      ></iframe>
    </div>
  );
};

export default Notfound;
