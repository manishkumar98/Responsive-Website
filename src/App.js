import { Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};
export default App;
/*{}*/
