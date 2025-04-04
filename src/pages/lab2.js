import { useEffect, useState } from "react";

export default function Lab2(){
    const [data, setData] = useState("");
    useEffect(() =>{
        const fetchData =async () =>{
            try{
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/clothes"
                );
                const result = await response.json();
                setData(result);

            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(data.clothes);
    return(
    <div> {data?.clothes?.map((item) =>(
    <div>
        {item.name} {item.description} 
    </div>
    ))}
    </div>
    );
}