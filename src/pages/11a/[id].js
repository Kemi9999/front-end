import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (router.query.id) {
      const category = router.query.category || "Clothes";
      setCategory(category);

      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://mongol-api-rest.vercel.app/${category}`);
          const result = await response.json();
          setData(result[category.toLowerCase()] || []);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [router.query.id, router.query.category]);

  const renderItemDetails = (item) => (
    <div key={item.id} className="max-w-md mx-auto p-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-300"> {/* Added border here */}
      
      <h2 className="text-3xl font-semibold mb-4 text-indigo-800">{item.name}</h2>
      <img
        src={item?.images?.[0] || item?.images}
        alt={item.name}
        className="w-full h-auto mb-6 rounded-lg object-cover aspect-w-16 aspect-h-9"
      />
      <p className="text-gray-700 leading-relaxed">{item.description}</p>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-500">ID: {item.id}</span>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
          View More
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto">
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full mb-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-300" // Added border here
          onClick={() => router.back()}
        >
          Back
        </button>

        {loading && <p className="text-center text-gray-600">Loading...</p>}

        {data.length > 0 ? (
          data.map((item) => {
            return router.query.id === item.id ? (
              renderItemDetails(item)
            ) : (
              <div key={item.id} />
            );
          })
        ) : (
          <p className="text-center text-gray-600">
            No matching item found for ID: {router.query.id}
          </p>
        )}
      </div>
    </div>
  );
}