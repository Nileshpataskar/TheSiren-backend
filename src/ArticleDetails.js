import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticleContext } from "./ArticleContext";
import he from "he";
import image from "./images.png";
import Logo from "./Logo";
import "./articleDetails.css"
import { Facebook, Twitter, Youtube } from "lucide-react";

function ArticleDetails() {
  const { id } = useParams();
  const { data } = useContext(ArticleContext);

  const { data2 } = useContext(ArticleContext);
  const article =
    data.find((article) => article.title === id) ||
    data2.find((article) => article.title === id);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="leftLogo">
        <Logo />
        <button className="backbutton" onClick={goBack}>
          BACK

        </button>
      </div>
      {article ? (
        <div className="grisha">
          <div className="ptext">
            <img src={image} alt="alt" className="profile" />
           <div className="flexcolumn"> 
            <h3> Nilesh Pataskar</h3>
            <div className="social">
              <Facebook color="#5d83c0" strokeWidth={1.5} />
              <Youtube color="#c32830" strokeWidth={1.5} />
              <Twitter color="#5d83c0" strokeWidth={1.5} />
            </div>
            </div>
          </div>

          <div className="articleDetails">
            <h2 className="title">{article.title}</h2>
            <img src={article.urlToImage} className="imagep" alt="alt" />
            <p>{article.description}</p>
            <p>{he.decode(article.content)}</p>
            <h5>Author: {article.author}</h5>
            <h5>Date: {article.publishedAt}</h5>
            <h4>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Click here to Explore More
              </a>
            </h4>
          </div>
        </div>
      ) : (
        <p>Article not found.</p>
      )}

    </div>
  );
}

export default ArticleDetails;
