import React from 'react';
import './App.css';
import InitialCost from './components/InitialCost/InitialCost';
import { Result as InitialCostResult} from './components/InitialCost/Result';
import CalculatedInitialCost from './components/InitialCost/CalculatedInitialCost';
import Income from './components/MonthlyCost/Income';
import Expenditure from './components/MonthlyCost/Expenditure'
import { Result as MonthlyResult }  from './components/MonthlyCost/Result';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="title">引っ越し費用シュミレーター</h1>
      <h2>引っ越し初期費用の計算</h2>
      <InitialCost />
      <CalculatedInitialCost />
      <InitialCostResult />
      <h2>毎月の計算</h2>
      <Income />
      <Expenditure />
      <MonthlyResult />
    </div>
  )
}

export default App;
