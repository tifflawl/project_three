import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import data from '../data.json'

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainContent data={data} />
      <SideBar />
      <Footer />
    </div>
  )
}

export default App
