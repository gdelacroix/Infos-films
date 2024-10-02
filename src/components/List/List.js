//*** fichier List.js ***
import { useParams } from "react-router-dom";
import "./List.css";
import Film from "../Film/Film";
import { useState, useEffect } from "react";
import getFilmsFromTMdbWidthText from "../../TMBApi";
function List() {
//   const films = [
//     { poster: "../images/dwwm_1.png", abstract: "Résumé du premier film" },
//     { poster: "../images/dwwm_1.png", abstract: "Résumé du duxième film" },
//     { poster: "../images/dwwm_1.png", abstract: "Résumé du troisième film" },
//   ];
const [films, setFilms] = useState([])
  const  {search}  = useParams();
  // eslint-disable-next-line no-lone-blocks

  useEffect(() => {
    // console.log("Search parameter:", search);

    getFilmsFromTMdbWidthText(search, 1).then((response) => {
     
      //console.log(response.results);
      setFilms(response.results)
    });
  });
  return (
    <div className="container">
      <h2>Liste des films</h2>
      <p>{search}</p> {/* data correspond au paramètre de la route */}
      {films.map((film) => {
        return <Film key={film.id} poster={film.poster_path} 
          					abstract={film.overview} />;
        
        // <Film poster={film.poster} abstract={film.abstract} />;
      })}
    </div>
  );
}
export default List;
