import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/11a">
          <div className="bg-white rounded-2xl shadow-lg p-10 w-64 text-center cursor-pointer hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold">Mongolapi</h2>
          </div>
        </Link>

        <Link href="/cv">
          <div className="bg-white rounded-2xl shadow-lg p-10 w-64 text-center cursor-pointer hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold">Cv</h2>
          </div>
        </Link>

        <Link href="/2uliral2">
          <div className="bg-white rounded-2xl shadow-lg p-10 w-64 text-center cursor-pointer hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold">Nest</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
