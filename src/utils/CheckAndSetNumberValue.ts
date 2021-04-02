const IsNumber = (data: number | string) => {
    if (typeof data === 'number') {
        if (isNaN(data)) {
            return false 
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export const CheckAndSetValue = (e: number | string, setValue: React.Dispatch<React.SetStateAction<number>>, changeValidationValue: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (IsNumber(e)) {
        changeValidationValue(false);
        setValue(+e);
    } else {
        changeValidationValue(true);
    }
}