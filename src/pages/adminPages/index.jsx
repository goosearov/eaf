import React from "react";
import pages from "../../data/pages";
import Layout from "../../components/layout";
import { ReactComponent as NewsRedactIcon } from "../../assets/newsRedactIcon.svg";
import "./styles.css";
import { NavLink } from "react-router-dom";

const AdminPages = () => {
  return (
    <Layout>
      <div className="pagesContainer">
        <h3>Страницы</h3>
        <div>
          <ol>
            {pages.map((page, index) => (
              <div className="underline" key={index}>
                <li className="pages">
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <NavLink 
                      to={page.path}
                      key={index}
                      style={{
                        textDecoration: "none"
                      }}
                    >
                       <div style={{fontWeight: "500px", fontSize: "26px", color: "#fff "}}>{page.name}</div>
                    </NavLink>
                    <div style={{marginRight: "10px"}}>
                      <NewsRedactIcon />
                    </div>
                  </div>
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
