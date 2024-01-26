import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [minut, setMinut] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const timeChange = (event) => {
    setTime(event.target.value);
  };
  const minutChange = (event) => {
    setMinut(event.target.value);
  };
  const secondChange = (event) => {
    setSecond(event.target.value);
  };

  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / (1000 * 60)) % 60;
  const hours = Math.floor(time / (1000 * 60 * 60)) % 24;

  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center">
      <div className="flex flex-col border-2 rounded-[12px] p-[50px] bg-white gap-[30px]">
        <div className="flex w-[500px] h-[200px] border-2 rounded-[10px] items-center">
          <input
            type="number"
            value={hours.toString().padStart(2, "0")}
            onChange={timeChange}
            className=" flex justify-center items-center text-center text-[50px] font-medium  w-1/3"
          />{" "}
          <span className="text-[50px]"> : </span>
          <input
            type="number"
            value={minutes.toString().padStart(2, "0")}
            onChange={minutChange}
            className=" flex justify-center items-center text-center text-[50px] font-bold w-1/3"
          />{" "}
          <span className="text-[50px]"> : </span>
          <input
            type="number"
            value={seconds.toString().padStart(2, "0")}
            onChange={secondChange}
            className=" flex justify-center items-center text-center text-[50px] font-bold  w-1/3"
          />
        </div>
        <div className="flex justify-around">
          <button
            className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
            onClick={() => setTimerOn(true)}
          >
            Start time
          </button>
        </div>
      </div>
    </div>
  );
};
export default Timer;
