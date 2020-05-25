import React from 'react';
import styled from 'styled-components';
import { GRAY, NAVY } from '../../colors';

export type ButtonProps = {
    disabled?: boolean;
    styles?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: string;
} & Omit<JSX.IntrinsicElements['button'], 'ref'>;

function Button({ styles, disabled = false, onClick, children, ...props }: ButtonProps) {
    return (
        <Base
            onClick={onClick}
            disabled={disabled}
            style={styles}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </Base>
    );
}

const Base = styled.button`
    font-family: Hiragino Sans, 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
    font-weight: 300;
    width: 120px;
    height: 36px;
    border: solid 1px ${GRAY.hover};
    border-radius: 6px;
    background-color: ${GRAY.default};
    color: ${NAVY.dark};
    font-size: 1rem;
    cursor: pointer;

    :disabled {
        background-color: ${GRAY.default};
        color: ${GRAY.hover};
        cursor: default;
        pointer-events: none;
    }

    :hover {
        background-color: ${GRAY.hover};
    }
    :active {
        background-color: ${GRAY.press};
    }
    :focus {
        outline: none;
    }
`;
Base.displayName = 'Button';

export default Button;
