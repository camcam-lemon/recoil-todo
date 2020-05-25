import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { GRAY, NAVY, GREEN } from '../../colors';

type NativeInputProps = JSX.IntrinsicElements['input'];
type Event = React.ChangeEvent<HTMLInputElement>;

export type TextFieldProps = {
    value?: NativeInputProps['value'];
    name?: NativeInputProps['name'];
    id?: NativeInputProps['id'];
    type?: NativeInputProps['type'];
    disabled?: NativeInputProps['disabled'];
    placeholder?: NativeInputProps['placeholder'];
    styles?: React.CSSProperties;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function useTextFiled(
    pValue: TextFieldProps['value'],
    pChange: TextFieldProps['onChange'],
): [NativeInputProps['value'], (e: Event) => void] {
    const [value, setValue] = useState(pValue);

    const onChange = useCallback(
        (e: Event) => {
            setValue(e.target.value);
            if (pChange) pChange(e);
        },
        [pChange],
    );

    useEffect(() => {
        setValue(pValue);
    }, [pValue]);

    return [value, onChange];
}

function TextFiled({
    value: pValue,
    id,
    name,
    type = 'text',
    disabled,
    placeholder,
    styles,
    onChange: pChange,
    ...props
}: TextFieldProps) {
    const [value, onChange] = useTextFiled(pValue, pChange);

    return (
        <Input
            value={value}
            id={id}
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            style={styles}
            onChange={onChange}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

const Input = styled.input`
    font-family: Hiragino Sans, 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
    font-weight: 300;
    width: 360px;
    height: 32px;
    font-size: 1rem;
    background-color: ${GRAY.default};
    color: ${NAVY.default};
    margin: 0;
    padding: 0 8px;
    border: 1px solid ${GRAY.default};
    outline: none;
    border-radius: 4px;
    line-height: 20px;
    letter-spacing: -0.4px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    :focus {
        border: 1px solid ${GREEN.default};
    }

    :disabled {
        pointer-events: none;
        background-color: ${GRAY.hover};
        color: ${GRAY.default};
    }

    ::-webkit-input-placeholder {
        color: ${GRAY.press};
        letter-spacing: -0.35px;
    }
`;

export default TextFiled;
