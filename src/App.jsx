import { Routes, Route } from 'react-router';
import './App.css'
import { Rosters } from './pages/Rosters';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Rosters />} />
      </Routes>
    </>
  )
}

export default App
