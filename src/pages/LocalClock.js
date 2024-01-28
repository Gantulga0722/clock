import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Clock = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });
  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center">
      <div className="flex border-2 flex-col rounded-[12px] p-[50px] bg-white h-[300px] justify-center items-center">
        <p className="text-[50px] font-bold">
          {" "}
          Time : {date.toLocaleTimeString()}
        </p>
        <button
          className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
          onClick={() => router.push("/home")}
        >
          Home
        </button>
      </div>
    </div>
  );
};
export default Clock;
