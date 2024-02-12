
import './App.css';
import { useState } from 'react'
import {Home} from './components/Home'
import {About} from './components/About'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";


function App() {
const [category,setCategory] = useState('');
const clickCategory=(category)=> {
  setCategory(category);
}
  return (
    <>
    <Router basename={'/react-news-app'}>
    <Header clickCategory={clickCategory}/>
    <Routes>
    <Route path="/" exact element={<Home category={category} />} />
    <Route path="/about" exact element={<About />} />
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
