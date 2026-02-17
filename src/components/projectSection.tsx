import type { Project } from "../data/projectInterface";
import ProjectData from "../data/projectData.json"
import { useState } from "react";

const images = import.meta.glob<{ default: string }>(
  '../assets/*.png',
  { eager: true }
);

export default function ProjectSection (){
    const [projectIndex, setProjectIndex] = useState(0)
    const total = ProjectData.length
    const project: Project = ProjectData[projectIndex]

    const handlePrevProject = () => {
        setProjectIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
    };

    const handleNextProject = () => {
        setProjectIndex((next) => next === total - 1 ? 0 : next + 1 )
    };

    const getImagePath = (filename: string) => {
        const key = Object.keys(images).find(k => k.includes(filename));
        return key ? images[key].default : '';
    };

    return(
        <div className="flex flex-col justify-center items-center w-full min-h-screen lg:h-[130vh] p-6 lg:p-10 gap-5 overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-bold font-space text-white pt-10">Trabajos</h2>
            <span className="bg-red-600 w-24 h-1 rounded-full"></span>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-8 mt-10">
                <div className="h-[300px] lg:h-full flex items-center justify-center relative order-1 lg:order-none">
                    <div className="lg:left-1/4 lg:-translate-x-1/2 absolute">
                        <div className="bg-gray-100 w-[500px] h-[250px] lg:w-[1200px] lg:h-[600px] rounded-full shadow-xl flex items-center justify-center">
                            <img 
                                src={getImagePath(project.image)}
                                alt={project.name} 
                                className="w-[280px] h-[200px] lg:w-[600px] lg:h-[500px] lg:translate-x-1/4 rounded-[20px] shadow-xl object-cover" 
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full p-4 lg:p-10 z-10">
                    <div className="animate-reveal-right flex flex-col items-center justify-center w-full">
                        <h3 className="text-xl lg:text-2xl font-bold text-white">{project.name}</h3>
                        
                        <div className="h-[180px] lg:h-[220px] flex items-center justify-center w-full">
                            <p className="text-sm lg:text-lg text-white text-justify  px-4 lg:px-8">
                                {project.description}
                            </p>
                        </div>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white underline hover:text-red-500 transition-colors"
                        >
                            Ver Sitio Web
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-10">
                        <button onClick={handlePrevProject} className="h-[40px] w-[40px] text-lg bg-white rounded-full hover:bg-red-600 hover:text-white transition-all shadow-md">←</button>
                        <button onClick={handleNextProject} className="h-[40px] w-[40px] text-lg bg-white rounded-full hover:bg-red-600 hover:text-white transition-all shadow-md">→</button>
                    </div>
                </div>
            </div>
        </div>
    )
}