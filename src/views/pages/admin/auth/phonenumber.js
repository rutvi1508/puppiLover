import React from "react";
import { makeStyles } from "@mui/styles";
import Page from "src/components/Page";
import PhoneNumber from "src/views/component/auth/PhoneNumber";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "100%",
  },
}));

const PhoneNumberPage = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login/SignUp - Phone Number">
      <PhoneNumber />
    </Page>
  );
};

export default PhoneNumberPage;
