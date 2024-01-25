import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center w-[1440px] mx-auto h-[100vh]">
      Home Page
    </div>
  );
}
