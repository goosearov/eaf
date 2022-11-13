import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout";
import newsList from "../../data/newsList";
import { ReactComponent as AddNewsIcon } from "../../assets/addNews.svg";
import { ReactComponent as NewsRedactIcon } from "../../assets/newsRedactIcon.svg";
import "./styles.css";

const AdminNews = () => {
  const [page, setPage] = useState(0);
  const newsPerPage = 6;
  const maxPages = Math.ceil(newsList.length / newsPerPage);

  const nextPage = () => {
    if (page !== maxPages) setPage(page + 1);
  };

  const previousPage = () => {
    if (page !== 0) setPage(page - 1);
  };

  return (
    <Layout>
      <div className="newsContainer">
        <div className="description">
          <h3>Страницы</h3>
          <NavLink className="addNews" to="format">
            <p className="newsAddTitle">Добавить новость</p>
            <AddNewsIcon />
          </NavLink>
        </div>
        <div>
          <ol>
            {newsList
              .slice(page * newsPerPage, page * newsPerPage + newsPerPage)
              .map((item, index) => (
                <div className="underline" key={index}>
                <li className="pages">
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>{item}</div>
                    <div style={{marginRight: "10px"}}>
                      <NewsRedactIcon />
                    </div>
                  </div>
                </li>
              </div>
              ))}
          </ol>
        </div>
        <div className="pagination">
          <div>
            {page ? (
              <button className="previousButton" onClick={previousPage}>
                {page}
              </button>
            ) : null}
          </div>
          <div>
            <button className="currentPageButton">{page + 1}</button>
          </div>
          <div>
            {page !== maxPages - 1 ? (
              <button className="nextButton" onClick={nextPage}>
                {page + 2}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminNews;
