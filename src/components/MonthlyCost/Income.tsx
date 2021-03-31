import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';


const Income: React.FC = () => {
    const [income, setIncome] = useState<number | string>();
    const dispatch = useDispatch();
    const sendIncomeToStore = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'SETINCOME', payload: { income } });
    }
    return (
        <div>
            <form onSubmit={sendIncomeToStore}>
                <div>
                    <label htmlFor="income" className="label">収入</label>
                    <span><input type="text" id="income" value={income?.toLocaleString()} onChange={e => setIncome(+e.target.value.replace(/,/g, ''))} />円</span>
                </div>
                <Button className="button" variant="contained" type="submit">送信</Button>
            </form>
        </div>
    )
}

export default Income;