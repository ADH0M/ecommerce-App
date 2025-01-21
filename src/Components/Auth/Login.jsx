import { Field, Formik, Form, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import useLanguage from "../../Hooks/useLanguage";
import React from "react";

const Login = () => {
  const { t } = useTranslation();
  const loginShema = Yup.object().shape({
    email: Yup.string().email(t("InvaildEmail")).required(t("FieldRequire")),
    password: Yup.string()
      .min(2,  t("notvaild"))
      .max(40, t('notvaild'))
      .required(t("FieldRequire")),
  });
  const { lang } = useLanguage();

  return (
    <div className="w-full h-full p-1" >

      <div className="container h-[100vh] mx-auto w-full " dir={lang}>
        <div className=" relative h-full overflow-hidden">
          <div className=" w-56 h-96 absolute bg-blue-600 bg-opacity-40    -top-10    right-[0px] sm:right-[24px] sm:-top-[90px]    md:right-[100px] md:-top-[100px] lg:right-[200px]  xl:right-[340px]  2xl:right-[450px] rounded-full rotate-45 z-10"/>
          <div className=" w-56 h-96 absolute bg-blue-600 bg-opacity-40  bottom-12    left-[0px]  sm:left-[24px]  sm:bottom-[0px]   md:left-[100px]  md:bottom-[0px] lg:left-[200px]   xl:left-[340px]   2xl:left-[450px]  rounded-full rotate-45 z-10"/>
          <Formik
            
            initialValues={{
              email: "",
              password: "",
              persestent:false,
            }}

            onSubmit={async (values) => {
              await new Promise((res) => {
                setTimeout(() => {
                  res(alert(JSON.stringify(values, null, 2)));
                }, 2000);
              });
            }}
            validationSchema={loginShema}
          >
            {({ errors, touched,values}) => (
              <Form className="w-full px-2 flex justify-center items-center mt-10 ">
                <div className=" bg-[#85a8ff] bg-opacity-80 flex flex-col  items-center z-50 justify-center h-[600px] gap-5 w-[400px] rounded-md">
                {/* Email */}
                  <label htmlFor="email">
                    <span className="block my-1 mx-1 text-[#10169f] dark:text-white text-lg">
                      {t('EmailLabel')}
                    </span>
                    <Field
                      dir='ltr'
                      id="email"
                      name="email"
                      placeholder={t("EmailPlaceHolder")}
                      className="input-login"
                    />
                    <span className="block text-red-400  text-sm m-1 capitalize">
                      <ErrorMessage name="email"/>
                    </span>
                  </label>

                  {/* Password */}
                  <label htmlFor="password">
                    <span className="block my-1 mx-1 text-[#10169f] dark:text-white text-lg">
                      {t('PasswordLabel')}
                    </span>
                    <Field
                      dir='ltr'
                      id="password"
                      name="password"
                      placeholder={t("PasswordPlaceHolder")}
                      className="input-login"
                    />
                    <span className="block text-red-400  text-sm m-1 capitalize">
                      <ErrorMessage name="password"/>
                    </span>
                  </label>
                  {/* persestant */}
                  <label htmlFor="checkbox" className="flex justify-center items-center cursor-pointer">
                    <Field type="checkbox" name='persestent' id='checkbox' className='w-4 h-4 outline-none broder-none rounded-md '/>
                    <span className="mx-1 text-gray-300">{t("RemeberLabel")}</span>
                  </label>
                
                  {/* Submit btn  */}
                  <button
                    type="submit"
                    className="my-7 border border-blue-500 px-5 py-2 rounded-md
                    text-white bg-indigo-500 dark:bg-indigo-800 outline-none hover:bg-opacity-75 active:bg-opacity-100"
                  >
                    {t("LoginSubmit")}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
