import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header" ;
import Footer from "./components/footer" ;
import Router from "./router/index" ;
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
    
  );
}

export default App;
