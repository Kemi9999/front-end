import { useState } from "react"

export default function Uliral2() {
    const [clickCount, setClickCount] = useState(0);
    return(
        <div className="h-screen bg-gray-100 flex flex-col items-center text-center ">
            <div className="w-full bg-blue-700 text-white py-4 text-lg font-bold mt-16"> Nest high School</div>
        <div className="mt-10">
            <h1 className="text-4xl font-bold">Welcome to Nest school</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text since the 1500s.
            </p>
            <div className="flex items-center spaec-x-12 ml-[400px]">
            <button
            onClick={() => setClickCount(clickCount + 1)}
            className="mt-5 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">Click me</button>
             <p className="mt-2 text-gray-500">Clicked {clickCount} times</p>
            </div>


            <div className="grid md:grid-cols-3 gap-6 mt-10 p-6 max-w-5xl">
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Why Choose Us?</h2>
          <div className="mt-2 text-gray-600">
            <div> High Performance</div>
            <div> Responsive Design</div>
            <div> Easy to Use</div>
            <div> Scalable Solutions</div>
            <div> 24/7 Support</div>
          </div>
        </div>

        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Our Features</h2>
          <div className="mt-2 text-gray-600">
            <div> Fast and hightweight</div>
            <div> Mobile-First Approach</div>
            <div> Customizable UI</div>
            <div> Secure and Redivable</div>
            <div> Global Reach</div>
          </div>
        </div>

        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Customer Reviews</h2>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

        </div>
        <div className="w-full bg-black text-white py-4 mt-10 text-sm">
        © 2025 Our Company. Nest Education High School.
      </div>
        </div>
       
    )
}