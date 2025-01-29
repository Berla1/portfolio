import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Sobre from './components/Sobre'

function App() {
  return (
    <>
    <main className='p-5 scroll-smooth'>
      <Header/>
      <Home/>
      <Sobre/>
    </main>
    </>
  )
}

export default App