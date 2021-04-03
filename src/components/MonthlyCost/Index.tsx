import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Income from './Income';
import Expenditure from './Expenditure'
import { Result as MonthlyResult }  from './Result';

const Monthlyindex: React.FC= () => {
    return (
    <div className="app">
      <h1 className="title">引っ越し費用シミュレーター</h1>
      <Container maxWidth="sm">
        <h2>毎月の計算</h2>
        <Income />
        <Expenditure />
        <MonthlyResult />
        <Link to="/movingcost">初期予算計算</Link>
      </Container>
    </div>
    )
}

export default Monthlyindex;