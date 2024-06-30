import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";


const PopularBlogs = () => {
  return (
   <>
    <Grid item xs={3} md={3} lg={3} xl={3}>
          <img style = { styles.popular_blog_image} src="https://mojo.generalmills.com/api/public/content/QHZzPf1omUaoCsGXS_FguA_gmi_hi_res_jpeg.jpeg?v=f9fcb91a&t=466b54bb264e48b199fc8e83ef1136b4" alt="" />

        </Grid>
        <Grid item xs={9} md={9} lg={9} xl={9}>
        <Typography style={styles.popular_blog_title}>
          Poor people campaign Poor 
        </Typography>
        
        <Typography variant="body"  style={styles.popular_blog_date}>
          05/July/2024
        </Typography>

      </Grid>
      </>
  )
}

const styles = {
    popular_blog_image : {
        width:"60px",
        objectFit: 'cover',
        height:"50px",
    
      },
    
      popular_blog_title : {
        fontSize: "13px",
        fontWeight:"bold",
      },
    
      popular_blog_date : {
        fontSize: "12px",
        // fontWeight:"bold",
      },
    
}
export default PopularBlogs