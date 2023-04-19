import React from "react";
import { makeStyles } from "@mui/styles";
import Page from "src/components/Page";
import CreatePassword from "src/views/component/auth/CreatePassword";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "100%",
  },
}));

const PasswordPage = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login/SignUp - Create Password">
      <CreatePassword />
    </Page>
  );
};

export default PasswordPage;
