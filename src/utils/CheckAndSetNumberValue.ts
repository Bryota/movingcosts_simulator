const IsNumber = (data: number | string) => {
    data = Number(data);
    if (typeof data === 'number') {
        if (!isNaN(data)) {
            return true 
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const CheckAndSetValue = (e: number | string, setValue: React.Dispatch<React.SetStateAction<number>>, changeValidationValue: React.Dispatch<React.SetStateAction<boolean>>) => {
    // console.log(e);
    if (IsNumber(e)) {
        changeValidationValue(false);
        setValue(+e);
    } else {
        changeValidationValue(true);
    }
}

export const CheckAndSetValueIncludedDecimal = (data: number | string, rent: number, setValue: React.Dispatch<React.SetStateAction<number>>, changeValidationValue: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (isNaN(+data)) {
        changeValidationValue(true);
    } else {
        setValue(Math.round(rent * +data));
        changeValidationValue(false);
    }
}