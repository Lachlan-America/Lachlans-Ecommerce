import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover bg-[url(/background.jpg)]">
      <section className="text-center">
        <h1 className="text-[50px] font-bold backdrop-blur-xs rounded-xl p-4">Welcome to Lachlan’s Store</h1>
        <button className="bg-white p-4 mt-5 rounded-xl text-black font-bold">SHOP NOW</button>
      </section>
    </div>
  );
}
