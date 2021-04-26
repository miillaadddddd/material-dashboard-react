import React from "react";
import { Formik, Form } from "formik";
import { Container, Grid, Typography, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Textfield from "./FormUi/Textfield/index.js";
import Select from "./FormUi/Select/index.js";
import DateTimePicker from "./FormUi/DataTimePiker/index.js";
import Checkbox from "./FormUi/Checkbox/index.js";
import Button from "./FormUi/Button/index.js";
import countery from "./data/countery.json";
import sex from "./data/sex.json";

const useStyles = makeStyles((theme) => {
  formWrapper: {
    marginTop: theme.spacing(5);
    marginBottom: theme.spacing(8);
  }
});
const INITIAL_FORM_STATE = {
  fullNameHesab: "",

  NumberCard: "",

  NumberShaba: "",
  
};

const FORM_VALIDAITIOM = Yup.object().shape({

  fullNameHesab: Yup.string().required("الزامی"),

  NumberCard: Yup.number()
    .integer()
    .typeError("مقدار  نامجرا است")
    .required("الزامی"),
    NumberShaba: Yup.number()
    .integer()
    .typeError("مقدار  نامجرا است")
    .required("الزامی"),

  
});

const FormHesabEnfo = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDAITIOM}
              onSubmit={(values) => {
                
                console.log(values);
                alert(JSON.stringify(values, null, 2));
                    
                  
              }}
              
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Textfield name="fullNameHesab" label= "نام و نام خانوادگی صاحب حساب" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="NumberCard" label="شماره کارت" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="NumberShaba" label="شماره شبا " />
                  </Grid>
                  
                  
                  <Grid item xs={12}>
                    <Button type="submit">تایید</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FormHesabEnfo;
