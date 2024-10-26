import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Text from './Text/Text'
import Home from './Home/Home';
import About from './About/About';
import Image from './Image/Image';
import Weather from './Weather/Weather';
import News from './News/News';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/text" element={<Text />} />
      <Route path="/images" element={<Image />} />
      <Route path="/about" element={<About />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/news" element={<News />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
