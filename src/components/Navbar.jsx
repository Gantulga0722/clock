import { Router } from "next/router";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-around  border-b p-[20px] bg-[#CFBA77] text-white fixed w-[100%]">
      <button
        className="flex bg-[#1D0D05] p-2 rounded-[12px]"
        onClick={() => router.push("/localClock")}
      >
        Clock
      </button>
      <button
        className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
        onClick={() => router.push("/stopWatch")}
      >
        Stop Watch
      </button>
      <button
        className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white"
        onClick={() => router.push("/timer")}
      >
        Timer
      </button>
    </div>
  );
};
export default Navbar;
