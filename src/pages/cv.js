import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
    return (
      <div className="bg-gray-50 text-gray-900 font-sans antialiased">

        <div className="max-w-screen-lg mx-auto my-10 px-5">
     
          <header className="text-center">
            <h1 className="text-4xl font-semibold text-blue-600">Kemi</h1>
            <p className="text-xl text-gray-600 mt-2">Web Developer | Designer | Problem Solver</p>
          </header>
  
          <div className="flex justify-between items-center mt-10">
          
            <div>
              <h3 className="text-lg font-semibold text-blue-600">Contact</h3>
              <ul className="mt-2 text-gray-600">
                <li>Email: nest21261003@nhs.edu.mn</li>
                <li>Phone: +123 456 7890</li>
                <li>Location: Ulaanbaatar, Mongolia</li>
              </ul>
            </div>
  
         
            <div>
              <h3 className="text-lg font-semibold text-blue-600">Social</h3>
              <ul className="mt-2 text-gray-600 flex space-x-4">
                <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-500">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
              </ul>
            </div>
          </div>
  
     
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-600">About Me</h2>
            <p className="mt-4 text-gray-700">
              I am a passionate web developer with 2+ years of experience building web applications. I enjoy learning new technologies and solving complex problems. I am always seeking ways to improve and expand my skills, both in front-end and back-end development.
            </p>
          </section>
  
        
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-600">Skills</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">HTML</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">CSS</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">JavaScript</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">Flutter</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">MySql</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">C++</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">Tailwind CSS</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">Java</span>
              <span className="inline-block bg-blue-100 text-blue-600 py-2 px-4 rounded-lg">Next.js</span>
            </div>
          </section>
  
       
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-600">Experience</h2>
  
        
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Student at Nest</h3>
              <p className="text-gray-600">Jan 2021 - 2024</p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Developed and maintained web applications using React, HTML, CSS, and Next.js.</li>
                <li>Worked with many friends to deliver high quality software on time..</li>
                <li>Implemented CI/CD pipelines using GitHub Actions.</li>
              </ul>
            </div>
  
          </section>
  

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-600">Education</h2>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Mongolia of Science in Computer Science</h3>
              <p className="text-gray-600">Nest Education | Graduated: 2021</p>
              <p className="mt-2 text-gray-700">Relevant coursework: Data Structures, Algorithms, Web Development, Databases.</p>
            </div>
            <div>
      <button
        className="border rounded-lg bg-gray-400 p-4 font-bold mb-2 hover:bg-blue-200"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
    </div>
          </section>
  
       
         
        </div>
      </div>
    );
  }