import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function StopWatch() {
  const router = useRouter();
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 4);
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const milliseconds = time % 100;
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / (1000 * 60)) % 60;
  const hours = Math.floor(time / (1000 * 60 * 60)) % 24;

  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center">
      <div className="flex flex-col border-2 rounded-[12px] p-[50px] bg-white gap-[30px]">
        <div className="flex border-2 rounded-[12px] p-[50px] bg-white gap-[30px] w-[500px] h-[200px] justify-center items-center">
          <h1 className="text-[50px] font-bold">
            {" "}
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </h1>
        </div>
        <div className="flex justify-around">
          <button
            className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
            onClick={() => setTimerOn(true)}
          >
            Start
          </button>
          <button
            className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
            onClick={() => setTimerOn(false)}
          >
            Stop
          </button>
          <button
            className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
            onClick={() => setTime(0)}
          >
            Reset
          </button>
          <button
            className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
            onClick={() => router.push("/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
