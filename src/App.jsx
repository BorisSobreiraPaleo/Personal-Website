import Main from "./components/Main"
import Work from "./components/Work/Work"
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
          <Work/>
          <Projects/>
          <Contact/>
          <Footer/>
        </ThemeProvider>
      </LanguageProvider>
    </>
  )
}

export default App
