import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './components/A2.jpg'
import Books from './components/Books'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import details from './data/details'



function App() {
  return (
    <>
    <Router>
        <Navigation />
       
          <Route exact path='/'>
            <Books details={details.books} img={img}/>
            </Route>
        
        
    </Router> 
    <Footer/>
    </>

  );
}

export default App;
