// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const RegistrationForm = () => {
    return (
        <Formik
           value={username}
           value1={email}
             value2={password}

            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form submitted:', values);
                // Send the data to your API here
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field name="username" />
                        <ErrorMessage name="username" component="p" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="p" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="p" />
                    </div>
                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;