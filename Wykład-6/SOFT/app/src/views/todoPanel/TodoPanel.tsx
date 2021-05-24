import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import { TodoService } from '../../services/todo.service';
import store from '../../store';
import { Todo } from '../../store/reducers/todos.reducer';
import { todoSelector } from '../../store/selectores/todo.selector';

const TodoPanel = () => {
    const todosActions = useAction(TodoService);
    const todos = useSelector(todoSelector.getAll);
    React.useEffect(() => {
        todosActions.setNewTodo(
            {
                id: 123,
                label: "string",
                done: false,
                description: 'sdsadsa',
            }
        );
    }, []);
    const deleteTodo = (todo: Todo) => {
        todosActions.setDeleteTodo(todo);
    }
    return (<div>{todos.map((todo,index) => (
        <div key={index}>
            <button onClick={ () =>deleteTodo(todo)}>Remove</button>
            <p>{todo.label}</p>
            <p>{todo.done}</p>
            <p>{todo.description}</p>
        </div>
    ))}
    </div>
    );
}
export default TodoPanel;