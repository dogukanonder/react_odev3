import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan")||"React");
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Doğukan Önder",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Doğukan Önder",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    // Yeni içerikler
    {
      baslik: "Unreal Engine",
      url: "https://www.unrealengine.com/en-US",
      yazar: "Faruk Yeşil",
      yorum_sayisi: 2,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Godot Engine ile Oyun Geliştirme",
      url: "https://godotengine.org/",
      yazar: "Ahmet Önder",
      yorum_sayisi: 6,
      puan: 7,
      id: 3,
    },
    {
      baslik: "Python Giriş",
      url: "www.python.org",
      yazar: "Ulaş Korlu",
      yorum_sayisi: 5,
      puan: 5,
      id: 4,
    },
    {
      baslik: "Veritabanı Dizaynı",
      url: "www.database-design.com",
      yazar: "Gül Kara",
      yorum_sayisi: 3,
      puan: 6,
      id: 5,
    },
    
  
  ];
  
  
  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });
  
  

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <React.Fragment>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </React.Fragment>
  );
}
export default App;
