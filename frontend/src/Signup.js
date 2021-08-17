import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  Divider,
  TextField,
  FormControlLabel,
  Button
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Checkbox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const Signup = () => {
  return (
    <div>
      <div className="icon">
        <div className="icon_class">
          <PersonAddIcon fontSize="large" />
        </div>
        <div className="text">Sign up</div>
      </div>
      <div className="row">
        <div className="col-6">
          <TextField
            id="firstname"
            type="text"
            variant="outlined"
            label="Enter First Name"
            fullWidth
          />
        </div>
        <div className="col-6">
          <TextField
            id="lastname"
            type="text"
            variant="outlined"
            label="Enter Last Name"
            fullWidth
          />
        </div>
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
          label="i agree to all terms and conditions"
        />
        <Button variant="contained" color="primary">
          Create Account
        </Button>
      </div>
      <Divider variant="middle" />
      <p className="text-center">
        <Link to="\login">Already have an account?</Link>
      </p>
    </div>
  );
};
export default Signup;
