import React from "react";
import TextField from "@material-ui/core/TextField";

const FormikTextField = ({ formik, id, label, required }) => (
  <TextField
    fullWidth
    id={id}
    name={id}
    label={label}
    value={formik.values[id]}
    onChange={formik.handleChange}
    error={formik.touched[id] && Boolean(formik.errors[id])}
    helperText={formik.touched[id] && formik.errors[id]}
    required={required}
  />
);

export default FormikTextField;
