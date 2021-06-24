import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Tooltip  } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { observer } from 'mobx-react';
import store from '../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 340,
      marginTop: theme.spacing(3),
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

function TodoListItems() {
  const classes = useStyles();

  return (
    <>
      {store.todos.map((todo) => (
        <Paper component="form" className={classes.root} key={todo.id} elevation={3}>
          <Tooltip title="Click on me to edit" arrow>
          <InputBase
            className={classes.input}
            value={todo.text}
            onChange={(evt) => (todo.text = evt.target.value)}
          />
          </Tooltip>
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="delete"
            onClick={() => {
              store.removeTodo(todo.id);
            }}
          >
            <DeleteOutlineOutlinedIcon
            
            />
          </IconButton>
        </Paper>
      ))}
    </>
  );
}

const ObservedTodoListItems = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <ObservedTodoListItems />
    </>
  );
}

export default TodoList;
