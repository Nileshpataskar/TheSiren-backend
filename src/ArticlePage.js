import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ArticleContext } from "./ArticleContext";
import "./App.css";
import TopPart from "./TopPart";
import Navbar from "./Navbar";

function ArticlePage() {
  const { category } = useParams();
  const [visibleArticles, setVisibleArticles] = useState(7);
  const { data, setData, data2, setData2 } = useContext(ArticleContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend-g6ha.onrender.com/${category}`
        );
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (err) {
        console.log("Error occurred while fetching", err);
      }
    };

    const fetchData2 = async () => {
      try {
        const url = "https://backend-g6ha.onrender.com/bollywood";
        const response2 = await fetch(url);
        const responseData2 = await response2.json();
        setData2(responseData2);
        console.log(responseData2);
      } catch (err) {
        console.log("Error occurred while fetching", err);
      }
    };

    fetchData();
    fetchData2();
  }, [category, setData, setData2]);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 7);
  };

  // Ensure data and data2 are arrays before using array methods
  const dataArray = Array.isArray(data) ? data : [];
  const data2Array = Array.isArray(data2) ? data2 : [];


  
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const checkDeviceType = () => {
      if (window.innerWidth < 768) {
        setDeviceType("mobile");
      } else if (window.innerWidth < 992) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);
  return (
    <div>
       {deviceType === "mobile" && <Navbar />}
      {deviceType !== "mobile" && <TopPart />}


      <div className="article-page">
        <div className="leftarticleContainer">
          <h2 className="category-title">{category}</h2>
          <div className="flexing">
            {dataArray &&
              dataArray.slice(0, visibleArticles).map((article, index) => (
                <Link to={`/article/${article.title}`} className="readmorelink">
                  <div className="article-card" key={index}>
                    <img
                      className="article-image2"
                      src={article.urlToImage}
                      alt="alt"
                    />
                    <div className="article-content">
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-description">
                        {article.description}
                      </p>
                      <p className="article-publishedAt">
                        {article.publishedAt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="backgroundForButton">
            {dataArray.length > visibleArticles && (
              <button className="load-more-button" onClick={loadMoreArticles}>
                Load More
              </button>
            )}
          </div>
        </div>
        <div className="rightarticleContainer">
          <h2 className="category-title">Top Headlines</h2>
          {data2Array &&
            data2Array.slice(28, 34).map((article, index) => (
              <Link to={`/article/${article.title}`} className="readmorelink">
                <div className="article-card" key={index}>
                  <img
                    className="article-image2"
                    src={article.urlToImage}
                    alt="alt"
                    width={600}
                  />

                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>

                    <p className="article-description">{article.description}</p>
                    <p className="article-publishedAt">{article.author}</p>
                 
                  </div>
                </div>
              </Link>
           ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
