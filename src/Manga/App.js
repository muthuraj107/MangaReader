import React from "react";
// import Head from "./Components/Head";
import Body from "./Components/Body";
import MangaPage from "./pages/Mangapage/MangaPage";
import ReadManga from "./pages/readManga/ReadManga"
import { Routes,Route,BrowserRouter } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Head /> */}
       <Routes>
        <Route path="/" index  element={<Body/>}></Route>
        <Route path="/MangaPage/:mangaTitle/:mangaID" element={<MangaPage/>}/>
        <Route path="/MangaPage/Read/:mangaTitle/:mangaID/:chapterID" element={<ReadManga/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}
