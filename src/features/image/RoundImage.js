import React from "react";
// Style
import "./image.css";

const RoundImage = ({ url, size }) => (
  <div
    className="image-round"
    style={{ backgroundImage: `url(${url})`, width: size, height: size }}
  />
);

export default RoundImage;
