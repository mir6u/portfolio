import Image from "next/image";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between pb-24 lg:pb-4">
        <Header />
      </main>
    </>
  );
}
