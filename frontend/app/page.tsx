import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import TrainingActivities from "@/components/TrainingActivities";
export default function Home() {


  return (
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Navbar/>
        <About/>
        <Projects/>
        <TrainingActivities/>
        <Certifications/>
      </main>
  );
}
