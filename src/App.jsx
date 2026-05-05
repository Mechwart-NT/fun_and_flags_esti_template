import { useEffect, useState } from "react"

function App() {
 const [isDark, setIsDark] = useState(true)

  useEffect(()=>{
    document.body.className = isDark ? "dark" : "light"
  }, [isDark])

  return (
    <>
    <button onClick={()=>setIsDark(prev => !prev)}>
      {isDark ? "SETÉT" : "VILÁGOS"}
    </button>
    </>
  )
}

export default App
