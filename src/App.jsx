import NavBar from "./components/navBar/NavBar"
import Hero from "./components/hero/Hero"
import './app.css'
function App() {

  return (
    <div className="main-page">
        <NavBar />
        <Hero />
        <div className="spacer" style={{height: '5000px'}}></div>
    </div>
  )
}

export default App
