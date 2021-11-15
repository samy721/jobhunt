import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Switch } from "react-router"

function App() {
 
  return (
    <div style={{ background: "#EAEAEA" }}>
      <Header />
      <Switch>
        <Route exact path="/">
          <div style={{ height: "300px", display: "flex", justifyContent: 'center', alignItems: 'center' }}><h1>Home</h1></div>
        </Route>
        <Route path="/postJob">
        <div style={{ height: "300px", display: "flex", justifyContent: 'center', alignItems: 'center' }}><h1>This is the post job page</h1></div>
        </Route>
        <Route exact path="/Jobs">
          <Footer />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
