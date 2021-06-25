import React from 'react'
import {Field, Form, Formik} from "formik";
import {Tag} from 'antd'
import './formStyle.css'

const tagColor = "#9cb30c"

const RegistrationForm = (props) => (
    <div className="form-group">
        <Formik
            initialValues={{
                email: '',
                name: '',
                subject: '',
                message: ''
            }}

            validate={values => {
                const errors = {};
                if (!values.name || values.name.trim().length < 2) {
                    errors.name = 'Please provide a name';
                }
                if (!values.email) {
                    errors.email = 'An email is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.subject || values.subject.trim().length < 2) {
                    errors.subject = 'Please specified a subject, at least 2 characters';
                } else if (values.subject.trim().length > 20) {
                    errors.subject = 'Subject cannot exceed 20 characters';
                }
                if (!values.message || values.message.trim().length < 10) {
                    errors.message = 'Please leave a message, at least 10 characters';
                } else if (values.message.trim().length > 50) {
                    errors.message = 'Message cannot exceed 50 characters';
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
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  submitForm,
                  isValid,
              }) => (

                <Form>
                    <div className="form-row mt-2">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"/>
                            {/*{errors.name && touched.name && (<Tooltip color="#f50">{errors.name}</Tooltip>)}*/}
                            {/*<ErrorMessage name="name" />*/}
                            {errors.name && touched.name && (
                                <Tag color={tagColor} style={{marginTop: '2px'}}>
                                    {errors.name}
                                </Tag>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Your Email</label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"/>
                            {errors.email && touched.email && (
                                <Tag color={tagColor} style={{marginTop: '2px'}}>
                                    {errors.email}
                                </Tag>
                            )}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="form-group col">
                            <label htmlFor="subject">Subject</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="subject"
                                name="subject"/>
                            {errors.subject && touched.subject && (
                                <Tag color={tagColor} style={{marginTop: '2px'}}>
                                    {errors.subject}
                                </Tag>
                            )}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col">
                            <label htmlFor="message">Message</label>
                            <Field
                                as="textarea"
                                style={{height: '200px'}}
                                type="text"
                                className="form-control"
                                id="message"
                                name="message"/>
                            {errors.message && touched.message && (
                                <Tag color={tagColor} style={{marginTop: '2px'}}>
                                    {errors.message}
                                </Tag>
                            )}
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-primary mt-1 mb-0"
                            type="submit"
                            disabled={isSubmitting || (touched && !isValid)}>
                            Send Message
                        </button>
                    </div>


                </Form>

            )}

        </Formik>
    </div>
)

export default RegistrationForm
