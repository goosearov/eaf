import React, { useState } from "react";
import Layout from "../../components/layout";
import newsList from "../../data/newsList";
import "./styles.css"

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
        <h3>Страницы</h3>
        <div>
          <ol>
            {newsList
              .slice(page * newsPerPage, page * newsPerPage + newsPerPage)
              .map((item, index) => (
                <div className="underline" key={index}>
                  <li className="news">
                    {item}
                  </li>
                </div>
              ))}
          </ol>
        </div>
        <div className="pagination">
          <div>
            {page ? <button className="previousButton" onClick={previousPage}>{page}</button> : null}
          </div>
          <div>
            <button className="currentPageButton">{page + 1}</button>
          </div>
          <div>
            {page !== maxPages - 1 ? (
              <button className="nextButton" onClick={nextPage}>{page + 2}</button>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminNews;
