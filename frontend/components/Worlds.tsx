import worlds from "@/data/worlds.json"
interface myWorldsType{
    name:string;
    description:string;

}

const Worlds = () => {
    const myWorlds:myWorldsType[] = worlds
    return (
        <div>
            <h1 className="text-4xl mt-10 mb-5 w-[1350px]">My worlds!</h1>
            <div className="flex flex-row justify-between">
                {myWorlds.map((item:myWorldsType,idx)=>{
                    return (
                    <div key={item.name + "-" + idx} className="w-[200px] ring p-5 rounded">
                        <p>{item.name}</p>
                        <p className="text-gray-500">{item.description}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Worlds