import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export const InputTextField = withStyles({
  root: {
    "& label": {
      color: "#000000 ",
    },
    "& .MuiOutlinedInput-root": {
      //   background: "#1b1b1b",
    //   border: "none !important",
    //   borderRadius: "0px",
      lineHeight: "21px",
      width: "100%",
      variant: "standard",
      color: "#000000 ",
      //   marginTop: "15px",
    //   borderBottom: "1px solid #000000 !important",
    },
  },
})(TextField);

export const InputSearchField = withStyles({})(TextField);
