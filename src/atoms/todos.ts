import { atom, selector } from 'recoil';

export type Todo = {
    id: number;
    task: string;
    done: boolean;
};
export type TodoState = Todo[];

const initialState: TodoState = [];

export const todos = atom({
    key: 'todos',
    default: initialState,
});

export const todoLimit = selector<boolean>({
    key: 'todoLimit',
    get: ({ get }) => get<TodoState>(todos).length >= 5,
});
