import React from "react";
import { makeStyles } from "@mui/styles";
import Page from "src/components/Page";
import CreateAccount from "src/views/component/auth/CreateAccount";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "100%",
  },
}));

const CreateAccountPage = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login/SignUp - Don't have an account ">
      <CreateAccount />
    </Page>
  );
};

export default CreateAccountPage;
