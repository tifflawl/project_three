import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Weather from './components/Weather'
import DateTime from './components/DateTime'
import data from '../data.json'

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainContent data={data} />
      <SideBar data={data} />
      <Footer />
    </div>
  )
}

export default App
