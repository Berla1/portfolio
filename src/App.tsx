import './App.css'
import Home from './components/Home'
// import Tecnologias from './components/Tecnologias'
import Header from './components/Header'
import Sobre from './components/Sobre'

function App() {
  return (
    <>
    <main className='p-5 scroll-smooth'>
      <Header/>
      <Home/>
      <Sobre/>
      {/* <Tecnologias/> */}
    </main>
    </>
  )
}

export default App