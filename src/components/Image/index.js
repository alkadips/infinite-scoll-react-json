import React from "react";
import "./Image.css";

const Image = ({ imageObject }) => {
  const date = new Date(
    parseInt(imageObject.last_update + "000")
  ).toDateString();
  return (
    <div className="image-wrapper">
      <div className="image">
        <img
          src={imageObject.ImageStyle_thumbnail}
          alt={imageObject.author_name}
        />
      </div>
      <div className="image-details">
        <strong>{imageObject.title}</strong>
        <div style={{ marginTop: "10px" }}>{date} </div>
      </div>
    </div>
  );
};

export default Image;
