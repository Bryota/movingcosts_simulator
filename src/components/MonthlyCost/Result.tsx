import React from 'react';
import { useSelector } from 'react-redux';

interface IncomeState {
    income: number;
}
interface ExpenditureState {
    expenditure: number;
}

export const Result: React.FC = () => {
    const income = useSelector((state: IncomeState) => state.income);
    const expenditure = useSelector((state: ExpenditureState) => state.expenditure);
    const balance = income - expenditure; 
    return (
        <>
            <p>収入：{income.toLocaleString()}円</p>
            <p>出費：{expenditure.toLocaleString()}円</p>
            {(() => {
                if (balance >= 0) {
                    return <p>残高：{balance.toLocaleString()}円</p>
                } else {
                    return <p>残高：<span className="alert">{balance.toLocaleString()}円</span></p>
                }
            })()}
        </>
    )
}
