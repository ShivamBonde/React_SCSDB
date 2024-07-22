import React from "react";

const Loading = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black ">
      <div className="absolute  w-full h-full z-20"></div>
      <iframe
        src="https://giphy.com/embed/RgzryV9nRCMHPVVXPV"
        
        className=" w-[50%] h-[50%] object-cover z-10"
      ></iframe>
    </div>
  );
};

export default Loading;
