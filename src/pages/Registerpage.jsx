import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registerpage = () => {
  return (
    <>
      <div className="flex justify-center my-10">
        <Formik>
          <Form className=" shadow-lg shadow-blue-500 p-5">
            <div className="mb-2">
              <label htmlFor="fname">First Name</label>

              <Field
                type="text"
                className="rounded-lg block"
                id="fname"
                name="fname"
              />
              <ErrorMessage name="fname" />
            </div>
            <div className="mb-2">
              <label htmlFor="lname">Last Name</label>

              <Field
                type="text"
                className="rounded-lg block"
                id="lname"
                name="lname"
              />
              <ErrorMessage name="lname" />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>

              <Field
                type="email"
                className="rounded-lg block"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="mb-2">
              <label htmlFor="pwd">Password</label>

              <Field
                type="password"
                className="rounded-lg block"
                id="pwd"
                name="pwd"
              />
              <ErrorMessage name="pwd" />
            </div>
            <div className="mb-2">
              <label htmlFor="cpwd">Confirm Password</label>

              <Field
                type="password"
                className="rounded-lg block"
                id="cpwd"
                name="cpwd"
              />
              <ErrorMessage name="cpwd" />
            </div>
          </Form>
        </Formik>
      </div>

      {/* <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div> */}
    </>
  );
};

export default Registerpage;
