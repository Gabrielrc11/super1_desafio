import './App.css'
import Header from './components/header/header.jsx'
import HeaderMenu from './components/headerMenu/headerMenu.jsx'

function App() {
  return (
    <div>
      <Header className="header"/>
      <HeaderMenu className="header-menu"/>
    </div>
  )
}

export default App