import { useState } from 'react';

const useForm: any = (onChangeHandler: any, field: any) => {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [fieldValue, setFieldValue] = useState('');

    const fieldChangeHandler = (event: any) => {
        setIsTouched(true);
        if(event.target.value.trim() !== '') {
            if(field.type === 'email') {
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value.trim())) {
                    setIsValid(true);
                    setFieldValue(event.target.value);
                    onChangeHandler({name: field.name, value: event.target.value, isValid: true, type: field.type});
                } else {
                    setIsValid(false);
                    setFieldValue('');
                    onChangeHandler({name: field.name, value: '', isValid: false, type: field.type});
                }
            } else {
                setIsValid(true);
                setFieldValue(event.target.value);
                onChangeHandler({name: field.name, value: event.target.value, isValid: true, type: field.type});
            }

        } else {
            setIsValid(false);
            setFieldValue('');
            onChangeHandler({name: field.name, value: '', isValid: false, type: field.type});
        }
    }

    const resetField = () => {
        setIsTouched(false);
    }

    return {
        fieldValue,
        isValid,
        isTouched,
        fieldChangeHandler,
        resetField
    }
}

export default useForm;