/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { todos, todoLimit, Todo, TodoState } from '../../../atoms/todos';
import TextField from '../../reuse/TextField';
import Button from '../../reuse/Button';

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2rem',
    },
    text: {
        marginRight: '2rem',
    },
};

function useTextField() {
    const [todo, setTodo] = React.useState('');
    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }, []);
    const onReset = React.useCallback(() => {
        setTodo('');
    }, []);

    return { todo, onChange, onReset };
}

function useRegister(todo: string, onReset: () => void) {
    const setTodoList = useSetRecoilState<TodoState>(todos);
    const onRegister = React.useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            if (todo) {
                const newTodo: Todo = {
                    id: performance.now(),
                    task: todo,
                    done: false,
                };
                setTodoList((prev) => [...prev, newTodo]);
                onReset();
            }
        },
        [todo],
    );

    return {
        onRegister,
    };
}

export const InputArea: React.FC = () => {
    const isOver = useRecoilValue<boolean>(todoLimit);
    const { todo, onChange, onReset } = useTextField();
    const { onRegister } = useRegister(todo, onReset);

    return (
        <div style={styles.container}>
            <form>
                <label htmlFor="todoForm">
                    <TextField
                        id="todoForm"
                        value={todo}
                        onChange={onChange}
                        disabled={isOver}
                        styles={styles.text}
                    />
                </label>
                <Button type="submit" onClick={onRegister} disabled={isOver}>
                    登録
                </Button>
            </form>
        </div>
    );
};
