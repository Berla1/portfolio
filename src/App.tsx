import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Experiencia from './components/Experiencia'

function App() {
  return (
    <>
    <main className='px-5 md:px-0'>
      <Header/>
      <Home/>
      <Sobre/>
      <Experiencia/>
      <Projetos/>
    </main>
    </>
  )
}

export default App