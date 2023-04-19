import React, { useState, useContext } from "react";
import "../../auth/PhoneNumber/phoneNumber.scss";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ReactComponent as LoginLogo } from "src/assets/images/phone-logo.svg";
import { IntlContext } from "src/App";
import PhoneInput from "./PhoneNoComponent";

function PhoneNumber() {
  const intlContext = useContext(IntlContext);
  const puppi_login = intlContext?.messages;

  return (
    <div>
      <Box className="phone-number-sec-box">
        <Box className="phone-number-container">
          <Box className="phone-number-content-sec">
            <Box className="phone-number-logo">
              <Box className="phone-logo">
                <LoginLogo className="phone-no-logo-img" />
              </Box>
            </Box>
            <Box className="verify-phone-no">
              <Typography className="head-txt">
                {puppi_login?.login_with_phone_no?.phone_no}
              </Typography>
              <Typography className="phone-no-breadcrumbs">
                {puppi_login?.login_with_phone_no?.sign_sign_using_phone_no}
              </Typography>
              <PhoneInput />
              <Box>
                <Stack direction="column">
                  <Button
                    variant="contained"
                    className="sign-up-buttons sign-up-btn"
                  >
                    {puppi_login?.login_with_phone_no?.sign_up}
                  </Button>
                  <Button
                    variant="contained"
                    className="sign-up-buttons sign-in-btn"
                  >
                    {puppi_login?.login_with_phone_no?.sign_in}
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default PhoneNumber;
