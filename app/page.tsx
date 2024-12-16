import About from "@/components/About";
import Archive from "@/components/Archive";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Header from "@/components/share/Header";

export default function Home() {
  return (
    <div className="text-black-bg dark:bg-black-bg dark:text-white mb-10 pt-5">
      <Header />
      <About />
      <Experience />
      <Project />
      <Archive/>
    </div>
  );
}
