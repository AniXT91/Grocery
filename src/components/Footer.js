// Footer.js
import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f8f8f8", padding: "20px", marginTop: "2rem" }}
    >
      <div style={{ textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} MyGroceryStore.com. All rights
          reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
