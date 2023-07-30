import {getProjects} from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"
export default async function Home() {

  const projects = await getProjects();
  
  return (
    <div>
      <div className="grid grid-cols-2 h-full">
        <span className="mt-32 tracking-wider text-center text-9xl font-extrabold text-white">Charlie</span>
        <div className="grid grid-cols-1 grid-rows-4 bg-white h-screen">
          <span className="mt-32 pb-0 tracking-wider text-center text-9xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
      bg-clip-text text-transparent"> Zhong</span>
          <p className="mx-10 text-xl">Hey, I'm Charlie, a rising sophomore studying Computer Science who is interested in web app development. Currently, I'm learning to work with a variety of front-end tools to develop my skills and repertoire!</p>
        </div>
      </div>



      <div className='bg-white w-full p-10'>
        <h2 className="mt-auto text-center font-bold text-gray-700 text-3xl">My Projects</h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.slug}`}
              key={project._id} 
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
                {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


