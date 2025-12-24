import Image from "next/image";
import KKUlogo from "../public/KKU logo.png";

const About = () =>{
    return(
        <div id="About" className="shadow-md rounded-4xl w-full p-5 ">
            <h1 className="text-4xl mt-10 mb-5">About me</h1>
            <div className="space-x-5 flex flex-row">
                <div className="w-[20%]">
                    <Image src="/profile.jpg" alt="" width={400} height={400}
                    className="rounded" />
                </div>
                <div className="flex flex-row space-x-10 w-full">
                    <div className="flex flex-col">
                        <p>
                        Hi, I&apos;m Kritsanapong Tongjai. Highly motivated Software Developer with a Bachelor&apos;s in Automation, Robotics and Intelligent Systems Engineering. Proficient in Python, JavaScript, and SQL, with hands-on experience developing RESTful APIs, integrating databases, and deploying full-stack web applications. Eager to contribute to high-quality software solutions and continuously improve knowledge in any development environment.
                        </p>
                        <br />
                        {/* contact */}
                        <div>
                            <div className="flex flex-row space-x-2">
                                <a href="https://www.linkedin.com/in/kritsanapong-tongjai-a213b0279/"className="hover:cursor-pointer"><i className="linkedin-icon"></i></a>
                                <a href="https://github.com/Faremu"><i className="github-icon"></i></a>
                                <a href="https://www.hackerrank.com/profile/kritsanapong_to1"><i className="hackerrank-icon"></i></a>

                                {/* <span>Linkedin</span> */}
                            </div>
                        </div>
                        <h1 className="text-2xl mb-5">Education</h1>
                        <div className="flex flex-row">
                            <Image src={KKUlogo} alt="" width={70} className="aspect-3185/2963" />
                            <div>
                                <p className="font-bold">Khon Kaen University</p>
                                <p className="">Bachelor&apos;s Degree of Engineering <br /> (Automation Robotics and Intelligent System Engineering) <b>First honor</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="ring-2 ring-gray-700 w-full rounded-lg aspect-square">

                    </div>
                    
                    
                </div>
            </div>

            
        </div>
        
    )
};

export default About
