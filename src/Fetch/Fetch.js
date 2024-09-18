// // // const url = "https://api.mangadex.org/manga/22";
// // const url = "https://kitsu.io/api/edge/manga/1";

// // async function Manga() {
 
// //     try {
// //         let fet=await fetch(url)
// //         let data=fet.json()
// //         let value = data[0]
// //         console.log(value);
        
// //     } catch (error) {
// //         console.error(error);
        

// //     }
// // }
// // Manga()
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [chapterData, setChapterData] = useState({});

//   useEffect(() => {
//     const apiKey = "qzdm1Z65K5kGlyTnYddFsqTS2kUPoIpn";
//     const mangaId = '22'; // Replace with the manga ID you're interested in
//     const chapterId = 2; // Replace with the chapter ID you're interested in

//     axios
//       .get(
//         `https://api.mangadex.org/chapter/${chapterId}?manga_id=${mangaId}&api_key=${apiKey}`
//       )
//       .then((response) => {
//         setChapterData(response.data);
//       })
//       .catch((error) => console.error("Error fetching chapter data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>{chapterData.title}</h1>
//       {/* <img src={chapterData.pages[1].imageUrl} alt={chapterData.title} /> */}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [chapterData, setChapterData] = useState({});

//   useEffect(() => {
//     const apiKey = "qzdm1Z65K5kGlyTnYddFsqTS2kUPoIpn";
//    // const chapterId = '11'; // Replace with the chapter ID you're interested in

//     axios
//       .get(`https://api.mangadex.org/manga/onepiece`, {
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//         },
//       })
//       .then((response) => {
//         setChapterData(response.data);
//       })
//       .catch((error) => console.error("Error fetching chapter data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>{chapterData.title}</h1>
//       {/* <img src={chapterData.pages[1].imageUrl} alt={chapterData.title} /> */}
//     </div>
//   );
// }

// export default App;


//  const url = "https://api.mangadex.org/manga/d1a9fdeb-f713-407f-960c-8326b586e6fd/feed";

// const url="https://api.mangadex.org/chapter?manga=d1a9fdeb-f713-407f-960c-8326b586e6fd&offset=0"
const url='https://api.mangadex.org/chapter?manga=d1a9fdeb-f713-407f-960c-8326b586e6fd&limit=100&offset=100'
// // const url = "https://kitsu.io/api/edge/manga/1";

//  async function Manga() {
 
//     try {
//         let fet=await fetch(url)
//         let datas=await fet.json()
//         // let value = data[0]
//         // console.log(datas.data);
//         const {data,...others}=datas
// console.log(data);
//         // const {id}=data
//     data.forEach((element,indx)=> {
//            console.log(element.id+'   '+ +" "+indx);
//            console.log(element.attributes.chapter);
           
//         });
//         // console.log(id);
        
//     } catch (error) {
//         console.error(error);
        

//     }
// }
// Manga()
const mangaID = '7c145eaf-1037-48cb-b6ba-f259103b05ea';
const languages = ['en'];const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

const resp = await axios({
    method: 'GET',
    url: `${baseUrl}/manga/${mangaID}/feed`,
    params: {
        translatedLanguage: languages
    }
});

console.log(resp.data.data.map(chapter => chapter.id));