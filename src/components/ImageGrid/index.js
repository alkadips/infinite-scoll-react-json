import React from "react";
import Image from "../Image/";
function ImageGrid({ imageObjects }) {
  return (
    <div className={"image-grid"}>
      {imageObjects.map((imageObject) => (
        <Image key={imageObject.node.nid} imageObject={imageObject.node} />
      ))}
    </div>
  );
}
export default ImageGrid;