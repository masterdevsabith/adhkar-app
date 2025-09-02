import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/includes/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Hero />
      </main>
    </>
  );
}
