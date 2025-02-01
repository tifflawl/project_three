import './App.css'

import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Header from './components/Header'
import data from '../data.json'

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainContent data={data} />
      <SideBar />
    </div>
  )
}

export default App
