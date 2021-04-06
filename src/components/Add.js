import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Button,
  Select,
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormHelperText,
  FormGroup,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { addPost } from "./actions/mobileActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  label: {
    minWidth: "160px",
  },
  form: {
    margin: "50px 25px",
  },
  SelectField: {
    width: "200px",
    marginLeft: "80px",
  },
  options: {
    width: "500px",
    height: "230px",
    border: "2px solid black",
    display: "flex",
    padding: "40px",
    marginTop: "20px",
  },
}));

const Add = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const brands = ["Sony", "Samsung", "Apple", "Nokia", "LG"];
  const memories = ["16GB", "32GB", "64GB", "128GB"];

  const [checkbox, setCheckbox] = useState({
    dualSim: true,
    nfc: false,
    fourG: false,
  });

  const { dualSim, nfc, fourG } = checkbox;

  const [screen, setScreen] = useState("4");

  const [color, setColor] = useState("Black");

  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState(brands[0]);
  const [memory, setMemory] = useState(memories[0]);

  const isFormValid = () => {
    if (model && year) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const handleScreenChange = (event) => {
    setScreen(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleMemoryChange = (event) => {
    setMemory(event.target.value);
  };

  const submit = () => {
    const mobile = {
      model,
      brand,
      year,
      description: `This is ${model} manfactured on ${year}`,
      dualSim,
      NFC: nfc,
      fourG,
      memory,
      color,
    };
    addPost(dispatch, mobile);
    history.push("/");
  };

  return (
    <Box display="flex" overflow="hidden" height="100vh">
      <Box className={classes.form}>
        <Box display="flex" alignItems="center" marginBottom="20px">
          <Typography className={classes.label} variant="h6">
            Model
          </Typography>
          <TextField
            error={!model}
            className={classes.SelectField}
            onChange={handleModelChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={model}
            required
          />
        </Box>
        <Box display="flex" alignItems="center" marginBottom="20px">
          <Typography variant="h6">Manufacture Year</Typography>
          <TextField
            error={!year}
            type="number"
            onChange={handleYearChange}
            className={classes.SelectField}
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={year}
          />
        </Box>
        <Box display="flex" alignItems="center" marginBottom="20px">
          <Typography className={classes.label} variant="h6">
            Brand
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.SelectField}
            size="small"
          >
            <Select native value={brand} onChange={handleBrandChange}>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" alignItems="center" marginBottom="20px">
          <Typography className={classes.label} variant="h6">
            Memory
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.SelectField}
            size="small"
          >
            <Select native value={memory} onChange={handleMemoryChange}>
              {memories.map((memory, index) => (
                <option key={index} value={memory}>
                  {memory}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box marginLeft="180px">
        <Box className={classes.options}>
          <Box className={classes.checkbox}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dualSim}
                      onChange={handleChange}
                      name="dualSim"
                    />
                  }
                  label="Dual Sim"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nfc}
                      onChange={handleChange}
                      name="nfc"
                    />
                  }
                  label="NFC"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fourG}
                      onChange={handleChange}
                      name="fourG"
                    />
                  }
                  label="4G"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box marginLeft="30px" display="flex">
            <Box paddingTop="9px" marginRight="5px">
              Screen
            </Box>
            <Box>
              <RadioGroup
                aria-label="screen"
                name="screen"
                value={screen}
                onChange={handleScreenChange}
              >
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                <FormControlLabel value="6" control={<Radio />} label="6" />
              </RadioGroup>
            </Box>
          </Box>
          <Box marginLeft="30px" display="flex">
            <Box paddingTop="9px" marginRight="5px">
              Color
            </Box>
            <Box>
              <RadioGroup
                aria-label="color"
                name="color"
                value={color}
                onChange={handleColorChange}
              >
                <FormControlLabel
                  value="White"
                  control={<Radio />}
                  label="White"
                />
                <FormControlLabel
                  value="Black"
                  control={<Radio />}
                  label="Black"
                />
                <FormControlLabel
                  value="Gold"
                  control={<Radio />}
                  label="Gold"
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          width="500px"
          justifyContent="flex-end"
          marginTop="20px"
        >
          <Box marginRight="20px">
            <Button
              onClick={() => history.goBack()}
              variant="contained"
              color="secondary"
            >
              Back
            </Button>
          </Box>
          <Button
            disabled={!isFormValid()}
            onClick={submit}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Add;
