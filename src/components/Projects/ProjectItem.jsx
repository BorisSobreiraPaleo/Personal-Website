import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import useLanguage from '../../languageContext/useLanguage';
import { VscTerminalCmd } from 'react-icons/vsc';
import { SiPowershell } from 'react-icons/si';

const iconMap = {
  react: <FaReact size={50} />,
  tailwind: <SiTailwindcss size={50}/>,
  cmd: <VscTerminalCmd size={50}/>,
  powershell: <SiPowershell size={50}/>
};

const ProjectItem = ({image, title, details, url, techs}) => {
  const { language } = useLanguage()

  return (
    <div className="relative flex items-center justify-center h-52 w-full sm:h-auto sm:w-full shadow-md shadow-[#b2cddf] dark:shadow-[#03396c] dark:bg-[#000B11] rounded-xl group hover:bg-gradient-to-b from-[#ffffff] to-[#b2cddf] dark:hover:bg-gradient-to-b dark:from-[#000B11] dark:to-[#03396c]">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl group-hover:opacity-10" />
      <div className="absolute hidden text-center items-center justify-center group-hover:block">
        <h3 className="text-3xl w-full p-2 font-bold dark:text-[#F4F4F9] tracking-wider text-center">
          {title}
        </h3>
        <div className="relative flex justify-center dark:text-[#F4F4F9]">
          {
            techs.map((tech)=>(
              <p className='mx-1' key={tech}>{iconMap[tech]}</p>
            ))
          }
        </div>
        <p className="pb-4 pt-2 dark:text-[#F4F4F9] text-center">{details}</p>
        <div className='flex justify-center'>
          <a href={url}>
            <div className="w-64 p-3 rounded-lg border border-[#b2cddf] bg-[#ffffff] dark:border-[#03396c] dark:bg-[#000B11] dark:text-[#F4F4F9] font-bold cursor-pointer text-lg">
              {language === 'en' ? 'More Info' : 'Más Información'}
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
