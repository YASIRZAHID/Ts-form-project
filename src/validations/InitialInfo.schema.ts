import * as yup from "yup";

export const validationSchemaInitialInfo = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters")
      .max(12, "Username must be at most 12 characters"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Please enter a valid email address"
      ),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(
        /^(?:\+?\d{1,3}\s?)?(?:\d{10}|\d{3}[-\.\s]?\d{3}[-\.\s]?\d{4})$/,
        "Invalid phone number"
      ),
    country: yup
      .string()
      .required("Country is required")
      .matches(
        /^(?!.*\bSelect\b)/,
        "Country is required"
      ),
  });