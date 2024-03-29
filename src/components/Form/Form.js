import React from "react";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Form.css";
import FormikTextField from "../FormikTextField/FormikTextField";
import postReferenceForm from "../../api/postReferenceForm";
import mapToReferenceForm from "../../utils/mapToReferenceForm";

// Matches yyyyMMdd date format
const dateFormatRegex = new RegExp(
  "([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)"
);

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup.string("Enter your last name").required("Address is required"),
  address: yup.string("Enter your address").required("Address is required"),
  employerName: yup
    .string("Enter your employer name")
    .required("Employer name is required"),
  startDate: yup
    .string("Enter your employment start date")
    .matches(dateFormatRegex, "Date should be in the format yyyymmdd")
    .required("Employment start date is required"),
  endDate: yup
    .string("Enter your employment start date")
    .matches(dateFormatRegex, "Date should be in the format yyyymmdd"),
});

const ReferenceForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      employerName: "",
      startDate: "",
      endDate: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const postData = mapToReferenceForm(values);

      try {
        await postReferenceForm(postData);
        alert("Reference form sent successfully ");
        formik.resetForm();
      } catch (e) {
        alert("Reference form failed to send, please try again");
      }
    },
  });

  return (
    <div>
      <div className="Form-header">Goodlord Referencing Form</div>
      <form onSubmit={formik.handleSubmit} className="Form-form">
        <fieldset className="Form-section" name="personal">
          <legend>Personal</legend>
          <FormikTextField id="firstName" label="First name" formik={formik} />
          <FormikTextField id="lastName" label="Last name" formik={formik} />
          <FormikTextField id="address" label="Address" formik={formik} />
        </fieldset>
        <fieldset className="Form-section" name="employer">
          <legend>Employer</legend>
          <FormikTextField
            id="employerName"
            label="Employer name"
            formik={formik}
          />
          <FormikTextField
            id="startDate"
            label="Employment start date"
            formik={formik}
          />
          <FormikTextField
            id="endDate"
            label="Employment end date"
            formik={formik}
            required={false}
          />
        </fieldset>
        <Button
          color="secondary"
          variant="contained"
          onClick={formik.resetForm}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReferenceForm;
