import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AverageData } from '../../utils/AverageData';
const Expenditure: React.FC = () => {
        const [rent, setRent] = useState<number>(0);
        const [foodExepnses, setFoodExpenses] = useState<number>(0);
        const [waterAndUtilityCosts, setWaterAndUTilityCosts] = useState<number>(0);
        const [communicationCosts, setCommunicationCosts] = useState<number>(0);
        const [suppliesExpenses, setSuppliesExpenses] = useState<number>(0);
        const [entertainmentExpenses, setEntertainmentExpenses] = useState<number>(0);
        const [otherCosts, setOtherCosts] = useState<number>(0);
        const [expenditure, setExpenditure] = useState<number>(0);
        const dispatch = useDispatch();

        const setAverageData = () => {
            for (const data of AverageData) {
                switch (data.id) {
                    case 0:
                        setRent(data.data);
                        break;
                    case 1:
                        setFoodExpenses(data.data);
                        break;
                    case 2:
                        setWaterAndUTilityCosts(data.data);
                        break;
                    case 3:
                        setCommunicationCosts(data.data);
                        break;
                    case 4:
                        setSuppliesExpenses(data.data);
                        break;
                    case 5:
                        setEntertainmentExpenses(data.data);
                        break;
                    case 6:
                        setOtherCosts(data.data);
                        break;
                    default:
                        break;
                    }
            }
        }
        const sendExpenditureToStore = (e: React.FormEvent) => {
            e.preventDefault();
            const totalExpenditure = rent + foodExepnses + waterAndUtilityCosts + communicationCosts + suppliesExpenses + entertainmentExpenses + otherCosts;
            setExpenditure(totalExpenditure);
            setExpenditure((pre_expenditure) => {
                dispatch({ type: 'SETEXPENDITURE', payload: { expenditure: pre_expenditure } });
                return pre_expenditure;
            })
        }
        return (
            <div>
                <TableContainer component={Paper} className="table">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>家賃</TableCell>
                                <TableCell><span><input type="text" id="rent" value={rent.toLocaleString()} onChange={e => setRent(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>食費</TableCell>
                                <TableCell><span><input type="text" id="foodExpenses" value={foodExepnses.toLocaleString()} onChange={e => setFoodExpenses(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>水道・光熱費</TableCell>
                                <TableCell><span><input type="text" id="waterAndUtilityCosts" value={waterAndUtilityCosts.toLocaleString()} onChange={e => setWaterAndUTilityCosts(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>交通・通信費</TableCell>
                                <TableCell><span><input type="text" id="communicationCosts" value={communicationCosts.toLocaleString()} onChange={e => setCommunicationCosts(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>消耗品費</TableCell>
                                <TableCell><span><input type="text" id="suppliesExpenses" value={suppliesExpenses.toLocaleString()} onChange={e => setSuppliesExpenses(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>交際費</TableCell>
                                <TableCell><span><input type="text" id="entertainmentExpenses" value={entertainmentExpenses.toLocaleString()} onChange={e => setEntertainmentExpenses(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>その他</TableCell>
                                <TableCell><span><input type="text" id="otherCosts" value={otherCosts.toLocaleString()} onChange={e => setOtherCosts(+e.target.value.replace(/,/g, ''))}/>円</span></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <Button className="button" variant="contained" onClick={setAverageData}>平均を使用する</Button>
                </div>
                <div>
                    <Button className="button" variant="contained" onClick={sendExpenditureToStore}>送信</Button>
                </div>
            </div>
        )
}

export default Expenditure;