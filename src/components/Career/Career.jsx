import CareerItem from "./CareerItem"
import enCareerData from "../../assets/data/career/enCareerData"
import esCareerData from "../../assets/data/career/esCareerData"
import useLanguage from "../../languageContext/useLanguage"

const Career = () => {
  const { language } = useLanguage()
  
  const data = language === 'en' ? enCareerData : esCareerData
  const invertedData = [...data].reverse()
  
  return (
    <section id="career" className="dark:bg-[#000B11]">
      <div className="max-w-[1040px] dark:bg-[#000B11] m-auto md:pl-20 p-4 py-16" >
        <h1 className="text-4xl font-bold text-center text-[#000B11] dark:text-[#F4F4F9]">{language === 'en' ? 'Career' : 'Carrera'}</h1>
        <p className="text-center py-8 dark:text-[#F4F4F9] text-[#000B11]">
          {
            language === 'en' ?
              'With a solid background in software development and system administration, I have built my career step by step, from my beginnings as a self-taught enthusiast to where I am today. Each project has been an opportunity to learn and grow professionally. To learn more about my journey, I invite you to visit my profile in '
            :
              'Con una sólida formación en desarrollo de software y administración de sistemas, he construido mi carrera paso a paso, desde mis inicios como autodidacta hasta llegar a donde estoy hoy. Cada proyecto ha sido una oportunidad para aprender y crecer profesionalmente. Para conocer más sobre mi trayectoria, te invito a visitar mi perfil de '
          }
          <a href="https://www.linkedin.com/in/borissobreirapaleo/" className="underline">LinkedIn</a>
        </p>
        {
          invertedData.map(({id, year, title, subtitle, details})=>(
            <CareerItem
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
