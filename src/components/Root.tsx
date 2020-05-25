import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { TodoList } from './TodoList';

export const Root: React.FC = () => (
    <RecoilRoot>
        <TodoList />
    </RecoilRoot>
);
