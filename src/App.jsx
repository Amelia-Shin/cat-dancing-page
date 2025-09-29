import './styles/global.css'
import './App.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Dancing Cat 🐱</h1>
        <p>Watch the adorable cat dance!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
