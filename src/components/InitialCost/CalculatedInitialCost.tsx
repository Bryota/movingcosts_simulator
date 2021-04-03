import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Furniture from './Furniture';
import { CheckAndSetValue, CheckAndSetValueIncludedDecimal } from '../../utils/CheckAndSetNumberValue';


interface FurnitureCostState {
    furnitureCost: number;
}

const CalculatedInitialCost:React.FC = () => {
    const [rent, setRent] = useState<number>(0);
    const [keyChangeCost, setKeyChangeCost] = useState<number>(20000);
    const [fireInsurancePremium, setFireInsurancePremium] = useState<number>(20000);
    const [shikikinRate, setShikikinRate] = useState<number | string>(1.2);
    const [shikikin, setShikikin] = useState<number>(rent * +shikikinRate);
    const [reikinRate, setReikinRate] = useState<number | string>(1.2);
    const [reikin, setReikin] = useState<number>(rent * +reikinRate);
    const [brokerageFeeRate, setBrokerageFeeRate] = useState<number | string>(0.5);
    const [brokerageFee, setBrokerageFee] = useState<number>(rent * +brokerageFeeRate);
    const [previousRent, setPreviousRent] = useState<number>(rent);
    const [guaranteeChargeRate, setGuaranteeChargeRate] = useState<number | string>(1.0);
    const [guaranteeCharge, setGuaranteeCharge] = useState<number>(rent * +guaranteeChargeRate);
    const [calculatedInitialCost, setCalculatedInitialCost] = useState<number>(0);
    const [IsNum_validation_rent, setIsNum_validation_rent] = useState(false);
    const [IsNum_validation_keyChangeCost, setIsNum_validation_keyChangeCost] = useState(false);
    const [IsNum_validation_fireInsurancePremium, setIsNum_validation_fireInsurancePremium] = useState(false);
    const [IsNum_validation_shikikinRate, setIsNum_validation_shikikinRate] = useState(false);
    const [IsNum_validation_reikinRate, setIsNum_validation_reikinRate] = useState(false);
    const [IsNum_validation_brokerageFeeRate, setIsNum_validation_brokerageFeeRate] = useState(false);
    const [IsNum_validation_guaranteeChargeRate, setIsNum_validation_guaranteeChargeRate] = useState(false);

    const dispatch = useDispatch();
    const furnitureCost = useSelector((state: FurnitureCostState) => state.furnitureCost);

    const changeShikikinRate = () => {
        CheckAndSetValueIncludedDecimal(shikikinRate, rent, setShikikin, setIsNum_validation_shikikinRate);
    }
    const changeReikinRate = () => {
        CheckAndSetValueIncludedDecimal(reikinRate, rent, setReikin, setIsNum_validation_reikinRate);
    }
    const changeBrokerageFeeRate = () => {
        CheckAndSetValueIncludedDecimal(brokerageFeeRate, rent, setBrokerageFee, setIsNum_validation_brokerageFeeRate);
    }
    const changeGuaranteeChargeRate = () => {
        CheckAndSetValueIncludedDecimal(guaranteeChargeRate, rent, setGuaranteeCharge, setIsNum_validation_guaranteeChargeRate);
    }
    const sumCalculatedInitialCost = (e: React.FormEvent) => {
        e.preventDefault();
        setCalculatedInitialCost(shikikin + reikin + brokerageFee + previousRent + guaranteeCharge + keyChangeCost + fireInsurancePremium + calculatedInitialCost);
    }
    const sendTotalCalculatedInitialCost = () => {
        let totalInitialCost = calculatedInitialCost + furnitureCost;
        dispatch({ type: 'SETCALCULATEDINITIALCOST', payload: { calculatedInitialCost: totalInitialCost }});
    }
    return (
        <div className="mt-50">
            <h3>想定される初期費用</h3>
            <form onSubmit={sumCalculatedInitialCost}>
                <div>
                    <label className="label" htmlFor="rent">家賃</label>
                    <span>
                        <input type="text" inputMode="numeric" id="rent" value={rent.toLocaleString()} onChange={e => {
                            CheckAndSetValue(+e.target.value.replace(/,/g, ''), setRent, setIsNum_validation_rent);
                            if (+e.target.value !== NaN) {
                                setRent((pre_rent) => {
                                    setShikikin(Math.round(pre_rent * +shikikinRate));
                                    setReikin(Math.round(pre_rent * +reikinRate));
                                    setBrokerageFee(Math.round(pre_rent * +brokerageFeeRate));
                                    setPreviousRent(pre_rent);
                                    setGuaranteeCharge(Math.round(pre_rent * +guaranteeChargeRate));
                                    return pre_rent;
                                })
                            }
                        }} />
                    円</span>
                    { IsNum_validation_rent && <p className="validation-text">半角数字を入力してください</p> }
                </div>
                <div className="item-option">
                    <label className="label" htmlFor="keyChangeCost">鍵交換費用</label>
                    <span><input type="text" inputMode="numeric" id="keyChangeCost" value={keyChangeCost.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setKeyChangeCost, setIsNum_validation_keyChangeCost)}/>円</span>
                    { IsNum_validation_keyChangeCost && <p className="validation-text">半角数字を入力してください</p> }
                </div>
                <div className="item-option">
                    <label className="label" htmlFor="fireInsurancePremium">鍵交換費用</label>
                    <span><input type="text" inputMode="numeric" id="fireInsurancePremium" value={fireInsurancePremium.toLocaleString()} onChange={e => CheckAndSetValue(+e.target.value.replace(/,/g, ''), setFireInsurancePremium, setIsNum_validation_fireInsurancePremium)}/>円</span>
                    { IsNum_validation_fireInsurancePremium && <p className="validation-text">半角数字を入力してください</p> }
                </div>
                <div className="items-option">
                    <p className="title-option">各料金の割合（単位は月）</p>
                    <div className="item-option">
                        <label className="label" htmlFor="shikikinRate">敷金の割合</label>
                        <span><input className="input-option" type="text" inputMode="decimal" id="shikikinRate" value={shikikinRate} onChange={e => setShikikinRate(e.target.value)}/>ヵ月分</span>
                        <Button className="btn-option" variant="contained" onClick={changeShikikinRate}>変更</Button>
                        { IsNum_validation_shikikinRate && <p className="validation-text">半角数字を入力してください</p> }
                    </div>
                    <div className="item-option">
                        <label className="label" htmlFor="reikinRate">礼金の割合</label>
                        <span><input className="input-option" type="text" inputMode="decimal" id="reikinRate" value={reikinRate} onChange={e => setReikinRate(e.target.value)}/>ヵ月分</span>
                        <Button className="btn-option" variant="contained" onClick={changeReikinRate}>変更</Button>
                        { IsNum_validation_reikinRate && <p className="validation-text">半角数字を入力してください</p> }
                    </div>
                    <div className="item-option">
                        <label className="label" htmlFor="brokerageFeeRate">仲介手数料の割合</label>
                        <span><input className="input-option" type="text" inputMode="decimal" id="brokerageFeeRate" value={brokerageFeeRate} onChange={e => setBrokerageFeeRate(e.target.value)}/>ヵ月分</span>
                        <Button className="btn-option" variant="contained" onClick={changeBrokerageFeeRate}>変更</Button>
                        { IsNum_validation_brokerageFeeRate && <p className="validation-text">半角数字を入力してください</p> }
                    </div>
                    <div className="item-option">
                        <label className="label" htmlFor="guaranteeChargeRate">賃貸保証料の割合</label>
                        <span><input className="input-option" type="text" inputMode="decimal" id="guaranteeChargeRate" value={guaranteeChargeRate} onChange={e => setGuaranteeChargeRate(e.target.value)}/>ヵ月分</span>
                        <Button className="btn-option" variant="contained" onClick={changeGuaranteeChargeRate}>変更</Button>
                        { IsNum_validation_guaranteeChargeRate && <p className="validation-text">半角数字を入力してください</p> }
                    </div>
                </div>
                <TableContainer component={Paper} className="table">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>敷金</TableCell>
                                <TableCell>{shikikin.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>礼金</TableCell>
                                <TableCell>{reikin.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>仲介手数料</TableCell>
                                <TableCell>{brokerageFee.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>前家賃</TableCell>
                                <TableCell>{previousRent.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>賃貸保証料</TableCell>
                                <TableCell>{guaranteeCharge.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>鍵交換費用</TableCell>
                                <TableCell>{keyChangeCost.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>火災保険料</TableCell>
                                <TableCell>{fireInsurancePremium.toLocaleString()}円</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button className="button" variant="contained" type="submit">物件関連の計算</Button>
                <p>物件関連の合計金額：{calculatedInitialCost.toLocaleString()}円</p>
            </form>
            <Furniture />
            <div>
                <h3>想定初期費用を計算する</h3>
                <Button variant="contained" color="primary" onClick={sendTotalCalculatedInitialCost}>送信</Button>
            </div>
        </div>
    )
}

export default CalculatedInitialCost;