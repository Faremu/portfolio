import Image from "next/image";
import certifications from "@/data/certifications.json"

type Certifications = {
    id:number;
    title:string;
    link:string;
}

const Certifications = () =>{
    return(
        <div id="Certifications">
            <h1 className="text-4xl mt-10 mb-5">Certifications & Badges</h1>
            <div className="flex space-x-5">
            {certifications.map((item:Certifications,idx)=>{
                return (
                    <div key={idx} className="flex flex-col space-y-3 w-80 bg-slate-200 rounded-xl p-5">
                        <div className="w-70 h-50 relative">
                            <Image className="object-contain" alt="" src={`/${item.title}.png`} fill/>
                        </div>
                        <b>{item.title}</b>
                        <div className="flex items-center space-x-5">
                            <button className="rounded-md w-30 h-10 ring hover:cursor-pointer hover:bg-white">
                                <div className="flex flex-row justify-center space-x-2">
                                    <p>view</p>
                                    <Image alt="" src="/external-link.png" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </button>
                        </div> 
                    </div>
                )
            })

            }
            </div>
        </div>
    )
};

export default Certifications