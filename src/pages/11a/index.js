import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [historicalToolsData, setHistoricalToolsData] = useState([]);
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [provincesData, setProvincesData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const fetchAndSet = async (url, setter) => {
          const response = await fetch(url);
          const result = await response.json();
          setter(Object.values(result)[0]);
        };

        await Promise.all([
          fetchAndSet("https://mongol-api-rest.vercel.app/Clothes", setClothesData),
          fetchAndSet("https://mongol-api-rest.vercel.app/Instruments", setInstrumentsData),
          fetchAndSet("https://mongol-api-rest.vercel.app/HistoricalTools", setHistoricalToolsData),
          fetchAndSet("https://mongol-api-rest.vercel.app/EthnicGroups", setEthnicGroupsData),
          fetchAndSet("https://mongol-api-rest.vercel.app/Provinces", setProvincesData),
          fetchAndSet("https://mongol-api-rest.vercel.app/HistoricalFigures", setHistoricalFiguresData),
          fetchAndSet("https://mongol-api-rest.vercel.app/TouristAttractions", setTouristAttractionsData),
        ]);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();


  }, []);

  console.log(clothesData);

  const handleSubmit = () => {
 //   axios.get
 //   axios.post
 //   axios.patch
 //   axios.delete
 axios.post("https://mongol-api-rest.vercel.app/clothes", {
  
 });
  }

  const filterData = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-slate-500 rounded-lg w-1/2 shadow-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button className="bg-blue-400 rounded-2xl p-2 mx-auto mt-4"> shineer hariltsagch uusgeh</button>

      {loading && <p className="text-center text-gray-700 font-semibold">Loading...</p>}

      <p className="text-2xl font-bold">Clothes</p>
      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(clothesData).map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-800 text-black rounded shadow-lg cursor-pointer p-4 text-xs space-y-2 hover:shadow-xl"
            onClick={() => router.push(`/11a/${item.id}`)}
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-black  text-xl text-center">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-2xl font-bold">Instruments</p>
      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(instrumentsData).map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-800 rounded text-black shadow-lg cursor-pointer p-4 text-xs space-y-2 hover:shadow-xl"
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-center text-xl text-black">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-2xl font-bold">Historical Tools</p>
      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(historicalToolsData).map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-800 rounded shadow-lg text-black cursor-pointer p-4 text-xs space-y-2 hover:shadow-xl"
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-center text-xl text-black">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(ethnicGroupsData).map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-800 rounded shadow-lg text-black cursor-pointer p-4 text-xs space-y-2 hover:shadow-xl"
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-center text-xl text-black">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(historicalFiguresData).map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-800 rounded shadow-lg text-black cursor-pointer p-4 text-xs space-y-2 hover:shadow-xl"
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-xl text-center text-black">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(touristAttractionsData).map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-800 rounded shadow-lg text-black cursor-pointer p-4 text-xs space-y-2 hover:shadow-xl"
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-center text-xl text-black">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>




    </div>
  );
}
