import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface FurnitureItem {
    name: string,
    price: number,
    status: boolean
}

const Furniture: React.FC = () => {
    const dispatch = useDispatch();
    const [furnitureStatus, setFurnitureStatus] = useState({
        'washingMachine': false,
        'refrigerator': false,
        'microwave': false,
        'TV': false,
        'vacuumCleaner': false,
        'illumination': false,
        'table': false,
        'curtain': false,
        'bed': false,
        'riceCooker': false
    });
    const furnitureList = [
        { name: '洗濯機', price: 30000, status: furnitureStatus.washingMachine },
        { name: '冷蔵庫', price: 40000, status: furnitureStatus.refrigerator },
        { name: '電子レンジ', price: 15000, status: furnitureStatus.microwave },
        { name: 'テレビ', price: 40000, status: furnitureStatus.TV },
        { name: '掃除機', price: 30000, status: furnitureStatus.vacuumCleaner },
        { name: '照明', price: 10000, status: furnitureStatus.illumination },
        { name: 'テーブル', price: 5000, status: furnitureStatus.table },
        { name: 'カーテン', price: 5000, status: furnitureStatus.curtain },
        { name: 'ベッド', price: 15000, status: furnitureStatus.bed },
        { name: '炊飯器', price: 25000, status: furnitureStatus.riceCooker },
    ];
    const [checkedFurnitureList, setCheckedFurnitureList] = useState<FurnitureItem[]>([{ name: '', price: 0, status: false}]);
    const [totalFurnitureCost, setTotalFurnitureCost] = useState<number>(0)
    const changeFurnitureStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFurnitureStatus({...furnitureStatus, [e.target.name]: e.target.checked});
    }
    const sendFurnitureCostToStore = () => {
        setCheckedFurnitureList(furnitureList.filter(furniture => furniture.status === true));
        setCheckedFurnitureList((pre_checkedFurnitureList) => {
            let totalCost = 0;
            for (const item of pre_checkedFurnitureList) {
                totalCost = totalCost + item.price;
            }
            setTotalFurnitureCost(totalCost);
            setTotalFurnitureCost((pre_totalFurnitureCost) => {
                dispatch({ type: 'SETFURNITURECOST', payload : { furnitureCost: pre_totalFurnitureCost }});
                return pre_totalFurnitureCost;
            });
            return pre_checkedFurnitureList;
        });
    }
    return (
        <>
            <h3>家具一覧</h3>
            <p>必要な家具を選択してください。平均価格がセットされます。</p>
            <FormGroup row className="select-input">
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.washingMachine}
                        name='washingMachine'
                        onChange={changeFurnitureStatus}
                    />}
                    label="洗濯機"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.refrigerator}
                        name='refrigerator'
                        onChange={changeFurnitureStatus}
                />}
                    label="冷蔵庫"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.microwave}
                        name='microwave'
                        onChange={changeFurnitureStatus}
                />}
                    label="電子レンジ"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.TV}
                        name='TV'
                        onChange={changeFurnitureStatus}
                />}
                    label="テレビ"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.vacuumCleaner}
                        name='vacuumCleaner'
                        onChange={changeFurnitureStatus}
                />}
                    label="掃除機"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.illumination}
                        name='illumination'
                        onChange={changeFurnitureStatus}
                />}
                    label="照明"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.table}
                        name='table'
                        onChange={changeFurnitureStatus}
                />}
                    label="テーブル"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.curtain}
                        name='curtain'
                        onChange={changeFurnitureStatus}
                />}
                    label="カーテン"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.bed}
                        name='bed'
                        onChange={changeFurnitureStatus}
                />}
                    label="ベッド"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={furnitureStatus.riceCooker}
                        name='riceCooker'
                        onChange={changeFurnitureStatus}
                />}
                    label="炊飯器"
                />
            </FormGroup>
            <TableContainer component={Paper} className="table">
                <Table>
                    <TableBody>
                        {checkedFurnitureList.map((furniture) => {
                            if (furniture.status) {
                                return (
                                    <TableRow>
                                        <TableCell>{furniture.name}</TableCell>
                                        <TableCell>{furniture.price.toLocaleString()}円</TableCell>
                                    </TableRow>
                                )
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button className="button" variant="contained" onClick={sendFurnitureCostToStore}>計算</Button>
            <p>家具の合計金額：{totalFurnitureCost.toLocaleString()}円</p>
        </>
    )
}

export default Furniture;