import Image from 'next/image';


export default function Home() {
  return (
    <main className="bg-[#FFF1D6] min-h-screen">

      <header className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 px-64">
        <img className="w-30 h-14" src='https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png'></img>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-600">Үйлчилгээ</a>
          <a href="#" className="hover:text-yellow-600">Давуу тал</a>
          <a href="#" className="hover:text-yellow-600">Мэдээ</a>
          <a href="#" className="hover:text-yellow-600">Хамтран ажиллах</a>
        </nav>
      </header>

    
      <section className="text-center pt-20">
        <h1 className="text-2xl md:text-3xl ">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС…
        </h1>


        <div className="flex justify-center gap-4 flex-wrap px-4">
          <img 
          className="rounded-xl h-5/6 w-[900px]" 
            src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
            alt="App screen 1"
          />
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a href="#">
            <img src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png" alt="Download on the App Store" width={150} height={50} />
          </a>
          <a href="#">
            <img src="https://www.toki.mn/wp-content/uploads/2021/01/android.png" alt="Get it on Google Play" width={150} height={50} />
          </a>
        </div>
      </section>
    </main>
  );
}
