import projects from "@/data/projects.json"
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const Projects = () =>{
    return(
        <div>
            <h1 className="text-4xl mt-10 mb-5">My Projects</h1>
            <div className="flex space-x-5">
            {projects.map((item:Project,idx)=>{
                return (
                    <div key={idx} className="flex flex-col space-y-3 w-80 bg-slate-200 rounded-xl p-5">
                        <div className="w-70 h-50 relative">
                            <Image className="object-cover" alt="" src={`/${123}.png`} fill/>
                        </div>
                        <b>{item.title}</b>
                        <div className="flex items-center space-x-5">
                            <button className="rounded-md w-30 h-10 ring hover:cursor-pointer hover:bg-white">
                                <div className="flex flex-row justify-center space-x-2">
                                    <p>view</p>
                                    <Image alt="" src="/external-link.png" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </button>
                            <button className="hover:cursor-pointer hover:bg-white duration-200 rounded-full"><Image alt="" width={40} height={40} src="/github-mark.png" /></button>
                        </div>
                        
                        
                    </div>
                )
            })

            }
            </div>
        </div>
    )
};

export default Projects