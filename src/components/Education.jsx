import DateItem from "./DateItem.jsx"
import enEducationData from "../assets/data/education/enEducationData.jsx"
import esEducationData from "../assets/data/education/esEducationData.jsx"
import useLanguage from "../languageContext/useLanguage.jsx"
import esCurriculumVitae from "../assets/data/pdf/esBorisSobreiraPaleoCV.pdf"
import enCurriculumVitae from "../assets/data/pdf/enBorisSobreiraPaleoCV.pdf"


const Career = () => {
  const { language } = useLanguage()
  
  const data = language === 'en' ? enEducationData : esEducationData
  const invertedData = [...data].reverse()
  
  return (
    <section id="education" className="dark:bg-[#000B11]">
      <div className="max-w-[1040px] dark:bg-[#000B11] m-auto md:pr-20 p-4 pt-16" >
        <div className="text-center">
          <a href='https://www.linkedin.com/in/borissobreirapaleo/details/education/' target="_blank" rel="noopener noreferrer" className="inline-block">
            <h1 className="text-4xl pb-8 font-bold text-center text-[#000B11] dark:text-[#F4F4F9] hover:underline">{language === 'en' ? 'Education' : 'Educación'}</h1>
          </a>
        </div>
        {
          invertedData.map(({id, year, title, subtitle, details, techs})=>(
            <DateItem
              key={id}
              year={year}
              title={title}
              subtitle={subtitle}
              details={details}
              techs={techs}
            />
          ))
        }
        <p className="text-center dark:text-[#F4F4F9] text-[#000B11]">
          {
            language === 'en' ?
            <span>
              Feel free to explore more about my professional journey on my <a href="https://www.linkedin.com/in/borissobreirapaleo/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a> page. For a comprehensive overview of my skills and experiences, you can also download my <a href={enCurriculumVitae} target="_blank" rel="noopener noreferrer" className="underline">CV</a>.
            </span>
            :
            <span>
              No dudes en explorar más sobre mi trayectoria profesional en mi página de <a href="https://www.linkedin.com/in/borissobreirapaleo/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>. Para obtener una visión completa de mis habilidades y experiencias, también puedes descargar mi <a href={esCurriculumVitae} target="_blank" rel="noopener noreferrer" className="underline">CV</a>.
            </span>
          }
        </p>
      </div>
    </section>
  )
}

export default Career
