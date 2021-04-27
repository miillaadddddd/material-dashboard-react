import React,{useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fake from './fakeLogin';
import { validateYupSchema } from 'formik';
import { UserConsumer } from 'Context/UserContext';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage(props) {
  const classes = useStyles();
  




  
  
  return (
    <UserConsumer>
      {({ updateUsername, updatePassword, isLogin, checkboxChange }) => (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          <div className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="standard-name"
              label="نام کاربری"
              
              autoComplete="email"
              autoFocus
              onChange={event => {
                updateUsername(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              
              label="رمز عبور"
              type="password"
              id="standard-name"
              autoComplete="current-password"
              onChange={event => {
                updatePassword(event.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox onChange={checkboxChange} value="checked" />}
              label="به خاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                isLogin(props.history);
                console.log(props.history)
              }}
              className={classes.submit}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  فراموشی رمز
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"ثبت نام"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
      )}
    </UserConsumer>
  );
}