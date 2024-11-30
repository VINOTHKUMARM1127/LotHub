
import { Routes, Route } from "react-router-dom"

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/home/home.jsx'
import Details from './Pages/details/details.jsx'
import SearchResults from './Pages/searchResults/searchresults.jsx'
import Explore from './Pages/explore/explore.jsx'
import PagenotFound from './Pages/404/pagenotFound.jsx'
import ActorDet from "./Pages/details/detailsBanner/ActorDet.jsx"



const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediatype/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediatype" element={<Explore />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/undefined/:id" element={<ActorDet/>} />
      </Routes>
      <Footer />
      </>
  )
}

export default App
