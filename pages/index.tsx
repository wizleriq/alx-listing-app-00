import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <h1 className=" text-center bg-green-400 w-[200px] h-[80px] flex justify-center items-center mx-auto">Wisdom</h1>
    </div>
  );
}
