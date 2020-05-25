import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Button from '../../reuse/Button';
import { todos, TodoState } from '../../../atoms/todos';

const styles: { [key: string]: React.CSSProperties } = {
    list: {
        padding: '0.25rem',
    },
    todo: {
        display: 'inline-flex',
        marginRight: '0.5rem',
    },
    todoName: {
        width: '240px',
    },
    button: {
        width: '60px',
        margin: '0 10px',
    },
};

type Props = {
    id: number;
    done: boolean;
};

function useTodoAction({ id }: { id: number }) {
    const setTodos = useSetRecoilState<TodoState>(todos);

    const onDone = () => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: true } : todo)));
    };
    const onDelete = () => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return { onDone, onDelete };
}

export const Task: React.FC<Props> = React.memo(({ id, done, children }) => {
    const { onDone, onDelete } = useTodoAction({ id });

    return (
        <li key={id} style={styles.list}>
            <div style={styles.todo}>
                <Todo done={done}>{children}</Todo>
                <Button styles={styles.button} onClick={onDone} disabled={done}>
                    完了
                </Button>
                <Button styles={styles.button} onClick={onDelete}>
                    削除
                </Button>
            </div>
        </li>
    );
});

const Todo = styled.div<{ done: boolean }>`
    width: 240px;
    text-decoration: ${({ done }) => (done ? 'line-through' : 'unset')};
`;
