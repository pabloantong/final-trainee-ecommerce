import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../home/Home';
import NavBarTemplate from './NavBarTemplate';
import ItemDetail from '../ItemDetail/ItemDetail';
import Cart from '../Cart/Cart';

const NavBar = () => {
    return (
        <Router>
            <NavBarTemplate/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/producto/:idProducto" exact>
                    <ItemDetail/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar;