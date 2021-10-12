import { Route, Switch } from 'react-router-dom'
import PageCart from '../Pages/Cart';
import PageHome from '../Pages/Home';
import PageLogin from '../Pages/Login';
import PageRegister from '../Pages/Register';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <PageHome/>
            </Route>

            <Route path="/cart">
                <PageCart/>
            </Route>

            <Route path="/login">
                <PageLogin/>
            </Route>
            <Route path="/register">
                <PageRegister/>
            </Route>
        </Switch>
    )
}
export default Routes;