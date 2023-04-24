import React, { useContext, useState } from "react";
import "./createAccount.scss";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { ReactComponent as LoginLogo } from "src/assets/images/phone-logo.svg";
import { ReactComponent as Connect } from "src/assets/images/conect.svg";
import { IntlContext } from "src/App";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputTextField } from "src/views/component/UI/textField";
import ImageUploaderCom from "src/views/component/UI/ImageUploader";
import { ReactComponent as UploadSkeleten } from "src/assets/images/skeleten.svg";
import { ReactComponent as Close } from "src/assets/images/close-icon.svg";
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import { ReactComponent as UploaderIcon } from "src/assets/images/image-uploader.svg";

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
  const [selectedfile, SetSelectedFile] = useState([]);
  const [Files, SetFiles] = useState([]);

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              id: shortid.generate(),
              filename: e.target.files[i].name,
              filetype: e.target.files[i].type,
              fileimage: reader.result,
              datetime:
                e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
              filesize: filesizes(e.target.files[i].size),
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }
  };
  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit
    e.target.reset();
    if (selectedfile.length > 0) {
      for (let index = 0; index < selectedfile.length; index++) {
        SetFiles((preValue) => {
          return [...preValue, selectedfile[index]];
        });
      }
      SetSelectedFile([]);
    } else {
      alert("Please select file");
    }
  };
  return (
    <div>
      <Box className="create-account-sec">
        <Box className="create-account-container">
          <Box className="create-account-content-sec">
            <Box className="create-account-logo-sec clearfix">
              {" "}
              <LoginLogo className="create-account-logo-img" />
            </Box>

            <Card className="create-account-card clearfix">
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
                          error={Boolean(touched.firstname && errors.firstname)}
                          fullWidth
                          helperText={touched.firstname && errors.firstname}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstname}
                        />{" "}
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
                          <div className="fileupload-view">
                            <div className="row justify-content-start m-0">
                              <div className="col-md-12 column-12 card-img-sec">
                                <div className="card ">
                                  <div className="card-body">
                                    <div className="kb-data-box">
                                      <div className="kb-modal-data-title"></div>
                                      <form onSubmit={FileUploadSubmit}>
                                        <div className="kb-file-upload">
                                          <div className="file-upload-box">
                                            <input
                                              type="file"
                                              id="fileupload"
                                              className="file-upload-input"
                                              onChange={InputChange}
                                              multiple
                                            />

                                            <UploaderIcon className="file-link" />
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

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
                        <div className="kb-attach-box ">
                          {selectedfile.map((data, index) => {
                            const { id, filename, fileimage } = data;
                            return (
                              <div className="file-atc-box" key={id}>
                                {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                                  <div className="file-image">
                                    {" "}
                                    <img src={fileimage} alt="" />
                                  </div>
                                ) : (
                                  <i className="far fa-file-alt"></i>
                                )}

                                <button
                                  type="button"
                                  className="file-action-btn"
                                  onClick={() => DeleteSelectFile(id)}
                                >
                                  <Close className="close-icon" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                        {/* <Box className="skeleten-avtar">
                            <Avatar
                              variant="square"
                              className="upload-skeleten"
                            >
                              <UploadSkeleten className="skeleten" />
                            </Avatar>
                          </Box> */}
                        <Box className="date_box">
                          <Typography className="birth-date-txt">
                            {puppi_login?.create_account?.date_of_birth}
                          </Typography>

                          <Box sx={{ display: "flex" }}>
                            <Input
                              name="dfirst"
                              label="dfirst"
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
                              value={values.dsecond}
                              onChange={handleChange}
                              sx={{ input: { color: "black" } }}
                              error={Boolean(touched.dsecond && errors.dsecond)}
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
                              value={values.msecond}
                              onChange={handleChange}
                              sx={{ input: { color: "black" } }}
                              error={Boolean(touched.msecond && errors.msecond)}
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
                              error={Boolean(touched.ysecond && errors.ysecond)}
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
                            {/* <FormControl
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
                                  dropdownArray={Peopleoptions?.filter(
                                    (item) => item?.name !== null
                                  )}
                                >
                                  {Peopleoptions.map((option, value) => (
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
                              {puppi_login?.create_account?.looking_for_content}
                            </Typography>
                          </Box>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CreateAccount;
