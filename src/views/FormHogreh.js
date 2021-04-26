import React from "react";
import { Formik, Form, Field } from "formik";
import { Container, Grid, Typography, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Textfield from "./FormUi/Textfield/index.js";
import Select from "./FormUi/Select/index.js";
import DateTimePicker from "./FormUi/DataTimePiker/index.js";
import Checkbox from "./FormUi/Checkbox/index.js";
import Button from "./FormUi/Button/index.js";
import TextInputLiveFeedback from "./FormUi/TextInputLiveFeedback/index.js";
import countery from "./data/countery.json";
import sex from "./data/sex.json";

const useStyles = makeStyles((theme) => {
  formWrapper: {
    marginTop: theme.spacing(5);
    marginBottom: theme.spacing(8);
  }
});
const INITIAL_FORM_STATE = {
  nameShop: "",
  slugShop: "",
  aboutShop: "",
  introShop: "",
  citey: "",
  state: "",
  countery: "",
  termsOfService: false,
};

const FORM_VALIDAITIOM = Yup.object().shape({
  citey: Yup.string().required("الزامی"),
  state: Yup.string().required("الزامی"),
  countery: Yup.string().required("الزامی"),
  aboutShop: Yup.string(),
  introShop: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "Ghabool Kardi???")
    .required("hatman bayad bezani"),
  nameShop: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Username is required")
    .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces"),
  slugShop: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Username is required")
    .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces"),
});

const FormHogreh = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        
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
                    <TextInputLiveFeedback
                      label="عنوان حجره"
                      id="nameShop"
                      name="nameShop"
                      helpText="عنوان باید فارسی و حداکثر70 کارکتر داشته باشد."
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInputLiveFeedback
                      label="شناسه حجره"
                      id="slugShop"
                      name="slugShop"
                      helpText="شناسه حجره باید شامل حروف انگلیسی کوچک و خط تیره (-)و بدون فاصله باشد."
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="aboutShop"
                      label="درباره حجره"
                      multiline={true}
                      rows={3}
                      helperText="حجره خود را به صورت کامل معرفی نمایید."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="introShop"
                      label="معرفی حجره دار"
                      multiline={true}
                      rows={2}
                      helperText="متن کوتاهی با حداکثر 200 کارکتر در مورد خودتان"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6">آدرس</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Select name="countery" label="استان" options={countery} />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="state" label="شهرستان" />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="citey" label="شهر" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>روز های تعطیل</Typography>
                  </Grid>
                  <label>
                    <Field type="checkbox" name="checked" value="1" />
                    شنبه
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="2" />
                    یکشنبه
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="3" />
                    دوشنبه
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="4" />
                    سه شنبه
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="5" />
                    چهارشنبه
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="6" />
                    پنجشنبه
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="7" />
                    جمعه
                  </label>
                  <Grid item xs={12}>
                    <Typography variant="caption" display="block" gutterBottom>
                      روزهای که حجره شما فعالیت ندارد را وارد نمایید
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox name="" legend="" label="قبول قرار داد و ضوابط" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      تمامی قوانین را از صفحه قوانین سایت مطالعه کردم و آنها را
                      می پذیرم.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit">ویرایش</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        
      </Grid>
    </Grid>
  );
};

export default FormHogreh;
