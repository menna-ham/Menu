import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import BreakFast from './pages/Menu/BreakFast';
import NaveBarClass from './components/NavBar';
import { Provider } from 'react-redux';
import myStore from './store/myStore';
import FavMeal from './pages/FavMeal';
import MealDetails from './pages/MealDetail';
import Lunch from './pages/Menu/Launch';
import Dinner from './pages/Menu/Dinner';
import ShoppingList from './pages/ShoppingList';
import EmptyCart from './pages/EmptyCart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={myStore}>
    <NaveBarClass/>
    <Switch> 
      <Route path= "/menudetails/:id" exact component={MealDetails} />
      <Route path= "/BreakFast" exact component={BreakFast} />
      <Route path= "/Lunch" exact component={Lunch} />
      <Route path= "/Dinner" exact component={Dinner} />
      <Route path= "/shopinglist" exact component={ShoppingList} />
      <Route path= "/empty" exact component={EmptyCart} />
      <Route path= "/favorits" exact component={FavMeal} />
      </Switch>
      </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
