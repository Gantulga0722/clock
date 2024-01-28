import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="flex justify-center items-center mx-auto h-[100vh] bg-[url('/clock-img.png')] bg-cover bg-center"></div>
  );
}
