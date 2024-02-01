import Main from "./components/Main"
import Career from "./components/Career/Career"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact"
import SideNav from "./components/SideNav"
import GoTop from "./components/GoTop"
import TopNav from "./components/TopNav"
import Footer from "./components/Footer"

import LanguageProvider from "./languageContext/LanguageProvider"
import ThemeProvider from "./themeContext/ThemeProvider"

function App() {

  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <TopNav/>
          <GoTop/>
          <SideNav/>
          <Main/>
          <Career/>
          <Projects/>
          <Contact/>
          <Footer/>
        </ThemeProvider>
      </LanguageProvider>
    </>
  )
}

export default App
