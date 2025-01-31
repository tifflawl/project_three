import './App.css'

import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import data from '../data.json'

const App = () => {
  console.log(data)
  return (
    <div className="flex-row">
      <SideBar />
      <MainContent data={data} />
    </div>
  )
}

export default App
