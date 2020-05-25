import * as React from 'react';
import { InputArea } from './InputArea';
import { ListView } from './ListView';

export const TodoList: React.FC = () => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <InputArea />
            <ListView />
        </div>
    );
};
