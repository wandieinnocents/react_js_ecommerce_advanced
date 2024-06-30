import * as React from 'react';
import { PageHeader } from '../components/PageHeader'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';
import { Chip, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PopularBlogs from '../components/PopularBlogs';
import PopularProductCategories from '../components/PopularProductCategories';



const Shop = () => {
  return (
    <>
    {/* pager header */}
    <div>
    <PageHeader  title="Our Shop Page" current_page="Shop"/>
    </div>

{/* page content */}
    <Container>
    <div>
    <Grid container spacing={4} style={{ marginTop:"5px" }}  >

    {/* main left column */}
    <Grid item xs={12} md={9} lg={9} xl={9}>

    {/* shop products grid */}
    <Grid container spacing={2}>
       <Product />
       <Product />
       <Product />
       <Product />
       <Product />
       <Product />
    </Grid>
       
    </Grid>


{/* main right column */}
    <Grid item xs={12}  md={3} lg={3} xl={3} >
      {/* <Paper elevation={3}></Paper> */}
      {/* search bar */}
      <TextField
      variant="outlined"
      fullWidth
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />

<hr></hr>

    {/* categories */}
    <Typography
      variant="h5"
      component="div"
      style={styles.section_heading}
    >
      Popular Categories
    </Typography> <hr></hr>

    <PopularProductCategories />
    
    
   <hr></hr>

{/* popular blogs */}
   <Typography  variant="h5"  component="div" style={styles.section_heading} >
      Popular Blog Posts
    </Typography>

    {/* grid */}
    <Grid container rowSpacing={1} >
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
        <PopularBlogs />
       
    </Grid>

    
    {/* end grid */}





    </Grid>

       
    </Grid>

    <br></br>

    </div>
    </Container>
    </>
  )
}


// custom css
const styles = {
  center_content: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px"
  },

  
  section_heading: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: "10px",
    fontWeight:"bold",
    paddingBottom: "5px",
    fontSize: "18px"
  },

 
  

  
};


export default Shop