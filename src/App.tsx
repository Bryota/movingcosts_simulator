import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Top from './components/Top';
import MovingCostindex from './components/InitialCost/Index';
import Monthlyindex from './components/MonthlyCost/Index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/movingcost" exact component={MovingCostindex} />
        <Route path="/monthlycost" exact component={Monthlyindex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
