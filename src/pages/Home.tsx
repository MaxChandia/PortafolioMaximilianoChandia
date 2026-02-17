import ProjectSection from "../components/projectSection";
import { StackLogos } from "../data/stackLogos";
import { contactLogos } from "../data/contactLogo";

export default function Home() {
    return (
        <div className="home-page w-full min-h-screen flex flex-col font-space overflow-x-hidden">
            <section className="home-page-description w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-6 lg:p-10 gap-10">
                <div className="flex flex-col items-start justify-center gap-5 w-full z-10">
                    <h1 className="animate-reveal-left text-3xl lg:text-4xl font-bold">
                        Maximiliano Chandía Flores
                    </h1>
                    
                    <p className="text-xl lg:text-2xl font-medium text-justify animate-reveal-left">Desarrollador Fullstack</p>
                    <span className="bg-blue-500 w-24 h-1 rounded-full"></span>
                    <p className="text-base lg:text-lg font-medium text-justify animate-reveal-left">
                       Transformando necesidades en soluciones digitales escalables. Especializado en la optimización de performance y el SEO estratégico, logrando reducir tiempos de carga y mejorando el posicionamiento en los buscadores. Combino rigor técnico con metodologías ágiles para entregar software que aporte valor real y estabilidad desde el primer despliegue.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {contactLogos.map((logo) => (
                            <a href={logo.link} key={logo.name} className="inline-block">
                                <img src={logo.image} alt={logo.name} 
                                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition-transform duration-300 transform hover:scale-110 animate-reveal-left"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="h-[400px] lg:h-full flex items-center justify-center relative">
                    <div className="lg:right-0 lg:translate-x-1/3 absolute">
                        <div className="animate-pop-in bg-blue-900 w-[600px] h-[300px] lg:w-[1000px] lg:h-[500px] rounded-full shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                            <div className="grid grid-cols-4 gap-6 lg:gap-12 lg:-translate-x-20 p-10">
                                {StackLogos.map((logo, index) => (
                                    <div 
                                        key={logo.name}
                                        className="opacity-0 animate-reveal-right flex flex-col items-center group"
                                        style={{ animationDelay: `${0.5 + index * 0.1}s` }} 
                                    >
                                        <img 
                                            src={logo.image} 
                                            className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] transition-all duration-300 transform group-hover:scale-110" 
                                        />
                                        <p className="text-white text-[10px] lg:text-[15px] mt-2 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                            {logo.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-900">
                <ProjectSection />
            </section>
        </div>
    );
}