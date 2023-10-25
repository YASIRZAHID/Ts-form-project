import { useFormik } from "formik";
import { PasswordScreenValidationSchema as validationSchema } from "../validations/PasswordScreen.schema";
import React from "react";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import StageMarks from "./StageMarks";
import Header from "./Header";
import CustomInput from "./CustomInput";

type PasswordScreenProps = {
  formData: any;
  setFormData: any;
  nextStep: any;
};

const PasswordScreen = (props: PasswordScreenProps) => {
  const { formData, setFormData, nextStep } = props;
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    initialErrors: {
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { password } = values;
      setFormData({ ...formData, password: password });
      nextStep();
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className=" bg-gradient-to-b from-purple-50 via-blue-50 to-purple-50">
      <Header headerText="Super test Form" headerDescription="Password Screen"/>
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative -translate-x-[20%] -translate-y-[180%] h-[10%] w-[20%]">
          <StageMarks bulletColor="#87839E" bulletText="Initial Info" />
          <StageMarks
            bulletColor="#594BD9"
            bulletText="Password Screen"
            styles="my-2"
          />
          <StageMarks bulletColor="#C9C6E7" bulletText="Review" />
        </div>
        <div className="max-w-md p-6 bg-[#817DA4] rounded-lg shadow-lg w-[80%] mr-[20%] items-center">
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              id="password"
              name="password"
              type="password"
              placeholder="Input Password"
              formik={formik}
              label="Password"
            />
            <CustomInput
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="Repeat Password"
              formik={formik}
              label="Repeat Password"
            />
            <button
              type="submit"
              className={`w-full py-2 px-4 ${
                formik.isValid ? "bg-[#ffffff]" : "bg-[#A3A0C0] text-[#8B86B0]"
              } text-xl font-semibold rounded`}
              disabled={!formik.isValid}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordScreen;
