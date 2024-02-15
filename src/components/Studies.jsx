import DateItem from "./DateItem"
import enStudiesData from "../assets/data/studies/enStudiesData.jsx"
import esStudiesData from "../assets/data/studies/esStudiesData.jsx"
import useLanguage from "../languageContext/useLanguage"

const Career = () => {
  const { language } = useLanguage()
  
  const data = language === 'en' ? enStudiesData : esStudiesData
  const invertedData = [...data].reverse()
  
  return (
    <section id="studies" className="dark:bg-[#000B11]">
      <div className="max-w-[1040px] dark:bg-[#000B11] m-auto md:pl-20 p-4 pt-16" >
        <h1 className="text-4xl pb-8 font-bold text-center text-[#000B11] dark:text-[#F4F4F9]">{language === 'en' ? 'Studies' : 'Estudios'}</h1>
        {
          invertedData.map(({id, year, title, subtitle, details})=>(
            <DateItem
              key={id}
              year={year}
              title={title}
              subtitle={subtitle}
              details={details}
            />
          ))
        }
        <p className="text-center dark:text-[#F4F4F9] text-[#000B11]">
          {
            language === 'en' ?
            <span>
              Feel free to explore more about my professional journey on my <a href="https://www.linkedin.com/in/borissobreirapaleo/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a> page. For a comprehensive overview of my skills and experiences, you can also download my <a href="link-to-cv" target="_blank" rel="noopener noreferrer" className="underline">CV</a>.
            </span>
            :
            <span>
              No dudes en explorar más sobre mi trayectoria profesional en mi página de <a href="https://www.linkedin.com/in/borissobreirapaleo/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>. Para obtener una visión completa de mis habilidades y experiencias, también puedes descargar mi <a href="link-to-cv" target="_blank" rel="noopener noreferrer" className="underline">CV</a>.
            </span>
          }
        </p>
      </div>
    </section>
  )
}

export default Career
