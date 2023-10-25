import * as yup from "yup";

export const PasswordScreenValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters"),
    repeatPassword: yup
      .string()
      .required("Repeat Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });