import React, { useContext } from "react";
import "../../auth/Login/loginPage.scss";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ReactComponent as LoginLogo } from "src/assets/images/login-logo.svg";
import { ReactComponent as FaceBook } from "src/assets/images/facebook.svg";
import { ReactComponent as Apple } from "src/assets/images/apple.svg";
import { ReactComponent as Google } from "src/assets/images/google.svg";
import { IntlContext } from "src/App";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const intlContext = useContext(IntlContext);
  const puppi_login = intlContext?.messages;

  const navigate = useNavigate();

  return (
    <div>
      <Box className="login-sec-box">
        <Box className="login-container">
          <Box className="login-content-sec">
            <Box className="logo-sec">
              <LoginLogo className="login-logo-img" />
            </Box>
            <Box className="login-box clearfix">
              <Box className="sign-up-box">
                <Typography className="sign-up-txt">
                  {puppi_login?.login?.login_sign_up_txt}
                </Typography>
                <Stack direction="column">
                  <Button
                    variant="contained"
                    className="login-buttons login-facebook"
                    startIcon={<FaceBook className="login-facebook-icon" />}
                  >
                    <Typography className="loign-social-media-txt">{puppi_login?.login?.facbook}</Typography>
                  </Button>
                  <Button
                    variant="contained"
                    className="login-buttons login-apple app-icon"
                    startIcon={<Apple className="login-apple-icon" />}
                  >
                    <Typography className="loign-social-media-txt">{puppi_login?.login?.apple}</Typography>
                  </Button>
                  <Button
                    variant="contained"
                    className="login-buttons login-google google-icon"
                    startIcon={<Google className="login-google-icon" />}
                  >
                    <Typography className="loign-social-media-txt">{puppi_login?.login?.google}</Typography>
                  </Button>
                </Stack>
                <Box className="or-sec">
                  <span className="or-txt"> {puppi_login?.login?.or}</span>
                </Box>
                <Button
                  variant="text"
                  className="phone-number-txt"
                  onClick={() => navigate("/phonenumber")}
                >
                  {puppi_login?.login?.login_with_no}
                </Button>
                <Box className="terms-condition-sec">
                  <Typography className="terms-con-txt">
                    {puppi_login?.login?.terms_condition}
                  </Typography>
                  <Typography className="terms-con-txt">
                    {puppi_login?.login?.privacy_policy}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default LoginPage;
