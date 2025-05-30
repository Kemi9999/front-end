import axios from "axios";
import { useEffect, useState } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("create");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const result = await response.json();
      setUsers(result);
      setError(null);
    } catch (error) {
      console.log("Error fetching users:", error);
      setError("Харилцагчдын мэдээллийг авч чадсангүй.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!name || !ovog || !email || !age) {
      setError("Бүх талбарыг бөглөнө үү.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/createUsers", {
        first_name: name,
        last_name: ovog,
        email: email,
        age: age,
      });
      setName("");
      setOvog("");
      setEmail("");
      setAge("");
      setActiveTab("list");
      await fetchData();  // await нэмэв, fetchData дуудаж дуусахыг хүлээх
      setError(null);
    } catch (error) {
      console.log("Error creating user:", error);
      setError("Хэрэглэгч үүсгэхэд алдаа гарлаа.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === "create" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("create")}
        >
          Харилцагч нэмэх
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("list")}
        >
          Харилцагч жагсаалт
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {activeTab === "create" && (
        <div className="space-y-4 text-xl">
          <div>
            <label>Нэр:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="border rounded-lg bg-white ml-2 p-2"
              placeholder="Нэр оруулна уу"
            />
          </div>
          <div>
            <label>Овог:</label>
            <input
              type="text"
              value={ovog}
              onChange={(e) => setOvog(e.target.value)}
              className="border rounded-lg bg-white ml-2 p-2"
              placeholder="Овог оруулна уу"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg bg-white ml-2 p-2"
              placeholder="Email оруулна уу"
            />
          </div>
          <div>
            <label>Нас:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border rounded-lg bg-white ml-2 p-2"
              placeholder="Нас оруулна уу"
              min="0"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
          >
            Хадгалах
          </button>
        </div>
      )}

      {activeTab === "list" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Бүх харилцагч</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="border rounded-lg p-4 shadow">
                  <p><strong>ID:</strong> {user.id}</p>
                  <p><strong>Нэр:</strong> {user.first_name} {user.last_name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Нас:</strong> {user.age}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">Ямар ч харилцагч алга.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
