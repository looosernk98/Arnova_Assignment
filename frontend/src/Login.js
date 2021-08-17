import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  Divider,
  Button,
  FormControlLabel,
  TextField
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Checkbox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const Login = () => {
  return (
    <div>
      <div className="icon">
        <div className="icon_class">
          <PersonIcon fontSize="large" />
        </div>
        <div className="text">Log in</div>
      </div>

      <div className="row m-2">
        <TextField
          id="email"
          type="text"
          variant="outlined"
          label="Enter Email"
          fullWidth
        />
        <TextField
          id="password"
          type="text"
          variant="outlined"
          label="Enter Password"
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<checkedIcon fontSize="small" />}
              name="checked"
            />
          }
          label="Remember me"
        />
        <Button variant="contained" color="primary">
          Log in
        </Button>
      </div>
      <Divider variant="middle" />
      <p className="text-center">
        <Link to="\signup">create Account</Link>
      </p>
    </div>
  );
};

export default Login;
