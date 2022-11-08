import React from "react";
import pages from "../../data/pages";
import Layout from "../../components/layout";
import "./styles.css";

const AdminPages = () => {
  return (
    <Layout>
      <div className="pagesContainer">
        <h3>Страницы</h3>
        <div>
          <ol>
            {pages.map((item, index) => (
              <div className="underline" key={index}>
                <li className="pages">
                  {item}
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPages;
