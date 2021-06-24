import * as React from 'react';
import {
  Button,
  TextField,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from "mobx-react";

import store from "../store";

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  function TodoAdd() {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="newTask"
              label="Enter new task"
              name="newTask"
              autoComplete="newTask"
              autoFocus
              onChange={(evt) => (store.newTodo = evt.target.value)}
              value={store.newTodo}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                store.addTodo()
              }}
            >
              Add task
            </Button>
          </form>
        </div>
      </Container>
    );
  }
  
  export default observer(TodoAdd);