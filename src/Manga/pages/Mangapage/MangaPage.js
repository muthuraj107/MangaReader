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
  
  const fetchVolumesChaptersData = async (languageSelected) => {
    try {
      await axios({
        method: "get",
        url: `https://api.mangadex.org/manga/${mangaID}/aggregate?translatedLanguage%5B%5D=${languageSelected}`,
        headers: {
          "Content-Type": "application/json",
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
        url: `https://api.mangadex.org/manga/${mangaID}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author`,
        headers: {
          "Content-Type": "application/json",
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
