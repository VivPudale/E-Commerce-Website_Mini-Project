import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import CatagoryList from "./CatagoryList";
import Products from "./Products";

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      {/* Centered Main Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Our Products
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 2,
          padding: 3,
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", lg: "30%" },
            minWidth: { lg: 250 },
            padding: 2,
            boxSizing: "border-box",
          }}
        >
          <CatagoryList setSelectedCategory={setSelectedCategory} />
        </Paper>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Products selectedCategory={selectedCategory} />
          </Paper>
        </Box>
      </Box>
    </> 
  );
};

export default Hero;
