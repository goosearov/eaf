import React, { useState } from "react";
import Layout from "../../../components/layout";
import { ReactComponent as AddNewsIcon } from "../../../assets/addNews.svg";
import { ReactComponent as NewsRedactIcon } from "../../../assets/newsRedactIcon.svg";
import { ReactComponent as NewsDeleteIcon } from "../../../assets/newsDeleteIcon.svg";
import { ReactComponent as WhiteMediaIcon } from "../../../assets/whiteMediaIcon.svg";
import languages from "../../../data/languages";
import teamMembers from "../../../data/team";
import sponsors from "../../../data/sponsors";
import "./styles.css";

const MainPage = () => {
  const [people, setPeople] = useState(teamMembers);
  const [selectedLanguage, setSelectedLanguage] = useState("Русский");
  const [showAddRow, setShowAddRow] = useState(false);

  const onLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleAddRow = (event) => {
    event.preventDefault();
    setPeople([
      ...people,
      {
        name: event.target.name.value,
        role: event.target.role.value,
        insta: event.target.insta.value,
        facebook: event.target.facebook.value,
        twitter: event.target.twitter.value,
        photo: event.target.photo.value,
      },
    ]);
    // logic to add new row
    setShowAddRow(false);
  };

  return (
    <Layout>
      <div className="mainPageContainer">
        <div className="description">
          <h3>Блок Допомога</h3>
          <div className="addNews">
            <p className="newsAddTitle">Добавить новый язык</p>
            <AddNewsIcon />
          </div>
        </div>
        <form style={{ margin: 0, padding: 0 }}>
          <div
            className="newsInput"
            style={{ width: "183px", marginBottom: "15px" }}
          >
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

          <div
            className="newsInput"
            style={{ width: "1319px", marginBottom: "18px" }}
          >
            <textarea placeholder="Нижче Ви можете побачити кнопки, натиснув на які зможете допомогти, тим хто цього потребує. Допомога важлива різна. Ви можете допомогти коштами, можете зробити репост, можете стати частиної нашої команди чи стати нашим партнером."></textarea>
          </div>
        </form>
      </div>

      <div className="mainPageContainer">
        <div className="description">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ marginRight: "30px" }}>Блок Команда</h3>
            <div className="newsInput" style={{ width: "183px" }}>
              <select
                name="select"
                onChange={onLanguageChange}
                defaultValue={selectedLanguage}
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
          </div>
          <div
            className="addNews"
            onClick={() => {
              setShowAddRow(true);
            }}
          >
            <p className="newsAddTitle">Добавить</p>
            <AddNewsIcon />
          </div>
        </div>
        <div className="body">
          <table className="teamTable">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Должность</th>
                <th>Instagram</th>
                <th>Facebook</th>
                <th>Twitter</th>
                <th>Фото</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {people.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.insta}</td>
                  <td>{member.facebook}</td>
                  <td>{member.twitter}</td>
                  <td>
                    <img
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                      }}
                      src={member.photo}
                      alt="avatar"
                    />
                  </td>
                  <td className="iconEdit">
                    <NewsRedactIcon />
                  </td>
                  <td className="iconDelete">
                    <NewsDeleteIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showAddRow && (
            <form
              onSubmit={handleAddRow}
              style={{
                backgroundColor: "transparent",
                margin: "0",
                padding: "15px",
                display: "flex",
                justifyContent: "space-around",
                height: "95px",
                alignItems: "center",
              }}
            >
              <input name="name" />
              <input name="role" />
              <input name="insta" />
              <input name="facebook" />
              <input name="twitter" />
              <input name="photo" />
              <div>
                <button
                  type="submit"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <AddNewsIcon />
                </button>
                <button
                  onClick={() => {
                    setShowAddRow(false);
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <NewsDeleteIcon />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="mainPageContainer">
        <div className="description">
          <h3>Блок Спонсоры</h3>
          <div className="addNews">
            <p className="newsAddTitle">Добавить</p>
            <AddNewsIcon />
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {sponsors.map((item, index) => (
            <div style={{ marginBottom: "50px" }}>
              <div className="whiteContainer" key={index}>
                <div
                  style={{
                    margin: "auto",
                    width: "176px",
                    height: "70px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WhiteMediaIcon />
                  <p
                    className="mediaDescr"
                    style={{ color: "#494949", marginLeft: "11px" }}
                  >
                    {item}
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "60px",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <NewsRedactIcon />
                <NewsDeleteIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
