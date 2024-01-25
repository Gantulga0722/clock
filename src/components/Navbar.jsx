import { Router } from "next/router";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="flex bg-red-300"
        onClick={() => router.push("/localClock")}
      >
        Clock
      </button>
      <button
        className="flex bg-red-300"
        onClick={() => router.push("/stopWatch")}
      >
        Stop Watch
      </button>
      <button className="flex bg-red-300" onClick={() => router.push("/timer")}>
        Timer
      </button>
    </div>
  );
};
export default Navbar;
