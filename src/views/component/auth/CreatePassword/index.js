import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import "./CreatePassword.scss";
import { ReactComponent as LoginLogo } from "src/assets/images/phone-logo.svg";
import { IntlContext } from "src/App";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";

function CreatePassword() {
  const intlContext = useContext(IntlContext);
  const puppi_login = intlContext?.messages;
  const navigate = useNavigate();
  const [passwordvalues, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...passwordvalues,
      showPassword: !passwordvalues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...passwordvalues, [prop]: event.target.value });
  };

  const [repeatvalues, setRepeatValues] = React.useState({
    repeatpassword: "",
    RepeatshowPassword: false,
  });

  const handleRepeatClickShowPassword = () => {
    setRepeatValues({
      ...repeatvalues,
      RepeatshowPassword: !repeatvalues.RepeatshowPassword,
    });
  };

  const handleRepeatMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRepeatPasswordChange = (prop) => (event) => {
    setRepeatValues({ ...repeatvalues, [prop]: event.target.value });
  };

  return (
    <div>
      <Box className="password-sec-box">
        <Box className="password-container">
          <Box className="password-content-sec">
            <Box className="password-logo-sec">
              {" "}
              <LoginLogo className="password-logo-img" />
            </Box>
            <Card className="password-box clearfix">
              <CardContent className="card-content-sec">
                <Box>
                  <Typography className="welcome-txt">
                    {" "}
                    {puppi_login?.create_password?.welcome}
                  </Typography>
                  <Box>
                    {" "}
                    <Typography className="password-small-txt">
                      {puppi_login?.create_password?.welcome_txt}
                    </Typography>
                  </Box>
                </Box>
                <Box className="password-box-sec">
                  {/* <Password /> */}
                  <Formik
                    initialValues={{
                      newpassword: "",
                      confirmpassword: "",
                    }}
                    validationSchema={Yup.object().shape({
                      newpassword: Yup.string()
                        .min(8, "Password must be 8 characters long")
                        .matches(/[0-9]/, "Password requires a number")
                        .matches(
                          /[a-z]/,
                          "Password requires a lowercase letter"
                        )
                        .matches(
                          /[A-Z]/,
                          "Password requires an uppercase letter"
                        )
                        .matches(/[^\w]/, "Password requires a symbol"),
                      confirmpassword: Yup.string().oneOf(
                        [Yup.ref("newpassword"), null],
                        'Must match "password" field value'
                      ),
                    })}
                    onSubmit={(values) => {
                      console.log(values);
                      navigate("/whyuseapp");
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
                        <Box className="password-sec">
                          <Input
                            type={
                              passwordvalues.showPassword ? "text" : "password"
                            }
                            // onChange={handlePasswordChange("password")}
                            // value={values.password}
                            value={values.newpassword}
                            name="newpassword"
                            // placeholder="Password*"
                            // className="form-sec"
                            error={Boolean(
                              touched.newpassword && errors.newpassword
                            )}
                            fullWidth
                            helperText={
                              touched.newpassword && errors.newpassword
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  className="visible-icon"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {passwordvalues.showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {errors.newpassword && (
                            <p className="error-msg">{errors.newpassword}</p>
                          )}
                          <Typography className="password-txt">
                            {" "}
                            {puppi_login?.create_password?.enter_password}
                          </Typography>
                        </Box>
                        <Box>
                          <Input
                            type={
                              repeatvalues.RepeatshowPassword
                                ? "text"
                                : "password"
                            }
                            // onChange={handleRepeatPasswordChange(
                            //   "repeatpassword"
                            // )}
                            // value={repeatvalues.repeatpassword}
                            name="confirmpassword"
                            // placeholder="Repeat password*"
                            // className="form-sec"
                            error={Boolean(
                              touched.confirmpassword && errors.confirmpassword
                            )}
                            fullWidth
                            helperText={
                              touched.confirmpassword && errors.confirmpassword
                            }
                            onBlur={handleBlur}
                            onChange={handleChange}
                            // value={values.repeatpassword}
                            value={values.confirmpassword}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  className="visible-icon"
                                  onClick={handleRepeatClickShowPassword}
                                  onMouseDown={handleRepeatMouseDownPassword}
                                >
                                  {repeatvalues.RepeatshowPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />{" "}
                          {errors.confirmpassword && (
                            <p className="error-msg">
                              {errors.confirmpassword}
                            </p>
                          )}
                          <Typography className="password-txt">
                            {puppi_login?.create_password?.repeat_password}
                          </Typography>
                        </Box>
                        <Box className="password-login-sec-btn">
                          <Button
                            variant="contained"
                            type="submit"
                            className="password-login-btn"
                          >
                            {puppi_login?.create_password?.login}
                          </Button>
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

export default CreatePassword;
