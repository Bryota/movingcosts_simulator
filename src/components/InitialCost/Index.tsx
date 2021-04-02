import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import InitialCost from './InitialCost';
import { Result as InitialCostResult} from './Result';
import CalculatedInitialCost from './CalculatedInitialCost';

const MovingCostindex: React.FC = () => {
    return (
    <div className="app">
      <h1 className="title">引っ越し費用シュミレーター</h1>
      <Container maxWidth="sm">
        <h2>引っ越し初期費用の計算</h2>
        <InitialCost />
        <CalculatedInitialCost />
        <InitialCostResult />
        <Link to="/monthlycost">毎月の計算</Link>
      </Container>
    </div>
    )
}

export default MovingCostindex;
