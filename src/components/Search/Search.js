//*** fichier Search.js ***
// import { useState } from "react";
import { useNavigate } from "react-router";
import "./Search.css";

function Search() {
  //   const [search, setSearch] = useState("");
  //   const handleChange = (e) => {
  //     setSearch(e.target.value); //récupération de la value de la balise input
  //   };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData);
    // console.log(formData.get("search"));
    navigate(`/List/${formData.get("search")}`);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="idSearch">Votre recherche</label>
          <input id="idSearch" name="search" type="text" />
        </fieldset>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
}
export default Search;
