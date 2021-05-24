import store from "../store";
import { TodosActions } from "../store/actions/todos.actions";
import { Todo } from "../store/reducers/todos.reducer";

export class TodoService {
    setNewTodo(todo:Todo){
        store.dispatch(TodosActions.setNewTodo(todo));
    }
    setTodoDone(todo:Todo){
        store.dispatch(TodosActions.setTodoDone(todo.id));
    }
    setDeleteTodo(todo:Todo){
        store.dispatch(TodosActions.setDeleteTodo(todo));
    }
    }
