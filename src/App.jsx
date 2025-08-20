import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Rosters } from './pages/Rosters';
import { Scoreboard } from './pages/Scoreboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Rosters />} />
        <Route path='/scoreboard' element={<Scoreboard />} />
      </Routes>
    </>
  )
}

export default App
