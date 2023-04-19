import { Box } from "@mui/material";
import React from "react";
import { ReactComponent as LoginLogo } from "src/assets/images/login-logo.svg";

function CreatePassword() {
  return (
    <div>
      <Box className="password-sec-box">
        <Box className="password-container">
          <Box className="password-content-sec">
            <Box className="password-logo-sec">
              {" "}
              <LoginLogo className="password-logo-img" />
            </Box>
            <Box className="password-box clearfix"></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CreatePassword;
