import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>
      <button
        className={`animation-button ${isAnimating ? 'stop' : 'start'}`}
        onClick={toggleAnimation}
        aria-label={isAnimating ? 'Stop dancing' : 'Start dancing'}
      >
        {isAnimating ? '🛑 Stop Dancing' : '💃 Start Dancing'}
      </button>
    </div>
  )
}

export default DancingCat