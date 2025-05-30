"use client";

export default function Toki() {
  return (
    <div>
      
      <div className="bg-white h-[90px] w-full flex items-center justify-between px-4 md:px-8 sticky top-0 shadow-md z-50">
        <img
          className="w-[100px] md:w-[120px] hover:scale-105 transition duration-300"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
        />
        <div className="hidden md:flex space-x-5 text-black text-lg font-normal hover:text-yellow-600 mr-4 md:mr-[180px]">
          {["Үйлчилгээ", "Давуу тал", "Мэдээ", "Хамтарч ажиллах"].map((item) => (
            <p key={item} className="cursor-pointer transition duration-200">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center bg-orange-100 w-full py-16 px-4">
        <div className="text-center max-w-3xl">
          <p className="font-normal text-gray-800 text-3xl md:text-4xl mb-8">
            ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС....
          </p>
          <img
            className="mb-6 w-full max-w-5xl"
            src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          />
          <div className="flex justify-center space-x-4">
            <img
              className="h-[50px] w-auto hover:scale-105 transition duration-300"
              src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png"
            />
            <img
              className="h-[50px] w-auto hover:scale-105 transition duration-300"
              src="https://www.toki.mn/wp-content/uploads/2021/01/android.png"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full py-16 px-4 md:px-10 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        <img
          className="w-full max-w-xl rounded-lg shadow-lg"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2-1140x760.png"
        />
        <div className="text-left max-w-md">
          <h2 className="text-[#FBBF24] text-2xl font-semibold mb-4">Toki Service</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ
            төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг
            дороос хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      <div className="bg-orange-100 w-full py-16 px-4 md:px-10 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        <img
          className="w-full max-w-md rounded-lg shadow-lg"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3-1140x760.png"
        />
        <div className="text-left max-w-md">
          <h2 className="text-[#FBBF24] text-2xl font-semibold mb-4">Toki Pay</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Toki Pay нь таны бодит хэтэвчийг цахимжуулан цоо шинэ дижитал хэтэвч юм.
            Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа
            нэг дор хадгалаарай.
          </p>
        </div>
      </div>

  
      <div className="bg-gray-100 w-full py-16 px-4 md:px-10 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        <img
          className="w-full max-w-md rounded-lg shadow-lg"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4-1140x760.png"
        />
        <div className="text-left max-w-md">
          <h2 className="text-orange-300 text-2xl font-semibold mb-4">Toki Shop</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд
            захиалах боломжтой.
          </p>
        </div>
      </div>

      
      <div className="bg-orange-100 w-full py-16 px-4 flex flex-col justify-center items-center space-y-4">
        <p className="text-orange-300 text-2xl font-semibold text-center">
          Toki app өдөр бүр таньд тусална.
        </p>
        <p className="text-gray-700 text-center max-w-xl text-sm">
          Toki app бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан авах
          боломжийг олгодог дижитал платформ юм.
        </p>
      </div>

  
      <div className="bg-orange-100 w-full py-8 flex flex-col justify-center items-center">
        <div className="bg-amber-400 rounded-full px-8 py-2 font-bold cursor-pointer hover:bg-amber-300 transition duration-300 text-sm">
          ДАВУУ ТАЛ
        </div>
      </div>

      
      <div className="bg-black w-full py-8 px-4 md:px-16 flex items-center justify-between h-[90px]">
        <img
          className="w-[80px] hover:scale-105 transition duration-300"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
        />
      </div>
    </div>
  );
}
