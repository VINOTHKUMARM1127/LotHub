import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchDataFromApi } from './api.js'

import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice.js"

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/home/home.jsx'
import Details from './Pages/details/details.jsx'
import SearchResults from './Pages/searchResults/searchresults.jsx'
import Explore from './Pages/explore/explore.jsx'
import PagenotFound from './Pages/404/pagenotFound.jsx'



const App = () => {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  console.log(url)


  const apiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      console.log(res)

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }

      dispatch(getApiConfiguration(url))
    })
  }

  useEffect(() => {
    apiConfig()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
