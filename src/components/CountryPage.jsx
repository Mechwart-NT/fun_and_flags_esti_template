import { useParams } from "react-router-dom"
import data from "../../public/data.json"

const CountryPage = () => {
  const params = useParams()
  const country = data.find(element => element.alpha3Code === params.code)

  return (
    <div>
      <img src={country.flag} alt={country.name} />
      {country.name}
    </div>
  )
}

export default CountryPage