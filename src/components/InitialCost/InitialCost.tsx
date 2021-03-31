import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { AverageData } from '../../utils/AverageData';

const InitialCost: React.FC = () => {
    const [initialCost, setInitialCost] = useState<number>(0);
    const dispatch = useDispatch();
    const sendInitialCostToStore = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'SETINITIALCOST', payload: { initialCost }  });
    }
    console.log(AverageData);
    return (
        <>
        <div>
            <form onSubmit={sendInitialCostToStore}>
                <div>
                    <label className="label" htmlFor="income">用意できる初期費用</label>
                    <span><input type="text" id="income" value={initialCost.toLocaleString()} onChange={e => setInitialCost(+e.target.value.replace(/,/g, ''))} />円</span>
                </div>
                <Button className="button" variant="contained" type="submit">送信</Button>
            </form>
        </div>
        </>
    )
}

export default InitialCost;