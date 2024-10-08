import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Accordion from './components/Accordion/Accordion'
import HexaColor from './components/Hexcolor/HexaColor'
import Stars from './components/Stars/Stars'
import Slider from './components/ImageSlider/Slider'
import LoadData from './components/LoadData/LoadData.jsx'
import TreeView from './components/TreeView/TreeView.jsx'
import QRGenereator from './components/QRCodeGenerator/QRGenereator.jsx'
import Theme from './components/ToggleTheme/index.jsx'
import Scroll from './components/Scroll_Indicator/index.jsx'
import Tictactoe from './components/Tic-Tac-Toe/index.jsx'
import './index.css'
import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Stars nofStars={10}/> */}
    {/* <Slider /> */}
    {/* <LoadData /> */}
    {/* <TreeView /> */}
    {/* <QRGenereator /> */}
    {/* <Theme /> */}
    {/* <Scroll /> */}
    <Tictactoe />
  </StrictMode>,
)
