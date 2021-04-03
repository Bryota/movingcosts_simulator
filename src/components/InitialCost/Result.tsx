import React from 'react';
import { useSelector } from 'react-redux';

interface InitialCostState {
    initialCost: number;
    calculatedInitialCost: number;
}

export const Result: React.FC = () => {
    const initialCost = useSelector((state: InitialCostState) => state.initialCost);
    const calculatedInitialCost = useSelector((state: InitialCostState) => state.calculatedInitialCost);
    const balance = initialCost - calculatedInitialCost;
    return (
        <>
            <h3>合計の計算</h3>
            <p>用意できる初期費用：{initialCost.toLocaleString()}円</p>
            <p>想定される初期費用：{calculatedInitialCost.toLocaleString()}円</p>
            {(() => {
                if (balance >= 0) {
                    return <p>差額：{balance.toLocaleString()}円</p>
                } else {
                    return <p>差額：<span className="alert">{balance.toLocaleString()}円</span></p>
                }
            })()}
        </>
    )
}
