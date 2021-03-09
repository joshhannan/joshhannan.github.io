import './App.scss'

import Header from './layout/header'
import Main from './layout/main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Footer from './layout/footer'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Blog" component={Blog} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
