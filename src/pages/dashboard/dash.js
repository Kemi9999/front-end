export default function DashBoard() {
    const items = [
      {
        name: "iPhone",
        price: 2000000,
        color: "Blue",
        details: ["Case", "Camera"]
      },
      {
        name: "Book",
        price: 45000,
        color: "Black",
        details: ["Bookmark", "Pages"]
      },
      {
        name: "Key",
        price: 200000,
        color: "Gray",
        details: ["Keychain", "Bayern"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Backpack",
        price: 300000,
        color: "Black",
        details: ["Notebook", "Book"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      },
      {
        name: "Wallet",
        price: 200000,
        color: "Black",
        details: ["Tugrik", "Cards"]
      }

    ];
  
    return (
      <div className="flex h-screen">
      
        <div className="w-1/5 bg-white p-4 shadow-md space-y-9">
          <div className="text-center mb-6">
            <img src="https://nhs.edu.mn/favicon.ico" className="w-20 h-20 mx-auto rounded-full mb-2" />
            <h1 className="text-xl font-bold">Nest Education IT School</h1>
            <p>Батчулуун Тэмүүжин</p>
            <p>Анги: 11А</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-500 text-white py-2 rounded">Go to Lab 2</button>
            <button className="bg-blue-500 text-white py-2 rounded">Go to Lab 3</button>
          </div>
        </div>
  
        
        <main className="flex-1 bg-gray-100 p-6 ">
          <div className="flex justify-between items-center mb-4 ">
            <div className="flex space-x-4">
            <button className="text-md font-semibold bg-black text-white rounded p-2">Харилцагчид</button>
            <input
            type="text"
            placeholder="Search"
            className="w-64 p-2  border border-gray-300 rounded"
          /> </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Барааг бүртгэх</button>
          </div>
  
         
  
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.price.toLocaleString()}₮ - {item.color}</p>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }