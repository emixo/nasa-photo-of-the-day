import React, {useState, useEffect,} from "react";
import axios from "axios";
import Header from './components/Header';
import Footer from '.components/Footer';
import ContentSection from "./components/ContentSection"
import "./App.css";

function App() {
  const [nasaDailyData, setNasaDailyData] = useState(null)
  useEffect(() => {
       axios.get("https://api.nasa.gov/planetary/apod?api_key=xf0GPFzVbb5SzSpoHha4wjo7igdUoiG0uejdqLFO")
       .then((res) => {
         setNasaDailyData(res.data)
       })
       .catch((err) => {
         console.log(err)
       })
   }, [])
  
  return (
    <div className="App">
      <Header />
      {nasaDailyData && <ContentSection title={nasaDailyData.title} url={nasaDailyData.url} explanation={nasaDailyData.explanation}/>}
      {nasaDailyData && <Footer copyright={nasaDailyData.copyright} date={nasaDailyData.date}/>}
    </div>
  );
}

export default App;
