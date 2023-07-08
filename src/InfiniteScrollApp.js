import React, { useState, useEffect, useRef } from "react";
import ImageGrid from "./components/ImageGrid/";
import Loading from "./components/Loading/";

 export default function InfiniteScrollApp() {
  const [imageObjects, setImageObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [page, setCurrentPage] = useState(1);
  const ref = useRef(1);

  useEffect(() => {
    fetchImages(1);
    window.addEventListener("scroll", handleScroll);
    console.log("useeffect ...");
  }, []);

  const fetchImages = () => {    
    const unsplashEndpoint = `${process.env.REACT_APP_API_BASE}/feeds?page=${ref.current}`
    setIsLoading(true);
    fetch(unsplashEndpoint)
      .then((data) => data.json())
      .then((data) => {
        setCurrentPage((page) + 1)
        setImageObjects((imageObjects) => [...imageObjects, ...data.nodes]);
        setIsFirstLoad(false);
        setIsLoading(false);
      })
      .catch((e) => {
        alert(
          "Loading image from Unsplash failed. This is likely due to exceeding free API limit."
        );
      });
  };

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.offsetHeight

    ) {
      ref.current++;
      fetchImages();
    }
  };
  return (
    <div className="App">
      <div className="container">
        <>
              {isFirstLoad ? (
                <Loading />
              ) : (
                <>
                  {imageObjects.length ? (
                    <>
                      <ImageGrid imageObjects={imageObjects} />
                    </>
                  ) : null}
                </>
              )}
              {isLoading && (
                <div className={"loading-new-images-container"}>
                  <div className="loading-new-images">
                    Loading New Images ...
                  </div>
                </div>
              )}
        </>
      </div>
    </div>
  );
}
