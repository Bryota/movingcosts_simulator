import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { CheckAndSetValue } from '../../utils/CheckAndSetNumberValue';


const Income: React.FC = () => {
    const [income, setIncome] = useState<number>(0);
    const [IsNum_validation_income, setIsNum_validation_income] = useState(false);
    const dispatch = useDispatch();
    const sendIncomeToStore = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'SETINCOME', payload: { income } });
    }
    return (
        <div>
            <h3>毎月の収入</h3>
            <form onSubmit={sendIncomeToStore}>
                <div>
                    <label htmlFor="income" className="label">収入</label>
                    <span><input type="text" inputMode="numeric" id="income" value={income?.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setIncome, setIsNum_validation_income)} />円</span>
                    { IsNum_validation_income && <p className="validation-text">半角数字を入力してください</p> }
                </div>
                <Button className="button mb-30" variant="contained" color="primary" type="submit">送信</Button>
            </form>
        </div>
    )
}

export default Income;