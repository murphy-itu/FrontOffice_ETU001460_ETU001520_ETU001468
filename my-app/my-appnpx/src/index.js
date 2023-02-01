import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWord from './pages/Grid';
import Enchere from './component/Enchere'
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import InsertMise from './component/InsertMise';
import Recherche from './component/Recherche';


//  enchere = [
//   {
//   utilisateur:{
//     id:1,
//     nom:"RAKOTO",
//     prenom:"Jean",
//     email:"jean@gmail.com",
//     motdepasse:"12345"  
//   },
//   produit:{
//     id:1,
//     nom:"Produit 1",
//     categorie:{
//       id:1,
//       nom:"Categorie 1"
//     }
//   },
//   description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   prixminimal:130000,
//   datetime:"2022-01-01 15:00:00",
//   durree:"05:00:00",
//   etat:1,
//   photo:[
//     {
//       id:1,
//       ienchere:1,
//       base64:"fopajafvtrhhrtbhhhhhhhhhhhhhhhhhhhhh"
//     },
//     {
//       id:2,
//       ienchere:1,
//       base64:"kalkaopkpockpaokofpkapok"
//     },
//     {
//       id:3,
//       ienchere:1,
//       base64:"kalkaopkpockpaokofpkapok"
//     },{
//       id:3,
//       ienchere:1,
//       base64:"kalkaopkpockpaokofpkapok"
//     }
//   ] ,

// } , 
// {
//     utilisateur:{
//       id:2,
//       nom:"RASOA",
//       prenom:"Jeanne",
//       email:"jeannz@gmail.com",
//       motdepasse:"12345"  
//     },
//     produit:{
//       id:1,
//       nom:"Produit 2",
//       categorie:{
//         id:1,
//         nom:"Categorie 2"
//       }
//     },
//     description:" (2) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     prixminimal:300000,
//     datetime:"2023-01-01 15:00:00",
//     durree:"01:00:00",
//     etat:1,
//     photo:[
//       {
//         id:1,
//         ienchere:1,
//         base64:"fopajafvtrhhrtbhhhhhhhhhhhhhhhhhhhhh"
//       },
//       {
//         id:2,
//         ienchere:1,
//         base64:"kalkaopkpockpaokofpkapok"
//       }
//     ] ,
// }
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

function GetEnchere() {
  const [enchere,setEnchere] = useState([]);
  useEffect(() => {
    
  fetch("http://localhost:8082/Enchere/Enchere",
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
      <Route path={"/Recherche/:idenchere/:utilisateur"} element={<Recherche/>}></Route>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
