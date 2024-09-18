import React ,{useState}from 'react';
import './Content.css'
import { IoIosSearch } from "react-icons/io";
import Listitem from './Listitem';
import axios from "axios";
export default function Content(){
      const [mangaList, setMangaList] = useState([]);
      const [searchQuery, setSearchQuery] = useState("");
    
    
  const fetchMangaList = (e) => {
    e.preventDefault();
    setMangaList([]);
    axios
      .get(
        `https://api.mangadex.org/manga?limit=25&title=${searchQuery}&includes[]=author&includes[]=cover_art`
      )
      .then((res) => setMangaList(res.data.data)).catch(err=>console.log(err)
      );
  };

      return (
        <div className="content">
          <header className="content-header">
              <h2>Search</h2>
           
            <form
              className="form-container"
              onSubmit={(e) => fetchMangaList(e)}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="inputSearchManga"
              />

              <IoIosSearch />
            </form>
          </header>
          <ul className="listContainer">
            {Object.values(mangaList).map((manga, index) => (
              <Listitem manga={manga} key={index} />
            ))}
          </ul>
        </div>
      );
}