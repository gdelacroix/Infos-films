  //*** fichier TMDBApi.js ***
  	
  const API_TOKEN = "2c4274720dbdd9e24b9980ce0268bda9";
  	
  //le paramètre text = film cherché, page = nombre de page voulu
  export default  function getFilmsFromTMdbWidthText(text, page) {
    console.log("Search parameter:", text);

  const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
       "&language=fr&query=" + text + '&page=' + page;	
  	console.log(url)
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }


