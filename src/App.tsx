import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Sobre from './components/Sobre'

function App() {
  return (
    <>
    <main className='px-3 md:px-0'>
      <Header/>
      <Home/>
      <Sobre/>
    </main>
    </>
  )
}

export default App