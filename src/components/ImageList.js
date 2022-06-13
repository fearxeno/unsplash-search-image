import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return (
      <div>
        <img key={id} src={urls.regular} alt={description} />
      </div>
    );
  });
  return <div className="imageGallery">{images}</div>;
};

export default ImageList;
