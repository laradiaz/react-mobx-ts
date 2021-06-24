import * as React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            What's the Plan for Today?
          </Typography>
          <TodoAdd />
          <TodoList />
        </div>
      </Container>
    </div>
  );
}

export default App;
