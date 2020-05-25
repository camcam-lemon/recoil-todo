import * as React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { todos, TodoState } from '../../../atoms/todos';
import { Task } from './Task';

function useGetTodoList() {
    const [todoList, setTodoList] = useRecoilState<TodoState>(todos);
    return {
        todoList,
        setTodoList,
    };
}

export const ListView: React.FC = () => {
    const { todoList } = useGetTodoList();

    return (
        <TodoList>
            {todoList.map(({ id, task, done }) => (
                <Task key={id} id={id} done={done}>
                    {task}
                </Task>
            ))}
        </TodoList>
    );
};

const TodoList = styled.ul`
    font-family: Hiragino Sans, 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
