import { useEffect, useState } from "react"
import CountryCard from "./components/CountryCard"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [countries, setCountries] = useState([])

  const regions = ["All","Africa", "Americas","Asia","Europe","Oceania","Polar"]
  const [selectedRegion, setSelectedRegion] = useState(regions[0])

  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => setCountries(data))
  },[])

  useEffect(()=>{
    document.body.className = isDark ? "dark" : "light"
  }, [isDark])

  const filterByRegion = (li) => {
    if(selectedRegion === "All") return li

    return li.filter(element => element.region === selectedRegion)

    // return li.filter((element) => {
    //   if(element.region === selectedRegion)
    //     return element
    // })
  }

  return (
    <>
    <button onClick={()=>setIsDark(prev => !prev)}>
      {isDark ? "SETÉT" : "VILÁGOS"}
    </button>

    <select value={selectedRegion} onChange={(e)=>{ setSelectedRegion(e.target.value) }}>
      {regions.map(regio => <option value={regio}>{regio}</option>)}
    </select>

    <section className="cardWrapper">
      {filterByRegion(countries).map(country => <CountryCard {...country} />)}
    </section>
    </>
  )
}

export default App
