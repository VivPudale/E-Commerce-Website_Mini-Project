import React, { useEffect, useState } from "react";
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
import axios from "axios";

const CatagoryList = ({ setSelectedCategory }) => {
  //   const categories = ["Electronics", "Clothing", "Furniture", "Accessories"];

  const [catList, setCatList] = useState([]);
  //   const [catName, setCatName] = useState("");

  const getCatList = async () => {
    try {
      let response = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      //   console.log(response.data);
      setCatList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatList();
  }, []);

  //   useEffect(()=>{
  //     if(catName!==""){
  //         // console.log("hello");
  //         // console.log(catName)
  //         getProductsByCat();
  //     }
  //   },[catName])

  //   console.log(catList)

  return (
    <>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ textAlign: "center", mb: 2 }}
      >
        Category
      </Typography>

      {/* <List>
        {categories.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemText primary="Electronics" />
            </ListItemButton>
          </ListItem>
      </List> */}

      <List>
        {catList.map((v, i) => {
          return (
            <ListItem disablePadding key={i}>
              <ListItemButton onClick={() => setSelectedCategory(v)}>
                <ListItemText primary={v} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CatagoryList;
