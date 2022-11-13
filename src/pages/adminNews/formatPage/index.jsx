import React, { useState } from "react";
import Layout from "../../../components/layout";
import languages from "../../../data/languages";
import { ReactComponent as AddNewsIcon } from "../../../assets/addNews.svg";
import { ReactComponent as MediaIcon } from "../../../assets/mediaIcon.svg";
import { ReactComponent as NewsRedactIcon } from "../../../assets/newsRedactIcon.svg";
import { ReactComponent as NewsDeleteIcon } from "../../../assets/newsDeleteIcon.svg";

import "./styles.css";
import AuthProvider from "../../../contexts/auth";

const FormatPage = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("Русский");
  const toggle = () => setShowButtons(!showButtons);
  const onLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  }
  return (
    <Layout>
      <div className="newsFormatContainer">
        <div className="description">
          <h3>Создание новости</h3>
          <div className="addNews" onClick={toggle}>
            <p className="newsAddTitle">Добавить новый язык</p>
            <AddNewsIcon />
          </div>
        </div>
        <div>
          <div className="contentContainer">
            <div className="formContainer">
              <form style={{ margin: 0, padding: 0 }}>
                <div style={{ marginBottom: "28px" }} className="newsInput">
                  <label style={{ marginBottom: "15px" }} className="newsLabel">
                    Выберите язык новости
                  </label>
                  <select
                    name="select"
                    onChange={onLanguageChange}
                    style={{
                      outline: "none",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid #B9B9B9",
                      padding: "5px",
                      color: "#E9AD62",
                    }}
                  >
                    {languages.map((language) => (
                      <option
                        value={language.label}
                        selected={selectedLanguage === language.label}
                      >
                        {language.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: "28px" }} className="newsInput">
                  <label style={{ marginBottom: "15px" }} className="newsLabel">
                    Заголовок новости
                  </label>
                  <input type="text" placeholder="Введите заголовк" />
                </div>
                <div style={{ marginBottom: "28px" }} className="newsInput">
                  <label style={{ marginBottom: "15px" }} className="newsLabel">
                    Содержание новости
                  </label>
                  <textarea placeholder="Введите текст"></textarea>
                </div>
                <div className="newsInput" style={{ marginBottom: "128px" }}>
                  <label style={{ marginBottom: "15px" }} className="newsLabel">
                    Автор новости
                  </label>
                  <input type="text" placeholder="Введите автора" />
                </div>
                <div
                  className="buttons"
                  style={{ display: showButtons ? "none" : "block" }}
                >
                  <button className="saveButton">Сохранить</button>
                  <button className="cancelButton">Отмена</button>
                </div>
              </form>
            </div>
            <div className="mediaContainer">
              <div style={{ marginBottom: "35px" }}>
                <p className="mediaTitle">Фотография обложки</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="blackContainer1">
                    <div
                      style={{
                        margin: "auto",
                        width: "77px",
                        height: "70px",
                        textAlign: "center",
                      }}
                    >
                      <MediaIcon />
                      <p className="mediaDescr">Добавить медиафайл</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "17px",
                    }}
                  >
                    <NewsRedactIcon style={{ marginBottom: "25px" }} />
                    <NewsDeleteIcon />
                  </div>
                </div>
              </div>
              <div>
                <p className="mediaTitle">Фотография обложки</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="blackContainer2">
                    <div
                      style={{
                        margin: "auto",
                        width: "77px",
                        height: "70px",
                        textAlign: "center",
                        display: "flex",
                        width: "fit-content",
                        alignItems: "center",
                      }}
                    >
                      <MediaIcon />
                      <p style={{ marginLeft: "10px" }} className="mediaDescr">
                        Добавить медиафайл
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "17px",
                    }}
                  >
                    <NewsRedactIcon style={{ marginBottom: "25px" }} />
                    <NewsDeleteIcon style={{ marginBottom: "25px" }} />
                    <AddNewsIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormatPage;
