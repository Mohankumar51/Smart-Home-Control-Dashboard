import { Routes, Route } from 'react-router-dom';
import { Header } from "./component/Header"
import Home from "./page/home/Home"

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App