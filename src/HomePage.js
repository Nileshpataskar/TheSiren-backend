import React, { useState, useEffect } from "react";
import "./HomePage.css";
import TopPart from "./TopPart";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function HomePage() {
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  const [visibleArticles, setVisibleArticles] = useState(4);
  const [visibleArticlesHor, setVisibleArticlesHor] = useState(15);

  useEffect(() => {
    const fetchData3 = async () => {
      try {
        const url = "https://backend-g6ha.onrender.com/bollywood";
        const response = await fetch(url);
        const responseData = await response.json();

        setData3(responseData);
      } catch (err) {
        console.log("Error occurred in home page while fetching", err);
      }
    };

    const fetchData4 = async () => {
      try {
        const url = "https://backend-g6ha.onrender.com/bollywood";
        const response4 = await fetch(url);
        const responseData4 = await response4.json();

        setData4(responseData4);
      } catch (err) {
        console.log("Error occurred in home page while fetching", err);
      }
    };
    const fetchData5 = async () => {
      try {
        const url = "https://backend-g6ha.onrender.com/bollywood";
        const response5 = await fetch(url);
        const responseData5 = await response5.json();
        setData5(responseData5);
      } catch (err) {
        console.log("Error occurred in home page while fetching", err);
      }
    };

    fetchData3();
    fetchData4();

    fetchData5();
  }, []);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  const loadMoreArticlesHorizontal = () => {
    setVisibleArticlesHor(
      (prevVisibleArticleshor) => prevVisibleArticleshor + 3
    );
  };

  //mobile
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

      <div className="Mai">
        <div className="MainImage">
          {data5 &&
            data5.slice(14, 15).map((article, index) => (
              <div className="home--card" key={index}>
                <Link to={`/article/${article.title}`} className="readmorelink">
                  <img
                    className="thumbnail1"
                    src={article.urlToImage}
                    alt="alt"
                  />
                </Link>
              </div>
            ))}

          <div className="secondImage">
            {" "}
            {data5 &&
              data5.slice(10, 11).map((article, index) => (
                <div className="home--card" key={index}>
                  <Link
                    to={`/article/${article.title}`}
                    className="readmorelink"
                  >
                    <img
                      className="thumbnail2"
                      src={article.urlToImage}
                      alt="alt"
                    />
                  </Link>
                </div>
              ))}
            {data5 &&
              data5.slice(2, 3).map((article, index) => (
                <div className="home--card" key={index}>
                  <Link
                    to={`/article/${article.title}`}
                    className="readmorelink"
                  >
                    <img
                      className="thumbnail3"
                      src={article.urlToImage}
                      alt="alt"
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>

      <h1>The Latest</h1>

      <div className="homelander">
        <div className="scrollable-row">
          {data3 &&
            data3.slice(0, visibleArticles).map((article, index) => (
              <div className="home-article-card" key={index}>
                <img
                  className="article-image"
                  src={article.urlToImage}
                  width={200}
                  height={150}
                  alt="alt"
                />
                <Link to={`/article/${article.title}`} className="readmorelink">
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                    <p className="article-publishedAt">{article.publishedAt}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {data3.length > visibleArticles && (
        <button className="load" onClick={loadMoreArticles}>
          View More
        </button>
      )}

      {/* Second PArt */}

      <h1>Latest Articles</h1>
      <div className="midpart">
        <div className="homelander2">
          <div className="scrollable-row2">
            {data4 &&
              data4.slice(11, visibleArticlesHor).map((article, index) => (
                <Link to={`/article/${article.title}`} className="readmorelink">
                  <div className="home-article-card2" key={index}>
                    <img
                      className="article-image"
                      src={article.urlToImage}
                      alt="alt"
                    />

                    <div className="articzle-content2">
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
        </div>

        <div className="advertisement">
          <h1>Advertisement</h1>
        </div>
      </div>
      {data4.length > visibleArticlesHor && (
        <button className="load" onClick={loadMoreArticlesHorizontal}>
          View More
        </button>
      )}
      <h1>Latest Stories</h1>
      <div className="homelander">
        <div className="scrollable-row">
          {data4 &&
            data4.slice(0, visibleArticles).map((article, index) => (
              <Link to={`/article/${article.title}`} className="readmorelink">
                <div className="home-article-card" key={index}>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                    <p className="article-publishedAt">{article.publishedAt}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {data4.length > visibleArticles && (
        <button className="load" onClick={loadMoreArticles}>
          View More
        </button>
      )}
    </div>
  );
}

export default HomePage;
