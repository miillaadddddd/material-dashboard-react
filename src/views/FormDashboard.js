import React from "react";
import { Formik, Form } from "formik";
import { Container, Grid, Typography, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
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
  firstName: "",
  lastName: "",
  sex:"",
  code:"",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  citey: "",
  state: "",
  countery: "",
  arrivelDate: "",
  deputureDate: "",
  message: "",
  termsOfService: false,
  codePosti:"",
  telephone:"",
  Me:"",
};

const FORM_VALIDAITIOM = Yup.object().shape({
  firstName: Yup.string().required("الزامی"),
  lastName: Yup.string().required("الزامی"),
  email: Yup.string().email("وجود ندارد").required("الزامی"),
  phone: Yup.number()
    .integer()
    .typeError("مقدار  نامجرا است")
    .required("الزامی"),
  addressLine1: Yup.string().required("الزامی"),
  addressLine2: Yup.string(),
  citey: Yup.string().required("الزامی"),
  state: Yup.string().required("الزامی"),
  countery: Yup.string().required("الزامی"),
  arrivelDate: Yup.date().required("الزامی"),
  deputureDate: Yup.date().required("الزامی"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "Ghabool Kardi???")
    .required("hatman bayad bezani"),
  code:Yup.number().integer().typeError("مقدار نامجزا است").required("الزامی"),
  sex:Yup.string().required("الزامی"),
  codePosti:Yup.number().integer().typeError("مقدار نامجزا است").required("الزامی"),
  telephone:Yup.number()
  .integer()
  .typeError("type errorr dadai")
  .required("الزامی"),
  Me:Yup.string(),
});

const FormDashboard = () => {
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
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  
                  <Grid item xs={6}>
                    <Textfield name="firstName" label="نام *" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="lastName" label="نام خانوادگی *" />
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      name="sex"
                      label="جنسیت"
                      options={sex}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="code" label="کد ملی *" />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTimePicker name="arrivelDate" label="تاریخ تولد" />
                  </Grid>
                  <Divider />

                  
                  <Grid item xs={6}>
                    <Textfield name="email" label="ایمیل" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="phone" label="موبایل" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography  variant="h6">آدرس</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      name="countery"
                      label="استان"
                      options={countery}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="state" label="شهرستان" />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="citey" label="شهر" />
                  </Grid>
                  
                  
                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="آدرس" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="addressLine2" label="کد پستی" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="addressLine2" label="تلفن" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="Me" label="من در یک جمله :" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>درباره من</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="از خودت بیشتر بگو"
                      multiline={true}
                      rows={3}
                    />
                  </Grid>

                  
                  <Grid item xs={12}>
                    <Checkbox
                      name=""
                      legend=""
                      label="از صحت تغییرات مطمن هیستم"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>ویرایش</Button>
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

export default FormDashboard;
