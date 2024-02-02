import ProjectItem from "./ProjectItem"
import useLanguage from "../../languageContext/useLanguage"
import enProjectsData from "../../assets/data/projects/enProjectsData"
import esProjectsData from "../../assets/data/projects/esProjectsData"
import useTheme from "../../themeContext/useTheme"
import { SiMongodb } from "react-icons/si"
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiEslint } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { SiGnubash } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { SiMariadbfoundation } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiRailway } from "react-icons/si";
import { FaTelegram } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiPowershell } from "react-icons/si";

const Projects = () => {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const data = language === 'en' ? enProjectsData : esProjectsData

  return (
    <section id="projects" className="dark:bg-[#000B11]">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16 dark:bg-[#000B11]">
        <h1 className="text-4xl font-bold text-center text-[#000B11] dark:text-[#F4F4F9]">{language === 'en' ? 'Projects' : 'Proyectos'}</h1>
        <p className="text-center py-8 dark:text-[#F4F4F9] text-[#000B11]">
          {
            language === 'en' ?
              'Welcome to my portfolio of projects! Here you will find a selection of highlighted works in systems administration and web development. From server implementation and dynamic website creation to more creative, personal, and original projects. For more information, you can also visit my '
              :
              'Bienvenido a mi portafolio de proyectos! Aquí encontrarás una selección de trabajos destacados en administración de sistemas y desarrollo web. Desde la implementación de servidores y creación de sitios web dinámicos hasta proyectos más creativos, personales y originales. Para más información también puedes visitar mi '
          }
          <a href="https://github.com/BoriSeven" className=" underline">GitHub</a>
        </p>
        <div className="flex flex-wrap items-center justify-center pt-5 [&>*]:m-1 py-8 dark:text-[#F4F4F9] text-[#000B11]">
          <FaHtml5 size={50}/>
          <FaCss3Alt size={50}/>
          <FaWordpress size={50}/>
          <FaBootstrap size={50}/>
          <SiJavascript size={50}/>
          <FaGit size={50}/>
          <FaGithub size={50}/>
          <FaNpm size={50}/>
          <FaReact size={50}/>
          <SiTailwindcss size={50}/>
          <SiVite size={50}/>
          <SiEslint size={50}/>
          <FaNodeJs size={50}/>
          <SiRailway size={50}/>
          <FaTelegram size={50} />
          <FaPhp size={50}/>
          <SiPhpmyadmin size={50}/>
          <SiMysql size={50}/>
          <SiMariadbfoundation size={50}/>
          <SiMongodb size={50}/>
          <BsFiletypeJson size={50}/>
          <SiApache size={50}/>
          <SiXampp size={50}/>
          <SiGnubash size={50}/>
          <VscTerminalCmd size={50}/>
          <SiPowershell size={50}/>
        </div>
        <div className="grid sm:grid-cols-2 gap-12">
          {
            data.map(({id, imageLight, imageDark, title, details, url, techs})=>(
              <ProjectItem key={id} image={isDarkMode ? imageDark : imageLight} title={title} details={details} url={url} techs={techs} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
