import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { CheckAndSetValue } from '../../utils/CheckAndSetNumberValue';

const InitialCost: React.FC = () => {
    const [initialCost, setInitialCost] = useState<number>(0);
    const [IsNum_validation, setIsNum_validation] = useState(false);
    const dispatch = useDispatch();
    const sendInitialCostToStore = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'SETINITIALCOST', payload: { initialCost }  });
    }
    return (
        <>
        <div>
            <form onSubmit={sendInitialCostToStore}>
                <div>
                    <h3>用意できる初期費用</h3>
                    <label className="label" htmlFor="income">用意できる初期費用</label>
                    <span><input type="text" inputMode="numeric" id="income" value={initialCost.toLocaleString()} onChange={(e) => { CheckAndSetValue(+e.target.value.replace(/,/g, ''), setInitialCost, setIsNum_validation)}} />円</span>
                    { IsNum_validation && <p className="validation-text">半角数字を入力してください</p> }
                </div>
                <Button className="button" variant="contained" color="primary" type="submit">送信</Button>
            </form>
        </div>
        </>
    )
}

export default InitialCost;