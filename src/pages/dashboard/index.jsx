import React from "react";
import Layout from "../../components/layout";
import { info } from "../../data/info";
import visitors from "../../data/visitors";
import numberFormatter from "../../utils/numberFormatter";
import "./styles.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboardContainer">
        <div className="infoContainer">
          <h3>Информация платформы</h3>
          <div className="info">
            <div>
              <h4>{numberFormatter(info.news)}</h4>
              <p className="infoText">новостей</p>
            </div>
            <div>
              <h4>{numberFormatter(info.programms)}</h4>
              <p className="infoText">программ</p>
            </div>
            <div>
              <h4>{numberFormatter(info.events)}</h4>
              <p className="infoText">событий</p>
            </div>
            <div>
              <h4>{numberFormatter(info.donations)}</h4>
              <p className="infoText">донатов</p>
            </div>
          </div>
        </div>
        <div className="visitorsContainer">
          <h3>Поситители платформы</h3>
          <div className="visitorsTable">
            <div className="visitorsGraph">
              <div
                style={{
                  height: "29px",
                  backgroundColor: "#1763FF",
                  width: "100%",
                  borderRadius: "30px",
                  marginBottom: "25px"
                }}
              ></div>
              <div
                style={{
                  height: "29px",
                  backgroundColor: "#0EC99B",
                  width: `${(visitors.online / visitors.total) * 100}%`,
                  borderRadius: "30px",
                  marginBottom: "25px"
                }}
              ></div>
              <div
                style={{
                  height: "29px",
                  backgroundColor: "#E9AD62",
                  width: `${(visitors.offline / visitors.total) * 100}%`,
                  borderRadius: "30px",
                }}
              ></div>
            </div>
            <div className="visitorsBox">
              <div className="visitors">
                <p className="visitorsText" style={{ color: "#1763FF" }}>Total :</p>
                <p className="visitorsNumbber" style={{ color: "#1763FF" }}>{numberFormatter(visitors.total)}</p>
              </div>
              <div className="visitors">
                <p className="visitorsText" style={{ color: "#0EC99B" }}>Online :</p>
                <p className="visitorsNumbber" style={{ color: "#0EC99B" }}>{numberFormatter(visitors.online)}</p>
              </div>
              <div className="visitors">
                <p className="visitorsText" style={{ color: "#E9AD62" }}>Offline :</p>
                <p className="visitorsNumbber" style={{ color: "#E9AD62" }}>{numberFormatter(visitors.offline)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="emptyContainer">
                
      </div>
    </Layout>
  );
};

export default Dashboard;
