import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import TrainingActivities from "@/components/TrainingActivities";
import Timeline from "@/components/Timeline";
export default function Home() {


  return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Navbar/>
        <About/>
        <Timeline/>
        <Projects/>
        <TrainingActivities/>
        <Certifications/>
      </main>
  );
}
