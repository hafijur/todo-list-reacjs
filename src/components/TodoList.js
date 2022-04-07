import React from 'react';
import TodoCard from './TodoCard';

const TodoList = props => {

    const getTodoId = (id) => props.getTodoId(id);
    
    const tododList = props.todoList.map((todo, index) => <TodoCard key={index} todo={todo} getTodoId= {getTodoId}  />);
    
    return (
        <div>
            <h3>Todo List</h3>
            {tododList}
        </div>
    );
};

export default TodoList;