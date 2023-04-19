import React, { useContext } from "react";
import "./createAccount.scss";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { ReactComponent as LoginLogo } from "src/assets/images/phone-logo.svg";
import { IntlContext } from "src/App";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputTextField } from "src/views/component/UI/textField";

function CreateAccount() {
  const intlContext = useContext(IntlContext);
  const puppi_login = intlContext?.messages;
  return (
    <div>
      <Box className="create-account-sec">
        <Box className="create-account-container">
          <Grid
            container
            xl={12}
            lg={12}
            spacing={1}
            className="create-account-content-sec"
          >
            <Grid
              className="create-account-logo-sec"
              item
              xl={4.1}
              lg={4.1}
              md={12}
              sm={12}
              xs={12}
            >
              {" "}
              <LoginLogo className="create-account-logo-img" />
            </Grid>
            <Grid item xl={7.9} lg={7.9} md={12} sm={12} xs={12}>
              <Card className="create-account-card">
                <CardContent className="create-account-card-content">
                  <Typography className="head-txt">
                    {puppi_login?.create_account?.hii}
                  </Typography>
                  <Box>
                    <Formik
                      initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                      }}
                      validationSchema={Yup.object().shape({
                        firstname: Yup.string()
                          .max(255)
                          .required(puppi_login?.validation?.required_message),
                        lastname: Yup.string()
                          .max(255)
                          .required(puppi_login?.validation?.required_message),
                        email: Yup.string()
                          .email("Email is reqired")
                          .required(puppi_login?.validation?.valid_email),
                      })}
                      onSubmit={(values) => {
                        console.log(values);
                        // saveToStorage(identifiers.signUpData, values.email);
                        // navigate("/welcome");
                      }}
                    >
                      {({
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        values,
                      }) => (
                        <Form>
                          <InputTextField
                            variant="standard"
                            label="First Name"
                            name="firstname"
                            className="input-field  account-first-name"
                            sx={{ input: { color: "black" } }}
                            placeholder="First Name*"
                            error={Boolean(
                              touched.firstname && errors.firstname
                            )}
                            fullWidth
                            helperText={touched.firstname && errors.firstname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstname}
                          />{" "}
                          {/*  <ErrorMessage name="firstname">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage> */}
                          <InputTextField
                            variant="standard"
                            label="Last Name"
                            name="lastname"
                            className="input-field"
                            placeholder="Last Name*"
                            sx={{ input: { color: "black" } }}
                            error={Boolean(touched.lastname && errors.lastname)}
                            fullWidth
                            helperText={touched.lastname && errors.lastname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastname}
                          />{" "}
                          {/*  <ErrorMessage name="lastname">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage> */}
                          <Typography className="child-txt">
                            {puppi_login?.create_account?.last_name_msg}
                          </Typography>
                          <InputTextField
                            variant="standard"
                            label="Email address"
                            name="email"
                            placeholder="Email Address*"
                            sx={{ input: { color: "black" } }}
                            className="input-field"
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                          />
                          <Typography className="child-txt">
                            {puppi_login?.create_account?.email_msg}
                          </Typography>
                          <Box>
                            <Typography className="img-upload-txt">
                              {puppi_login?.create_account?.img_upload_content}
                            </Typography>
                          </Box>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default CreateAccount;
