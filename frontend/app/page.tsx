import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import TrainingCertifications from "@/components/TrainingCertifications";
import Timeline from "@/components/Timeline";
import Worlds from "@/components/Worlds";
export default function Home() {


  return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-black sm:items-start">
        <Navbar/>
        <About/>
        <Timeline/>
        <Worlds />
        <Projects/>
        <TrainingCertifications/>
      </main>
  );
}
