enum AverageTypes {
    RENT,
    FOOD_EXPENSES,
    WATER_AND_UTILITY_COSTS,
    COMMUNICATION_CONSTS,
    SUPPLIES_EXPENSES,
    ENTERTAINMENT_EXPENSES,
    OTHERS
}

type AverageDataType = [
    { id: AverageTypes, data: number },
    { id: AverageTypes, data: number },
    { id: AverageTypes, data: number },
    { id: AverageTypes, data: number },
    { id: AverageTypes, data: number },
    { id: AverageTypes, data: number },
    { id: AverageTypes, data: number }
];

export const AverageData: AverageDataType = [
    { id: AverageTypes.RENT,                    data: 51964 },
    { id: AverageTypes.FOOD_EXPENSES,           data: 36831 },
    { id: AverageTypes.WATER_AND_UTILITY_COSTS, data: 10304 },
    { id: AverageTypes.COMMUNICATION_CONSTS,    data: 19479 },
    { id: AverageTypes.SUPPLIES_EXPENSES,       data: 9611  },
    { id: AverageTypes.ENTERTAINMENT_EXPENSES,  data: 16706 },
    { id: AverageTypes.OTHERS,                  data: 25664 }
]; 
