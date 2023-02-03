import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWord from './pages/Grid';
import Enchere from './component/Enchere'
import { useState } from 'react';
import { useEffect } from 'react';
import './assets/css/Enchere.css';
import './assets/css/Enchere.css';
import './assets/assets/css/app.css';
import './assets/assets/css/Login-Form-Clean.css';
import './assets/assets/bootstrap/css/bootstrap.min.css';
import './assets/assets/css/Login-Form-Clean.css';
import './assets/assets/css/MUSA_input-helper.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import InsertMise from './component/InsertMise';
import Recherche from './component/Recherche';
import Historique from './component/Historique';
import HistoriqueMise from './component/HistoriqueMise';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

function Nav(){
  return(
    <section>
    <div class="bg-circle-1 bg-circle">
        <div class="bg-circle-3 bg-circle"></div>
    </div>
    <div class="bg-circle-1 bg-circle">
                            <div class="bg-circle-3 bg-circle"></div>
                        </div>
    <header class="text-center text-white pulse animated masthead">
        <div class="masthead-content">
            <div class="container">
                <h1 class="masthead-heading mb-0"></h1>
                <h2 >Les encheres en cours</h2>
            </div>
        </div>
        <div class="bg-circle-2 bg-circle"></div>
    </header> 
    </section>
  )
}

function RechercheAvancee () {
  return (
    <div>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
    </div>  
  )
}

function GetEnchere() {
  const [enchere,setEnchere] = useState([]);
  useEffect(() => {
    
  fetch("https://encheremrrojog44-production-81c1.up.railway.app/Enchere/Enchere",
    {
      method:"GET"
    }  
  )
  .then((res)=>res.json())
  .then((resultat)=>{
    console.log(resultat.data);
    setEnchere(resultat.data);
  });
  }, [])



  return (
    enchere.map((e,index) => {
      <input type="text" />
      return <Enchere key={index} enchere={e} />
    }) 
  )
}

// root.render (  
//   < GetEnchere />
// );

root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<GetEnchere/>}></Route>
      <Route path={"/login/:idenchere"} element={<Login />}></Route>
      <Route path={"/insertMise/:idenchere"} element={<InsertMise />}></Route>
      <Route path={"/login"} element={<Login valia="lolo"/>}></Route>
      <Route path={"/Recherche/:idenchere"} element={<Recherche/>}></Route>
      <Route path={"/Historique/:idenchere"} element={<Historique/>}></Route>
      <Route path={"/HistoriqueMise/:idenchere"} element={<HistoriqueMise/>}></Route>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
