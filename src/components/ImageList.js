import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return (
      <div key={id}>
        <a  href={urls.regular} target="blank">
          <img src={urls.regular} alt={description} />
        </a>
      </div>
    );
  });
  return <div className="imageGallery">{images}</div>;
};

export default ImageList;
