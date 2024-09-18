import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Mangapage.css";
import axios from "axios";
import Nav from "../../Components/Nav";

export default function MangaPage() {
  const [mangaData, setMangaData] = useState([]);
  const [volumeChaptersData, setVolumeChaptersData] = useState({});
  let { mangaTitle } = useParams();
  let { mangaID } = useParams();
  console.log(mangaTitle,mangaID);
   const token =
     "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHSHg0Qmk2THhvdVRGLWZuQmg0WXhMbUtUbGZzT2tmTm9fQ05yT1pMZHNrIn0.eyJleHAiOjE3MjY2NjgxNzIsImlhdCI6MTcyNjY2NzI3MiwianRpIjoiMGMwODZjYzEtZDU1ZS00NWI0LWJkODQtM2JlMmFhZjUyMjUyIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLm1hbmdhZGV4Lm9yZy9yZWFsbXMvbWFuZ2FkZXgiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMDYzNzQ4NDgtOWY4OC00M2JhLWE1OGItZWZmNDhlMDNiNTAyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicGVyc29uYWwtY2xpZW50LTA2Mzc0ODQ4LTlmODgtNDNiYS1hNThiLWVmZjQ4ZTAzYjUwMi1kYjU5ZjcyMiIsInNlc3Npb25fc3RhdGUiOiJhYWQxYmRlNi0wYjQyLTQ0NjEtOGQ5MS1kMzg0OWZhMDFiZGQiLCJhY3IiOiIxIiwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZ3JvdXBzIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiJhYWQxYmRlNi0wYjQyLTQ0NjEtOGQ5MS1kMzg0OWZhMDFiZGQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicm9sZXMiOlsiUk9MRV9VU0VSIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtbWFuZ2FkZXgiXSwiZ3JvdXBzIjpbIkdST1VQX1VTRVIiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoia2FrYXJvdG1pc3kiLCJjbGllbnRfdHlwZSI6InBlcnNvbmFsIiwib2lkIjoiMDYzNzQ4NDgtOWY4OC00M2JhLWE1OGItZWZmNDhlMDNiNTAyIiwiZW1haWwiOiJtdXRodXJhamx1Y2lmZXJAZ21haWwuY29tIn0.X3x0WkeVu68ivGoq5BBYIJcaej3FW7OAdBYh9ZKqsqJc0XcTCnkTaccTyGdHerFllti8ZtMdJhtr071HF8n96sGzH_zNa_SSb8gsfVaHq7IYSbxaSy8kBq9MdR0ygjEMRyqSOuP82d5twyv7VO7qPUFZ8MBCQ2bIrM-oKoO7n346CeXQl6QXSEuH7KEV1c24GBJaEHeiSPdyWXzPvalzb_IUeUxniPu5WJVm5CvHSxCD0Uolm3zoi_NhjH-sVG5dJmvZXdxG6NJEe-rkyqk6YPr8z1baygOv_1UtCZptWcL0znXPG9E9NwjuptiwtpqWTSVKjdFo2NUEOm4yjJG5dA";
  
  const fetchVolumesChaptersData = async (languageSelected) => {
    try {
      await axios({
        method: "get",
        url: `https://thingproxy.freeboard.io/fetch/https://api.mangadex.org/manga/${mangaID}/aggregate?translatedLanguage%5B%5D=${languageSelected}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => setVolumeChaptersData(res.data.volumes))
        .catch((err) => console.log(err));
      console.log(volumeChaptersData);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    try {
      await axios({
        method: "get",
        url: `https://thingproxy.freeboard.io/fetch/https://api.mangadex.org/manga/${mangaID}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => setMangaData(res.data.data))
        .catch((err) => console.log(err));
      console.log(mangaData);
      fetchVolumesChaptersData("en");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  // console.log( mangaData?.attributes?.find(val=> val==='en))
  const japaneseTitles = mangaData?.attributes?.altTitles
    ?.filter((title) => title.ja)
    .map((title) => title.ja);
  console.log(japaneseTitles);

  return (
  
    <div>
     
      <div className="Mangapage-Nav">
        <Nav />
      </div>

      <div className="page-head">
        <div className="cover-img">
          <img
            className="mangaDataCoverImg"
            src={`https://mangadex.org/covers/${mangaData.id}/${
              mangaData?.relationships?.find((rel) => rel.type === "cover_art")
                ?.attributes?.fileName
            }`}
            alt=""
          />
        </div>
        <div className="manga-details">
          <div className="manga-titles">
            <p>{mangaTitle}</p>
          </div>
          <div className="manga-title">{japaneseTitles?.[0]}</div>
          <div className="details">
            <div className="details-head">
              <div className="details-genres">
                <p>Type:{mangaData?.type}</p>

                <p>
                  publicationDemographic:
                  {mangaData?.attributes?.publicationDemographic || ""}
                </p>
                <p>year:{mangaData?.attributes?.year || ""}</p>
                <p>Status:{mangaData?.attributes?.status || ""}</p>
                <p>lastChapter:{mangaData?.attributes?.lastChapter || NaN}</p>
              </div>

              <div className="details-para">
                {mangaData?.attributes &&
                  mangaData.attributes.tags.map((tag, index) => (
                    <>
                      <p key={index}>
                        <a href=" " target="_blank">
                          {tag.attributes.name.en || "No tag."}
                        </a>
                      </p>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clr"></div>
      <div className="details-des">
        <p className="mangaDescription">
          {mangaData?.attributes?.description.en || "No description available."}
        </p>
      </div>
      <div className="chapter-details">
        {Object?.values(volumeChaptersData)?.map((volumeData, index) => (
          <div key={index} className="volumeContainer">
            <p> </p>
            <ul className="chaptersContainer">
              <h3>Volume No: {volumeData?.volume}</h3>
              {Object?.values(volumeData?.chapters)?.map(
                (chaptersData, index) => (
                  <li key={index}>
                    <Link
                      className="chapterListItem"
                      to={`/MangaPage/Read/${mangaTitle}/${mangaID}/${chaptersData.id}`}
                    >
                      Chapter No: {chaptersData.chapter}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
