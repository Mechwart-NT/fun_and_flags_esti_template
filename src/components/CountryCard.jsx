import { Link } from "react-router-dom"

const CountryCard = (props) => {
  const {name, capital, population, flag, region, translations, alpha3Code} = props

  return (
    <div>
        <Link to={"/country/" + alpha3Code}>
          <img src={flag} alt={name} />
        </Link>
        <h2>{translations.hu}</h2>
        {name !== translations.hu && <h3>{name}</h3>}
        <div><strong>Population: </strong>{population}</div>
        <div><strong>Capital: </strong>{capital}</div>
        <div><strong>Region: </strong>{region}</div>
    </div>
  )
}

export default CountryCard