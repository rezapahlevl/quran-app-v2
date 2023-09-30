import Navbar from './components/navigations/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Tafsir from './pages/Tafsir';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:nomor" element={<Detail />} />
            {/* <Route path="/tafsir/:nomor" element={<Tafsir />} /> */}
          </Routes>
        </HashRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App
