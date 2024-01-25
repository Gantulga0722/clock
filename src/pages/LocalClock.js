import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });
  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center">
      <div className="flex border-2 rounded-[12px] p-[50px] bg-white h-[300px] justify-center items-center">
        <p className="text-[50px] font-bold">
          {" "}
          Time : {date.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};
export default Clock;
