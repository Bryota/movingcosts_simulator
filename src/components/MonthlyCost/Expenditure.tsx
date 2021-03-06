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
import { CheckAndSetValue } from '../../utils/CheckAndSetNumberValue';

const Expenditure: React.FC = () => {
        const [rent, setRent] = useState<number>(0);
        const [foodExepnses, setFoodExpenses] = useState<number>(0);
        const [waterAndUtilityCosts, setWaterAndUTilityCosts] = useState<number>(0);
        const [communicationCosts, setCommunicationCosts] = useState<number>(0);
        const [suppliesExpenses, setSuppliesExpenses] = useState<number>(0);
        const [entertainmentExpenses, setEntertainmentExpenses] = useState<number>(0);
        const [otherCosts, setOtherCosts] = useState<number>(0);
        const [expenditure, setExpenditure] = useState<number>(0);
        const [IsNum_validation_rent, setIsNum_validation_rent] = useState(false);
        const [IsNum_validation_foodExepnses, setIsNum_validation_foodExepnses] = useState(false);
        const [IsNum_validation_waterAndUtilityCosts, setIsNum_validation_waterAndUtilityCosts] = useState(false);
        const [IsNum_validation_communicationCosts, setIsNum_validation_communicationCosts] = useState(false);
        const [IsNum_validation_suppliesExpenses, setIsNum_validation_suppliesExpenses] = useState(false);
        const [IsNum_validation_entertainmentExpenses, setIsNum_validation_entertainmentExpenses] = useState(false);
        const [IsNum_validation_otherCosts, setIsNum_validation_otherCosts] = useState(false);

        const dispatch = useDispatch();

        const setAverageData = () => {
            for (const data of AverageData) {
                switch (data.id) {
                    case 0:
                        setRent(data.data);
                        setIsNum_validation_rent(false);
                        break;
                    case 1:
                        setFoodExpenses(data.data);
                        setIsNum_validation_foodExepnses(false);
                        break;
                    case 2:
                        setWaterAndUTilityCosts(data.data);
                        setIsNum_validation_waterAndUtilityCosts(false);
                        break;
                    case 3:
                        setCommunicationCosts(data.data);
                        setIsNum_validation_communicationCosts(false);
                        break;
                    case 4:
                        setSuppliesExpenses(data.data);
                        setIsNum_validation_suppliesExpenses(false);
                        break;
                    case 5:
                        setEntertainmentExpenses(data.data);
                        setIsNum_validation_entertainmentExpenses(false);
                        break;
                    case 6:
                        setOtherCosts(data.data);
                        setIsNum_validation_otherCosts(false);
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
                <h3>???????????????</h3>
                <TableContainer component={Paper} className="table">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>??????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="rent" className="expenditure-input" value={rent.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setRent, setIsNum_validation_rent)}/>???</span>
                                    { IsNum_validation_rent && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>??????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="foodExpenses" className="expenditure-input" value={foodExepnses.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setFoodExpenses, setIsNum_validation_foodExepnses)}/>???</span>
                                    { IsNum_validation_foodExepnses && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>??????????????????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="waterAndUtilityCosts" className="expenditure-input" value={waterAndUtilityCosts.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setWaterAndUTilityCosts, setIsNum_validation_waterAndUtilityCosts)}/>???</span>
                                    { IsNum_validation_waterAndUtilityCosts && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>??????????????????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="communicationCosts" className="expenditure-input" value={communicationCosts.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setCommunicationCosts, setIsNum_validation_communicationCosts)}/>???</span>
                                    { IsNum_validation_communicationCosts && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>????????????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="suppliesExpenses" className="expenditure-input" value={suppliesExpenses.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setSuppliesExpenses, setIsNum_validation_suppliesExpenses)}/>???</span>
                                    { IsNum_validation_suppliesExpenses && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>?????????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="entertainmentExpenses" className="expenditure-input" value={entertainmentExpenses.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setEntertainmentExpenses, setIsNum_validation_entertainmentExpenses)}/>???</span>
                                    { IsNum_validation_entertainmentExpenses && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>?????????</TableCell>
                                <TableCell>
                                    <span><input type="text" inputMode="numeric" id="otherCosts" className="expenditure-input" value={otherCosts.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setOtherCosts, setIsNum_validation_otherCosts)}/>???</span>
                                    { IsNum_validation_otherCosts && <p className="validation-text">???????????????????????????????????????</p> }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <Button className="button" variant="contained" onClick={setAverageData}>?????????????????????</Button>
                </div>
                <div>
                    <Button className="button" variant="contained" color="primary" onClick={sendExpenditureToStore}>??????</Button>
                </div>
            </div>
        )
}

export default Expenditure;