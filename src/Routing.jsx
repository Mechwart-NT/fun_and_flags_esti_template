import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import CountryPage from "./components/CountryPage"

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={""} element={<App/>} />
            <Route path={"/country/:code"} element={<CountryPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing