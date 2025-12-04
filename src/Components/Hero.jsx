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
          gap: 2,
          padding: 3,
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "30%",
            minWidth: "250px",
            padding: 2,
          }}
        >
          <CatagoryList setSelectedCategory={setSelectedCategory} />
        </Paper>

        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Products selectedCategory={selectedCategory} />
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default Hero;
