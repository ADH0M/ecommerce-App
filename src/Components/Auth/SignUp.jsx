import useLanguage from "../../Hooks/useLanguage";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import supabase from "../../utils/supabase/Api";
import React from "react";

const SignUp = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const initialValue = {
    firstname: "",
    lastname: "",
    password: "",
    confirm: "",
    email: "",
    persestant: false,
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required(t("FieldRequire"))
      .min(3 , t("notvaild"))
      .max(14, t('notvaild')),
    lastname: Yup.string()
      .required(t("FieldRequire"))
      .min(3 , t("notvaild"))
      .max(14, t('notvaild')),
    email: Yup.string().email(t("InvaildEmail")).required(t("FieldRequire")),
    password: Yup.string()
      .required(t("FieldRequire"))
      .min(3 , t("notvaild"))
      .max(50, t('notvaild')),
    confirm: Yup.string()
      .required(t("FieldRequire"))
      .min(3 , t("notvaild"))
      .max(14, t('notvaild')),
  });




  
  return (
    <div className="w-full  bg-cyan-50 h-[100vh]">
      <div className="container w-full h-full mx-auto">
        <div className="flex justify-center    w-full h-full relative overflow-hidden p-10">
          <div className=" w-56 h-96 absolute bg-blue-600 bg-opacity-40    -top-10    right-[0px] sm:right-[24px] sm:-top-[90px]    md:right-[100px] md:-top-[100px] lg:right-[200px]  xl:right-[340px]  2xl:right-[450px] rounded-full rotate-45 z-10" />
          <div className=" w-56 h-96 absolute bg-blue-600 bg-opacity-40  bottom-12    left-[0px]  sm:left-[24px]  sm:bottom-[0px]   md:left-[100px]  md:bottom-[0px] lg:left-[200px]   xl:left-[340px]   2xl:left-[450px]  rounded-full rotate-45 z-10" />

          <div className=" z-50 ">
            <Formik 
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={ async(values)=>{
                  const {error , data } = await supabase.auth.signUp({
                    email:values.email,
                    password:values.password,
                  });
                  
                  console.log(data.user);
                  
                  
                }}
            >
              {({ values }) => (
                <Form>
                  <div className="flex flex-col justify-center gap-4  h-[600px] max-w-[400px] w-[400px] p-3 bg-[#85a8ff] bg-opacity-80 rounded-md ">
                    {/* username */}
                    <div className="flex w-full  gap-2 justify-between items-center relative " dir={lang}>
                      {/* firstname */}
                      <label htmlFor="firstname" className="w-1/2  ">
                        <span className="username-label">
                          {t("signupFirstname")}
                        </span>
                        <Field
                          type="text"
                          id="firstname"
                          name="firstname"
                          className="input-username"
                        />
                        <span className="block text-red-400  text-sm m-1 capitalize absolute -bottom-6">
                          <ErrorMessage name="firstname" />
                        </span>
                      </label>
                      {/* lastname */}
                      <label
                        htmlFor="lastname"
                        className="w-1/2  outline-none  "
                      >
                        <span className="username-label">
                          {t("signupLastname")}
                        </span>
                        <Field
                          type="text"
                          id="lastname"
                          name="lastname"
                          className="input-username"
                        />
                        <span className="block text-red-400  text-sm m-1 capitalize absolute -bottom-6">
                          <ErrorMessage name="lastname" />
                        </span>
                      </label>
                    </div>

                    {/* email */}
                    <label htmlFor="email">
                      <span className="username-label">{t("signupEmail")}</span>
                      <Field
                        dir='ltr'
                        type="email"
                        id="email"
                        name="email"
                        className="signup-inputs"
                      />
                      <span className="block text-red-400  text-sm m-1 capitalize">
                          <ErrorMessage name="email" />
                        </span>
                    </label>

                    {/* password */}
                    <label htmlFor="password">
                      <span className="username-label">
                        {t("signupPassword")}
                      </span>
                      <Field
                        dir='ltr'
                        type="password"
                        id="password"
                        name="password"
                        className="signup-inputs"
                      />
                      <span className="block text-red-400  text-sm m-1 capitalize">
                          <ErrorMessage name="password" />
                        </span>
                    </label>

                    {/* confirm */}
                    <label htmlFor="confirm">
                      <span className="username-label">
                        {t("signupConfirm")}
                      </span>

                      <Field
                        dir='ltr'
                        type="confirm"
                        id="confirm"
                        name="confirm"
                        className="signup-inputs"
                      />
                      <span className="block text-red-400  text-sm m-1 capitalize">
                          <ErrorMessage name="confirm" />
                        </span>
                    </label>

                    {/* persestent */}
                    <label
                      htmlFor="checkbox"
                      className="flex justify-center items-center cursor-pointer"
                    >
                      <Field
                        type="checkbox"
                        name="persestant"
                        id="checkbox"
                        className="w-4 h-4"
                      />
                      <span className="mx-1 text-blue-500">Remember me</span>
                    </label>

                    {/* Submit btn */}
                    <div className="flex justify-center items-center">
                      <button
                        className="my-7 border border-blue-500 px-5 py-2 rounded-md
                   text-white bg-indigo-500 dark:bg-indigo-800 outline-none hover:bg-opacity-75 active:bg-opacity-100"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignUp);
