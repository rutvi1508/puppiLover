import React, { useContext, useState } from "react";
import "./createAccount.scss";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Select,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { ReactComponent as LoginLogo } from "src/assets/images/phone-logo.svg";
import { ReactComponent as Connect } from "src/assets/images/conect.svg";
import { IntlContext } from "src/App";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputTextField } from "src/views/component/UI/textField";
import ImageUploaderCom from "src/views/component/UI/ImageUploader";
import { ReactComponent as UploadSkeleten } from "src/assets/images/skeleten.svg";
import DropDown from "../../UI/DropDown";
// import { ImageUploader } from "src/views/component/UI/imageUploader";

function CreateAccount() {
  const intlContext = useContext(IntlContext);
  const puppi_login = intlContext?.messages;

  const [gender, setGender] = React.useState("");
  const Genderoptions = ["Male", "Female", "Non-binary"];
  const handleSelectChange = (event) => {
    setGender(event.target.value);
  };

  const [people, setPeople] = React.useState("");
  const Peopleoptions = ["Male", "Female", "Either"];
  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

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
                        dfirst: "",
                        dsecond: "",
                        mfirst: "",
                        msecond: "",
                        yfirst: "",
                        ysecond: "",
                        ythird: "",
                        yfour: "",
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
                        dfirst: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        dsecond: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        mfirst: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        msecond: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        yfirst: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        ysecond: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        ythird: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
                        yfour: Yup.string()
                          .matches(/^[0-9]{1}$/, "Please enter only one number")
                          .required(""),
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
                          <Box className="create-account-img-upload">
                            <ImageUploaderCom />

                            <Box className="create-account-connect-sec">
                              <Button
                                variant="text"
                                endIcon={<Connect className="connect-icon" />}
                                className="connect-txt"
                              >
                                {puppi_login?.create_account?.connect_facebook}
                              </Button>
                              <Button
                                variant="text"
                                endIcon={<Connect className="connect-icon" />}
                                className="connect-txt"
                              >
                                {puppi_login?.create_account?.connect_Instagram}
                              </Button>
                            </Box>
                          </Box>
                          <Box className="skeleten-avtar">
                            <Avatar
                              variant="square"
                              className="upload-skeleten"
                            >
                              <UploadSkeleten className="skeleten" />
                            </Avatar>
                          </Box>
                          <Box>
                            <Typography className="birth-date-txt">
                              {puppi_login?.create_account?.date_of_birth}
                            </Typography>

                            <Box sx={{ display: "flex" }}>
                              <Input
                                name="dfirst"
                                label="dfirst"
                                // variant="outlined"
                                // type="number"
                                value={values.dfirst}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(touched.dfirst && errors.dfirst)}
                                fullWidth
                                helperText={touched.dfirst && errors.dfirst}
                                onBlur={handleBlur}
                                inputProps={{ maxLength: 1 }}
                                className="date-field"
                                disableUnderline={true}
                              />
                              <Input
                                name="dsecond"
                                label="dsecond"
                                // variant="outlined"
                                // type="number"
                                value={values.dsecond}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(
                                  touched.dsecond && errors.dsecond
                                )}
                                fullWidth
                                helperText={touched.dsecond && errors.dsecond}
                                onBlur={handleBlur}
                                inputProps={{ maxLength: 1 }}
                                className="date-field"
                                disableUnderline={true}
                              />

                              <span className="di-or-sec" />

                              <Input
                                name="mfirst"
                                label="mfirst"
                                // variant="outlined"
                                // type="number"
                                value={values.mfirst}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(touched.mfirst && errors.mfirst)}
                                fullWidth
                                helperText={touched.mfirst && errors.mfirst}
                                onBlur={handleBlur}
                                inputProps={{ maxLength: 1 }}
                                disableUnderline={true}
                                className="date-field"
                              />
                              <Input
                                name="msecond"
                                label="msecond"
                                // variant="outlined"
                                // type="number"
                                value={values.msecond}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(
                                  touched.msecond && errors.msecond
                                )}
                                fullWidth
                                helperText={touched.msecond && errors.msecond}
                                onBlur={handleBlur}
                                inputProps={{ maxLength: 1 }}
                                disableUnderline={true}
                                className="date-field"
                              />
                              <span className="di-or-sec" />
                              <Input
                                name="yfirst"
                                label="yfirst"
                                // variant="outlined"
                                // type="number"
                                value={values.yfirst}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(touched.yfirst && errors.yfirst)}
                                fullWidth
                                helperText={touched.yfirst && errors.yfirst}
                                onBlur={handleBlur}
                                disableUnderline={true}
                                inputProps={{ maxLength: 1 }}
                                className="date-field"
                              />
                              <Input
                                name="ysecond"
                                label="ysecond"
                                // variant="outlined"
                                // type="number"
                                value={values.ysecond}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(
                                  touched.ysecond && errors.ysecond
                                )}
                                fullWidth
                                helperText={touched.ysecond && errors.ysecond}
                                onBlur={handleBlur}
                                disableUnderline={true}
                                inputProps={{ maxLength: 1 }}
                                className="date-field"
                              />
                              <Input
                                name="ythird"
                                label="ythird"
                                // variant="outlined"
                                // type="number"
                                value={values.ythird}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(touched.ythird && errors.ythird)}
                                fullWidth
                                helperText={touched.ythird && errors.ythird}
                                onBlur={handleBlur}
                                disableUnderline={true}
                                inputProps={{ maxLength: 1 }}
                                className="date-field"
                              />
                              <Input
                                name="yfour"
                                label="yfour"
                                // variant="outlined"
                                // type="number"
                                value={values.yfour}
                                onChange={handleChange}
                                sx={{ input: { color: "black" } }}
                                error={Boolean(touched.yfour && errors.yfour)}
                                fullWidth
                                helperText={touched.yfour && errors.yfour}
                                onBlur={handleBlur}
                                disableUnderline={true}
                                inputProps={{ maxLength: 1 }}
                                className="date-field"
                              />
                            </Box>
                            <Typography className="birth-date-content">
                              {puppi_login?.create_account?.birth_date_content}
                            </Typography>

                            <Box>
                              <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                                className="create-account-select"
                              >
                                <InputLabel id="demo-simple-select-standard-label">
                                  What is your gender?
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={gender}
                                  onChange={handleSelectChange}
                                  label="What is your gender?"
                                  className="select-gender-dropdown"
                                >
                                  {Genderoptions.map((option) => (
                                    <MenuItem
                                      key={option}
                                      className="gender-option"
                                      value={option}
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                              {/*  <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                                className="create-account-select"
                              >
                                <InputLabel id="demo-simple-select-standard-label">
                                  What is your gender?
                                </InputLabel>
                                <DropDown
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={gender}
                                  onChange={handleSelectChange}
                                  label="What is your gender?"
                                  className="select-gender-dropdown"
                                >
                                  {Genderoptions.map((option) => (
                                    <MenuItem
                                      key={option}
                                      className="gender-option"
                                      value={option}
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </DropDown>
                              </FormControl> */}
                              <Typography className="gender-content">
                                {" "}
                                {puppi_login?.create_account?.gender_content}
                              </Typography>
                            </Box>

                            <Box>
                              <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                                className="create-account-select"
                              >
                                <InputLabel id="demo-simple-select-standard-label">
                                  What is your gender?
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={people}
                                  onChange={handlePeopleChange}
                                  label="What is your gender?"
                                  className="select-gender-dropdown"
                                >
                                  {Peopleoptions.map((option) => (
                                    <MenuItem
                                      key={option}
                                      className="gender-option"
                                      value={option}
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                              {/*  <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                                className="create-account-select"
                              >
                                <InputLabel id="demo-simple-select-standard-label">
                                  What is your gender?
                                </InputLabel>
                                <DropDown
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={people}
                                  handleChange={handlePeopleChange}
                                  label="What is your gender?"
                                  className="select-gender-dropdown"
                                  Peopleoptions={Peopleoptions}
                                >
                                  <MenuItem
                                    
                                    className="gender-option"
                                  ></MenuItem>
                                </DropDown>
                              </FormControl */}

                              <Typography className="gender-content">
                                {" "}
                                {
                                  puppi_login?.create_account
                                    ?.looking_for_content
                                }
                              </Typography>
                            </Box>
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
