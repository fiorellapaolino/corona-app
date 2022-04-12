import { BrowserRouter as Router, Route } from 'react-router-dom';
/* import NotFoundPage from './pages/NotFound/NotFoundPage' */
import './app.scss'
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Countries from './pages/Countries/Countries';

function App() {
  return (
    <Router>
        <div className="content">
          <Nav/>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/Forms" exact={true} component={Countries}></Route>
        </div>
      {/* <Route path="*" component={NotFoundPage}></Route> */}
    </Router>
  );
}

export default App;
