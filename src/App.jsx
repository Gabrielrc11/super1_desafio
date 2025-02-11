import './App.css'
import Header from './components/header/header.jsx'

function App() {
  return (
    <div>
      <div>
        <Header texts={["Home", "Sobre mim", "Experiências", "Habilidades", "Formação", "Projetos"]}/>
      </div>
      <h1>Desafio Super1</h1>
    </div>
  )
}

export default App