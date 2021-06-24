import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";

const RegistrationForm = (props) => (
    <div className="form-group">
        <Formik
            initialValues={{email: '', password: ''}}

            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (

                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <Field type="text" className="form-control" id="name" name="name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Your Email</label>
                            <Field type="email" className="form-control" id="email" name="email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="subject">Subject</label>
                            <Field type="text" className="form-control" id="subject" name="subject"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" style={{height: '200px'}} type="text" className="form-control" id="message" name="message"/>
                        </div>
                    </div>
                    <ErrorMessage name="email" component="div"/>
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/>
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>

                </Form>

            )}

        </Formik>
    </div>
)

export default RegistrationForm
