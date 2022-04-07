import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  cardPadding: {
    padding: "15px",
    marginTop : "15px"
  }
}));

function App() {

  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    setTodos([ ...todos, {id: uuid(), ...todo} ]);
    console.log(todo);
  }

  useEffect(() => {
    const retrieveTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(retrieveTodos);
    if (retrieveTodos) setTodos(retrieveTodos);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) );
  }, [todos]);

  const removeTodoHandler = (id) => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  }
  const style = useStyles();
  return (
    <div>
        <Header />
        <Container>
          <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={style.cardPadding} >
                  <AddTodo addTodoHandler={ addTodoHandler }/>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={style.cardPadding} >
                  <TodoList todoList={todos} getTodoId={ removeTodoHandler}/>
                </Paper>
              </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
