import React from "react";
import { makeStyles } from "@mui/styles";
import Page from "src/components/Page";
import WhyUseApp from "src/views/component/auth/WhyUseApp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "100%",
  },
}));

const WhyUsePage = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Login/SignUp - Why are you using the app?"
    >
      <WhyUseApp />
    </Page>
  );
};

export default WhyUsePage;
