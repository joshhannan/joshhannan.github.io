import Header from './layout/header'
import Main from './layout/main'
import Banner from './components/banner'
import Intro from './components/intro'
import Footer from './layout/footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Banner />
        <Intro
          title="Intro Title"
          content="Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
