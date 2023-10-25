import React from "react";
import StageMarks from "./StageMarks";
import FieldDisplay from "./FieldDisplay";
import Header from "./Header";
type DisplayFormValuesProps = {
  formData: {
    username?: string;
    email?: string;
    phoneNumber?: string;
    country?: string;
    password?: string;
  };
};
const DisplayFormValues = (props: DisplayFormValuesProps) => {
  const { formData } = props;
  const { username, email, phoneNumber, country } = formData;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);
  };

  return (
    <div className=" bg-gradient-to-b from-purple-50 via-blue-50 to-purple-50">
      <Header headerText="Super test Form" headerDescription="Review Screen"/>
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative -translate-x-[20%] -translate-y-[180%] h-[10%] w-[20%]">
          <StageMarks bulletColor="#87839E" bulletText="Initial Info" />
          <StageMarks
            bulletColor="#87839E"
            bulletText="Password Screen"
            styles="my-2"
          />
          <StageMarks bulletColor="#594BD9" bulletText="Review" />
        </div>
        <div className="max-w-md p-6 bg-[#817DA4] rounded-lg shadow-lg w-[80%] mr-[20%]">
          <form onSubmit={handleSubmit}>
            <FieldDisplay Attribute="Username" Value={username} />
            <FieldDisplay Attribute="Email" Value={email} />
            <FieldDisplay Attribute="Phone" Value={phoneNumber} />
            <FieldDisplay Attribute="Country" Value={country} />
            <button
              type="submit"
              className={`w-full py-2 px-4
               bg-[#ffffff] text-[#8B86B0]
             text-xl font-semibold rounded`}
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DisplayFormValues;
