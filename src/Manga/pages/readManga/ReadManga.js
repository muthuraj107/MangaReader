import React,{useState,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios';
import { IoChevronBackCircle } from "react-icons/io5";
import Carousel from './Carousel/Carousel';
import './ReadMang.css'
export default function ReadManga() {
    const [mangaData, setMangaData] = useState({})
    const [mangaHash, setMangaHash] = useState()
    const [mangaBaseURL, setMangaBaseURL] = useState()
    
    let { mangaID} = useParams()
    let { mangaTitle} = useParams()
    let { chapterID } = useParams()
    console.log(chapterID);
    console.log(mangaData);
    console.log(mangaHash);
    console.log(mangaBaseURL);
    
    
    
    useEffect(() => {
        axios.get(`https://api.mangadex.org/at-home/server/${chapterID}`)
        .then((res) => {
            setMangaData(res.data.chapter.data)
            setMangaHash(res.data.chapter.hash)
            setMangaBaseURL(res.data.baseUrl)
        })
    }, [])
    const imageUrls = Object.values(mangaData)?.map(feedIMG => `${mangaBaseURL}/data/${mangaHash}/${feedIMG}`);
  return (
    <div>
     <div className='read-main'> 
     <Link to={`/Mangapage/${mangaTitle}/${mangaID}`} className='back-btn'><IoChevronBackCircle className='back-btn-2'/></Link>
      <p>MangaKakarot</p>
     </div>
     <div className='images'>
  <Carousel images={imageUrls}/>
     </div>
  
    </div>
  )
}
