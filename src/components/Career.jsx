import DateItem from "./DateItem"
import enCareerData from "../assets/data/career/enCareerData"
import esCareerData from "../assets/data/career/esCareerData"
import useLanguage from "../languageContext/useLanguage"

const Career = () => {
  const { language } = useLanguage()
  
  const data = language === 'en' ? enCareerData : esCareerData
  const invertedData = [...data].reverse()
  
  return (
    <section id="career" className="dark:bg-[#000B11]">
      <div className="max-w-[1040px] dark:bg-[#000B11] m-auto md:pr-20 p-4 pt-16" >
        <div className="text-center">
          <a href='https://www.linkedin.com/in/borissobreirapaleo/' target="_blank" rel="noopener noreferrer" className="inline-block">
            <h1 className="text-4xl pb-8 font-bold text-center text-[#000B11] dark:text-[#F4F4F9] hover:underline">{language === 'en' ? 'Career' : 'Carrera'}</h1>
          </a>
        </div>
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
      </div>
    </section>
  )
}

export default Career
