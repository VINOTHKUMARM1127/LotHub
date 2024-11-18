
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/home/home.jsx'
import Details from './Pages/details/details.jsx'
import SearchResults from './Pages/searchResults/searchresults.jsx'
import Explore from './Pages/explore/explore.jsx'
import PagenotFound from './Pages/404/pagenotFound.jsx'



const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediatype/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
