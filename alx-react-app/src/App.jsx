import WelcomeMessage from './components/WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from "./components/WelcomeMessage.js"; // ✅ Move to top

console.log("WelcomeMessage imported successfully!");

// The rest of your code...
import Header from "./components/Header.jsx";
console.log("Header imported successfully!");
import MainContent from "./components/MainContent.jsx";
console.log("MainContent imported successfully!");
import Footer from "./components/Footer.jsx";
console.log(" Footer imported successfully!");
import UserProfile from "./components/UserProfile.jsx";
console.log("UserProfile imported successfully!");


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
      </div>
      <div>
      <Header />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
     
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
