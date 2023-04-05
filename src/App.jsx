import { useRef } from "react"
import NavBar from "./components/navBar/NavBar"
import Hero from "./components/hero/Hero"
import GoToDashboard from "./components/goToDashboard/GoToDashboard"
import About from "./components/about/About"
import FAQ from "./components/faq/FAQ"
import FooterBar from "./components/footerBar/FooterBar"
import './app.css'
function App() {
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  function scrollTo(section) {
    console.log('wow');
    switch (section) {
      case 'about':
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'faq':
        faqRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;
    }
  }

  return (


    <div className="home-page">
        <NavBar onLinkClick = {(section) => scrollTo(section)}/>
        <Hero />
        <About ref={aboutRef}/>
        <FAQ ref={faqRef}/>
        <GoToDashboard />
        <FooterBar onLinkClick = {(section) => scrollTo(section)}/>
        {/* <div className="spacer" style={{height: '5000px'}}></div> */}
    </div>
  )
}

export default App
