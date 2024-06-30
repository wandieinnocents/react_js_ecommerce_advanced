import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../css/product.css";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";

const Product = () => {
  return (
    <Grid item xs={12} md={4} lg={4} xl={4}>
      {/* <Paper elevation={3}>Hello product</Paper> */}
      <Paper elevation={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://mojo.generalmills.com/api/public/content/QHZzPf1omUaoCsGXS_FguA_gmi_hi_res_jpeg.jpeg?v=f9fcb91a&t=466b54bb264e48b199fc8e83ef1136b4"
            title="Image"
          />
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Chip label="apparel" color="success" />
            </Box>

            <Typography
              variant="h5"
              component="div"
              // style={styles.center_content}
              style={styles.product_heading}
            >
              Timberland Shoe
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              style={styles.product_short_description}
            >
              Lizards are a widespreadLizards are a widespreadLi
            </Typography>

            <Typography
              variant="h6"
              component="div"
              style={styles.product_price}
            >
              30000 UGX
            </Typography>

            <Stack spacing={1} direction="row" style={styles.center_content}>
              <Rating
                name="half-rating-read"
                size="small"
                defaultValue={2.5}
                precision={0.5}
              />
            </Stack>

            <hr style={{ marginTop: "-1px" }} />
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<AddShoppingCartIcon />}
              >
                Cart
              </Button>

              <Button
                variant="contained"
                size="small"
                endIcon={<ArrowForwardIcon />}
              >
                Info
              </Button>
            </Stack>

            <Box style={styles.center_content} />
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

// custom css
const styles = {
  center_content: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center"
    // paddingTop: "5px",
    // paddingBottom: "5px"
  },

  product_image: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  product_heading: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    fontSize: "18px"
  },

  product_short_description: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    fontSize: "15px"
  },

  product_price: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    fontSize: "18px"
  }
};

export default Product;
