const Timer = () => {
  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center">
      <div className="flex flex-col border-2 rounded-[12px] p-[50px] bg-white gap-[30px]">
        <div className="flex w-[500px] h-[300px] border-2 rounded-[10px]"></div>
        <div className="flex justify-around">
          <button className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white">
            Start time
          </button>
          <button className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white">
            Stop time
          </button>
          <button className="flex bg-[#1D0D05] p-2 rounded-[12px] text-white">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Timer;
