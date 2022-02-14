
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Catalog from "./Pages/Catalog";
import Detail from "./Pages/Detail";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";

function App() {
    return (
        <>
            <Header />

            <Switch>
                <Route path="/favorite" component={Favorite} />
                <Route path="/:category/search/:keyword" component={Catalog} />
                <Route path="/:category/:id" component={Detail} />
                <Route path="/:category" component={Catalog} />
                <Route path="/" component={Home} exact />
            </Switch>
            
            <Footer />
        </>
    );
}

export default App;
