import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TourAndPackage from './pages/TourAndPackage';
import CorporateBooking from './pages/CorporateBooking';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from './pages/FAQ';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tour-packages" element={<TourAndPackage />} />
            <Route path="corporate-booking" element={<CorporateBooking />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
