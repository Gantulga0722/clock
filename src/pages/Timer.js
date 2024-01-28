import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Timer = () => {
  const router = useRouter();
  const [time, setTime] = useState("00");
  const [minut, setMinut] = useState("00");
  const [second, setSecond] = useState("00");
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;
    let intervalTime;
    let intervalMinut;
    let intervalSecond;
    const audio = new Audio(
      "/Alarm-Fast-High-Pitch-A2-www.fesliyanstudios.com.mp3"
    );

    if (timerOn) {
      if (second >= 0 || minut >= 0 || time >= 0) {
        if (time >= 0) {
          intervalTime = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 3600000);
        } else {
          clearInterval(intervalTime);
        }
        if (minut >= 0) {
          intervalMinut = setInterval(() => {
            setMinut((prevMin) => prevMin - 1);
          }, 60000);
        } else {
          clearInterval(intervalMinut);
        }
        if (second >= 0) {
          intervalSecond = setInterval(() => {
            setSecond((prevSec) => prevSec - 1);
          }, 1000);
        } else {
          clearInterval(intervalSecond);
        }
      } else {
        function playsong() {
          audio.play;
        }
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const timeChange = (time) => {
    setTime(time.target.value);
  };
  const minutChange = (minut) => {
    setMinut(minut.target.value);
  };
  const secondChange = (second) => {
    setSecond(second.target.value);
  };

  const resetTimer = () => {
    setTime("00");
    setMinut("00");
    setSecond("00");
    setTimerOn(false);
  };

  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center">
      <div className="flex flex-col border-2 rounded-[12px] p-[50px] bg-white gap-[30px]">
        <div className="flex w-[500px] h-[200px] border-2 rounded-[10px] items-center">
          <input
            type="number"
            value={time}
            onChange={timeChange}
            className=" flex justify-center items-center text-center text-[50px] font-bold  w-1/3"
          />{" "}
          <span className="text-[50px]"> : </span>
          <input
            type="number"
            value={minut}
            onChange={minutChange}
            className=" flex justify-center items-center text-center text-[50px] font-bold w-1/3"
          />{" "}
          <span className="text-[50px]"> : </span>
          <input
            type="number"
            value={second}
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
          <button
            className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
            onClick={() => resetTimer()}
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
};
export default Timer;
