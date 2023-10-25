import React from "react";
import { useFormik } from "formik";
import { allCountries } from "./country";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { validationSchemaInitialInfo as validationSchema } from "../validations/InitialInfo.schema";
import StageMarks from "./StageMarks";
import Header from "./Header";
import CustomInput from "./CustomInput";

const mappedArray = allCountries.map(
  (country) => `${country.code} ${country.name}`
);
type InitialInfoPageProps = {
  formData: any;
  setFormData: any;
  nextStep: any;
};

const InitialInfoPage = (props: InitialInfoPageProps) => {
  const { formData, setFormData, nextStep } = props;
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      country: "",
    },
    initialErrors: {
      username: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { username, email, phoneNumber, country } = values;
      setFormData({
        ...formData,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        country: country,
      });
      nextStep();
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className=" bg-gradient-to-b from-purple-50 via-blue-50 to-purple-50">
      <Header headerText="Super test Form" headerDescription="Initial Info"/>
      <div className="min-h-screen flex flex-row items-center justify-center">
        <div className="relative -translate-x-[20%] -translate-y-[180%] h-[10%] w-[20%]">
          <StageMarks bulletColor="#594BD9" bulletText="Initial Info" />
          <StageMarks
            bulletColor="#C9C6E7"
            bulletText="Password Screen"
            styles="my-2"
          />
          <StageMarks bulletColor="#C9C6E7" bulletText="Review" />
        </div>
        <div className="max-w-md p-6 bg-[#817DA4] rounded-lg shadow-lg bg-brand w-[80%] mr-[20%] ">
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              id="username"
              name="username"
              type="text"
              placeholder="Input Username"
              formik={formik}
              label="Username"
            />
            <CustomInput
              id="email"
              name="email"
              type="email"
              placeholder="Input Email"
              formik={formik}
              label="Email"
            />
            <CustomInput
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Input Phone Number"
              formik={formik}
              label="Phone Number"
            />
            <div className="mb-4">
              <label htmlFor="country" className="block text-white">
                Country
              </label>
              <select
                id="country"
                name="country"
                className={`w-full px-3 py-2 ${
                  formik.touched.country && formik.errors.country
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {mappedArray.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="flex justify-between">
                  <div className="text-[#D8242A] mt-1">
                    {formik.errors.country}
                  </div>
                  <BsFillExclamationSquareFill className="text-[#D8242A] text-right mr-5 -translate-y-7 transition-all duration-300 ease-in-out" />
                </div>
              )}
            </div>

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

export default InitialInfoPage;
