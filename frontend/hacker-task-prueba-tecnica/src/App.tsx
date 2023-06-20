import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import Home from './pages/Home'
import ToasterProvider from './providers/ToastProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToasterProvider/>
      <Header/>
      <Home/>
    </>
  )
}

export default App
