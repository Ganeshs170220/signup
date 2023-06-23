import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Box, IconButton } from "@mui/material";
import AddForm from "./components/AddForm";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const App = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [components, setComponents] = useState([]);

  const handleAddComponent = (index) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.splice(index, 0, { id: Date.now(), required: false });
      return updatedComponents;
    });
  };
  const handleDeleteComponent = (id) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
  };

  const handleToggleChange = (id) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id
          ? { ...component, required: !component.required }
          : component
      )
    );
  };

  return (
    <>
      <Header />
      <Box
        width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
        margin="auto"
        pt={"10px"}
        px={"10px"}
        textAlign="right"
        bgcolor="white"
        sx={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}
      >
        <IconButton onClick={() => handleAddComponent(components)}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column">
        {components.map((component, index) => (
          <div key={component.id}>
            <AddForm
              toggleValue={component.required}
              handleToggleChange={() => handleToggleChange(component.id)}
              onDelete={() => handleDeleteComponent(component.id)}
            />
            <Box
              width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
              margin="auto"
              pt={"10px"}
              px={"8px"}
              textAlign="right"
              bgcolor="white"
              sx={{
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={component.required}
                    onChange={() => handleToggleChange(component.id)}
                  />
                }
                label="Required"
                sx={{ marginRight: 1 }}
              />
              <IconButton onClick={() => handleDeleteComponent(component.id)}>
                <DeleteOutlineIcon />
              </IconButton>
              <IconButton onClick={() => handleAddComponent(index + 1)}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </div>
        ))}
      </Box>
    </>
  );
};

export default App;
