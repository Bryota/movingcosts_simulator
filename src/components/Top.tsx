import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Top: React.FC = () => {
    return (
        <>
        <div className="app">
            <h1 className="title">引っ越し費用シミュレーター</h1>
            <div className="top-wrap">
                <Button variant="contained">
                    <Link to="/movingcost">初期予算計算</Link>
                </Button>
            </div>
            <div className="top-wrap">
                <Button variant="contained">
                    <Link to="/monthlycost">毎月の計算</Link>
                </Button>
            </div>
        </div>
        </>
    )
}

export default Top;