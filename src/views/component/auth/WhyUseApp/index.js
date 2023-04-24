import React, { useContext, useState } from "react";
import "./whyuseApp.scss";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";
import { ReactComponent as LoginLogo } from "src/assets/images/phone-logo.svg";
import { ReactComponent as Puppybtn } from "src/assets/images/puppy-btn.svg";
import { IntlContext } from "src/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function WhyUseApp() {
  const intlContext = useContext(IntlContext);
  const puppi_login = intlContext?.messages;

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [DDArray, setDDArray] = useState([
    { id: 1, name: puppi_login?.why_use_app?.option_first },
    { id: 2, name: puppi_login?.why_use_app?.option_second },
    { id: 3, name: puppi_login?.why_use_app?.option_third },
  ]);

  const [state, setState] = React.useState({
    athlete: false,
    coach: false,
    manager: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const onCategorySelect = (data) => {
    const currentIndex = selectedCategory.indexOf(data);
    const newChecked = [...selectedCategory];
    if (currentIndex === -1) {
      newChecked.push(data);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelectedCategory(newChecked);
    console.log(selectedCategory, "selectedCategory");
  };
  const navigate = useNavigate();
  return (
    <div>
      <Box className="use-app-sec">
        <Box className="use-app-container">
          <Grid
            container
            xl={12}
            lg={12}
            spacing={1}
            className="use-app-content-sec"
          >
            <Grid
              className="use-app-logo-sec"
              item
              xl={4.1}
              lg={4.1}
              md={12}
              sm={12}
              xs={12}
            >
              {" "}
              <LoginLogo className="use-app-logo-img" />
            </Grid>
            <Grid item xl={7.9} lg={7.9} md={12} sm={12} xs={12}>
              <Card className="use-app-card">
                <CardContent className="use-app-card-content">
                  <Typography className="head-txt">
                    {puppi_login?.why_use_app?.hii}
                  </Typography>
                  <Box className="content-sec">
                    <Typography className="head-breadcrumbs">
                      {puppi_login?.why_use_app?.why_using}
                    </Typography>
                    <Typography className="select-head">
                      {puppi_login?.why_use_app?.select}
                    </Typography>
                  </Box>
                  {DDArray.map((value, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return (
                      <Box>
                        <FormControl sx={{ m: 1, margin: 0 }}>
                          <FormGroup>
                            <ListItemText
                              id={labelId}
                              primary={value?.name}
                              sx={{ color: "black" }}
                            />
                            <Box
                              className="chk-txt-group"
                              onClick={() => onCategorySelect(value?.id)}
                              key={index}
                              disablePadding
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    onChange={handleChange}
                                    className="group-chk "
                                    checked={
                                      selectedCategory.indexOf(value?.id) !== -1
                                    }
                                    tabIndex={-1}
                                  />
                                }
                                className="group_chk_label"
                              />{" "}
                            </Box>
                          </FormGroup>
                        </FormControl>
                      </Box>
                    );
                  })}
                  <Stack direction="row" className="use-app-btn-sec">
                    <Button
                      variant="contained"
                      className="use-app-buttons next-btn"
                      onClick={() => navigate("/phonenumber")}
                    >
                      {puppi_login?.why_use_app?.next}
                    </Button>
                    <Button
                      variant="contained"
                      className="use-app-buttons continue-btn"
                      startIcon={<Puppybtn className="login-facebook-icon" />}
                    >
                      {puppi_login?.why_use_app?.continue}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default WhyUseApp;
