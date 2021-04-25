import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

import "./styles.css";


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};





// And now we can use these
const FormHesab = () => {
  return (
    <>
      
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("الزامی"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("الزامی"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("الزامی"),
          
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="نام و نام خانوادگی صاحب حساب:"
            name="firstName"
            type="text"
            
          />
          <MyTextInput
            label="شماره کارت"
            name="lastName"
            type="number"
            
          />
          <MyTextInput
            label="شماره شبا"
            name="email"
            type="email"
            placeholder="IR"
          />
          
          
        <br/>
          <button type="submit">تایید</button>
        </Form>
      </Formik>
    </>
  );
};
export default FormHesab;
