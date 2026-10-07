import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'
import Restaurant from './pages/Restaurant'
import Conference from './pages/Conference'
import ExploreBale from './pages/ExploreBale'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="conference" element={<Conference />} />
          <Route path="explore-bale" element={<ExploreBale />} />
          <Route path="explore-asella" element={<ExploreBale />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
