import React from "react";
import "./Body.css";
import Head from './Head'
import Card from "./Body/Card/Card";
import Content from "./Body/Content/Content";
export default function Body() {
  return (
    <>
    <Head/>
    <div id="body">
      <div className="info">
        Mangakararot is a Free website to download and read manga online. The
        manga is updated daily to make sure no one will ever miss the latest
        chapter on their favorite manga. If you like the website, please
        bookmark it and help us to spread the words. Thank you!
      </div>
      <div className="body_head">
        <h3>Recommended</h3>
      </div>
      <div className="Manga">
        <Card />

      </div>
      <div className="content">
        <Content/>
      </div>
    </div>
    </>
  );
}
