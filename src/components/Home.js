import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Button,
  Select,
  FormControl,
  Divider,
} from "@material-ui/core";
import Table from "./Table";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getModels,
  getMobiles,
  getBarChartData,
  getPieChartData,
} from "../components/helpers/index";

const useStyles = makeStyles((theme) => ({
  Wrapper: {
    width: "60%",
  },
  chartsWrapper: {
    width: "40%",
    justifyContent: "center",
    display: "flex",
  },
  Header: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  Content: {
    margin: "20px 15px",
  },
  SelectField: {
    minWidth: "200px",
    marginLeft: "80px",
  },
  button: {
    background: "#53A8E2",
  },
  typo: {
    color: "#53A8E2",
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const { mobiles } = useSelector((state) => state);

  const [selectedBrand, setSelectedBrand] = useState("");
  const brands = [...new Set(mobiles.map((mobile) => mobile.brand))];

  const [selectedModel, setSelectedModel] = useState("");
  const [models, setModels] = useState([]);

  const [tableMobiles, setTableMobiles] = useState(
    getMobiles(mobiles, selectedBrand, selectedModel)
  );

  useEffect(() => {
    setModels(getModels(mobiles, selectedBrand));
  }, []);
  const barChartData = getBarChartData(mobiles);
  const pieChartData = getPieChartData(mobiles);

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedModel("");
    setSelectedBrand(event.target.value);
    const filteredModels = getModels(mobiles, event.target.value);
    setModels(filteredModels);
  };

  const handleSearchClick = () => {
    setTableMobiles(getMobiles(mobiles, selectedBrand, selectedModel));
  };

  return (
    <Box display="flex" overflow="hidden" height="100vh">
      <Box className={classes.Wrapper}>
        <Box marginBottom="60px" marginTop="20px" className={classes.Header}>
          <Typography className={classes.typo} variant="h4">
            Mobile Shop Application
          </Typography>
          <Button
            onClick={() => history.push("/add")}
            variant="contained"
            color="secondary"
          >
            Add New Mobile
          </Button>
        </Box>

        <Box className={classes.Content}>
          <Box display="flex" alignItems="center">
            <Box>
              <Box display="flex" alignItems="center" marginBottom="20px">
                <Typography variant="h6">Model</Typography>
                <FormControl
                  variant="outlined"
                  className={classes.SelectField}
                  size="small"
                >
                  <Select
                    native
                    value={selectedModel}
                    onChange={handleModelChange}
                  >
                    <option value="">none</option>
                    {models.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">Brand</Typography>
                <FormControl
                  variant="outlined"
                  className={classes.SelectField}
                  size="small"
                >
                  <Select
                    native
                    value={selectedBrand}
                    onChange={handleBrandChange}
                  >
                    <option value="">none</option>
                    {[
                      brands.map((brand, index) => (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      )),
                    ]}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box marginLeft="40px">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box marginTop="20px">
            <Table mobiles={tableMobiles} />
          </Box>
          <Box marginTop="20px">
            <Typography>
              {selectedModel && selectedBrand && tableMobiles[0].description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.chartsWrapper}>
        <Box width="60%" marginTop="100px">
          <BarChart chartData={barChartData} />
          <PieChart chartData={pieChartData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
