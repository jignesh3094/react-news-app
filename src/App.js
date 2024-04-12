
import './App.css';

import {Home} from './components/Home'
import {Details} from './components/Details'
import {PostNews} from './components/PostNews'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import State from './context/State';


function App() {
// const [category,setCategory] = useState('');
// const clickCategory=(category)=> {
//   setCategory(category);
// }
  return (

    <>
    <State>
    <Router basename={"/react-news-app"}>
    <Header/>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/postnews" exact element={<PostNews />} />
    
    <Route path=":id" exact element={<Details />} />
    </Routes>
    </Router>
    <Footer/>
    </State>
   
    </>
  );
}

export default App;
