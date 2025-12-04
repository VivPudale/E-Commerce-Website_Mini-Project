import React, { useEffect, useState } from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import axios from "axios";

const Products = ({ selectedCategory }) => {
  const [getPro, setGetPro] = useState([]);

  const getProducts = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      //   console.log(response.data.products);
      setGetPro(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCat = async () => {
    try {
      let response = await axios.get(
        `https://dummyjson.com/products/category/${selectedCategory}`
      );
      // console.log(response.data.products);
      setGetPro(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory !== "") {
      getProductsByCat();
    }
  }, [selectedCategory]);

  return (
    <>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ textAlign: "center", mb: 2 }}
      >
        Products
      </Typography>

      <Grid container spacing={2} sx={{ width: "100%", overflowX: "hidden" }}>
        {/* {console.log(getPro)} */}
        {getPro.map((v, i) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={i}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 250,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={v.images?.[0]}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent sx={{ height: 120, overflow: "hidden" }}>
                  <Typography variant="h6">{v.title}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3, // number of lines to show
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {v.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
