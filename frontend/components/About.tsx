import Image from "next/image";
import KKUlogo from "../public/KKU logo.png";
const About = () =>{
    return(
        <div>
            <h1 className="text-4xl mt-10 mb-5">About me</h1>
            <p>
            Hi, I&apos;m Kritsanapong Tongjai. Highly motivated Software Developer with a Bachelor&apos;s in Automation, Robotics and Intelligent Systems Engineering. Proficient in Python, JavaScript, and SQL, with hands-on experience developing RESTful APIs, integrating databases, and deploying full-stack web applications. Eager to contribute to high-quality software solutions and continuously improve knowledge in any development environment.
            </p>
            <br />
            <h1 className="text-2xl mb-5">Education</h1>
            <div className="flex flex-row">
                <Image src={KKUlogo} alt="" width={70} />
                <div>
                    <p className="font-bold">Khon Kaen University</p>
                    <p className="">Bachelor&apos;s Degree of Engineering (Automation Robotics and Intelligent System Engineering) <b>First honor</b></p>
                </div>
                
            </div>
        </div>
        
    )
};

export default About
