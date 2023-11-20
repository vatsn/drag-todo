import { v4 as uuid } from 'uuid';

export const myTodos = [
    {
        id: uuid(),
        name: 'Apple',
        completed: false,
    },
    {
        id: uuid(),
        name: 'Orange',
        completed: false
    },
    {
        id: uuid(),
        name: 'Mango',
        completed: false
    }
]