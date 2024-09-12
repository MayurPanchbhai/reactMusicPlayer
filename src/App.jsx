import { PlayPauseProvider } from "./MyContext"
import { Home } from "./Home"

function App() {

  return (
    <div className="bg-black w-full flex justify-center">
      <PlayPauseProvider>
        <Home />
      </PlayPauseProvider>
    </div>
  )
}

export default App
