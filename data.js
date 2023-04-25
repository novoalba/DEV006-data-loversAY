//importar mi bloque gigante de data:
import data from './data/ghibli/ghibli.js';
export const dataFilms = data.films;


export function filterByMovies(director) {
  const moviesTable = document.getElementById("moviesTable");
  if (!moviesTable) {
    return [];
  }
  
  const filteredFilms = dataFilms.filter(movie => {
    return director === "allDirectors" || movie.director === director;
  });

  let tableBody = "";
  filteredFilms.forEach((movie, index) => {
    if (index % 3 === 0) {
      tableBody = tableBody + "<tr>"
    }
    tableBody = tableBody + "<td class='card'>"

    const posterImg = "<img src='" + movie.poster + "' class='moviePoster'/>"
    const movieTitle = "<h3>" + movie.title + "</h3>";
    const director = "<p> Directed by " + movie.director + "</p>";
    const producer = "<p> Produced by " + movie.producer + "</p>";
    const releaseDate = "<p>" + movie.release_date + "</p>";
    const description = "<p class='justify'>" + movie.description + "</p>";

    tableBody = tableBody + posterImg + movieTitle + director + producer + releaseDate + description;
    tableBody = tableBody + "</td>"

    if (index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
  });
  moviesTable.innerHTML = tableBody;
  return filteredFilms;
}
filterByMovies("allDirectors");

export function sortMoviesByDateNewestToOldest() {
  return dataFilms.sort((a, b) => (b.release_date) - (a.release_date));
}

export function sortMoviesByDateOldestToNewest() {
  return dataFilms.sort((a, b) => (a.release_date) - (b.release_date));
}

export function filterCharactersBySpeciesAndGender(specie, gender) {
  const charactersTable = document.getElementById("charactersTable");
  if(!charactersTable){
    return [];
  }

  const filteredCharacters = dataFilms.flatMap(film => {
    return film.people.filter(person => {
      if (specie !== "allSpecies" && gender !== "allGenders") {
        return person.specie === specie && person.gender === gender;
      } else if (specie !== "allSpecies") {
        return person.specie === specie;
      } else if (gender !== "allGenders") {
        return person.gender === gender;
      } else {
        return true; 
      }
    });
  });

  let tableBody = "";
  let index = 0;
  filteredCharacters.forEach((person) => {
    if (index % 3 === 0) {
      tableBody = tableBody + "<tr>";
    }
    tableBody = tableBody + "<td  class='card'>";

    const characterImg = "<img src='" + person.img + "' class='characterImg'/>";
    const characterName = "<h3>" + person.name + "</h3>";
    const characterGender = "<p> Gender: " + person.gender + "</p>";
    const characterSpecie = "<p> Species: " + person.specie + "</p>";
    const characterAge = "<p> Age: " + person.age + "</p>";
    const characterEyesAndHair = "<p> Eye and hair color: " + person.eye_color + " and " + person.hair_color + "</p>";

    tableBody = tableBody + characterImg + characterName + characterGender + characterSpecie + characterAge + characterEyesAndHair;
    tableBody = tableBody + "</td>";

    if(index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
    index++;
  });
  charactersTable.innerHTML = tableBody;
  return filteredCharacters;
}
filterCharactersBySpeciesAndGender("allSpecies", "allGenders");


export function filterLocationsByClimate(climate) {
  const locationsTable = document.getElementById("locationsTable");
  if (!locationsTable) {
    return [];
  }

  const filteredLocations = dataFilms.flatMap((film) => {
    return film.locations.filter(place => {
      if (climate !== "allClimates") {
        return place.climate === climate;
      } else {
        return true;
      }
    });
  });

  let tBody = "";
  tBody = "";
  let indexOne = 0;
  filteredLocations.forEach((location) => {
    if (indexOne % 2 === 0) {
      tBody = tBody + "<tr>";
    }
    tBody = tBody + "<td  class='card'>";
    const locationImg = "<img src='" + location.img + "' class='locationImg'/>";
    const locationName = "<h3>" + location.name + "</h3>";
    const locationClimate = "<p> Climate: " + location.climate + "</p>";
    const terrain = "<p> Terrain: " + location.terrain + "</p>";
    const locationSurfaceWater = "<p> Surface water: " + location.surface_water + "</p>";
    tBody = tBody + locationImg + locationName + locationClimate + terrain + locationSurfaceWater;
    tBody = tBody + "</td>";
    if (indexOne % 2 === 1) {
      tBody = tBody + "</tr>";
    }
    indexOne++;
  });
  locationsTable.innerHTML = tBody;
  return filteredLocations;
}
filterLocationsByClimate("allClimates");

function vehiclesTableOne() {
  const vehiclesTable = document.getElementById("vehiclesTable");
  if (!vehiclesTable) { 
    return [];
  }

  const flattenedVehicles = dataFilms.flatMap((film => film.vehicles) 
  );

  let tBody = "";
  tBody = "";
  let indexOne = 0;
  flattenedVehicles.forEach((vehicle) => {
    if (indexOne % 2 === 0) {
      tBody = tBody + "<tr>";
    }
    tBody = tBody + "<td  class='card'>";
    const vehicleImg = "<img src='" + vehicle.img + "' class='vehicleImg'/>";
    const vehicleName = "<h3>" + vehicle.name + "</h3>";
    const description = "<p class= 'justify'>" + vehicle.description + "</p>";
    const vehicleClass = "<p> Class: " + vehicle.vehicle_class + "</p>";
  
    tBody = tBody + vehicleImg + vehicleName + description + vehicleClass;
    tBody = tBody + "</td>";
    if (indexOne % 2 === 1) {
      tBody = tBody + "</tr>";
    }
    indexOne++;
  });
  vehiclesTable.innerHTML = tBody;
}
vehiclesTableOne("");

export const IsaoPercentage = () => {
  const allFilms = dataFilms.length;
  const filteredIsao = dataFilms.filter(movie => { 
    return movie.director === "Isao Takahata";
  }); 
  return ((filteredIsao.length / allFilms) * 100);
}

export const releasedPercentage = () => {
  const allFilms = dataFilms.length;
  const filteredReleaseDate = dataFilms.filter(movie => { 
    return movie.release_date === "1995";
  }); 
  return ((filteredReleaseDate.length / allFilms) * 100);
}

export const femaleCharactersPercentage = () => {
  let totalFemaleCharacters = 0; 
  dataFilms.forEach(film => {
    const filteredFemaleCharacters = film.people.filter(person => person.gender === "Female");
    totalFemaleCharacters += filteredFemaleCharacters.length; 
  });
  const totalCharacters = dataFilms.flatMap(film => film.people).length; 
  const femalesPercentage = ((totalFemaleCharacters / totalCharacters) * 100).toFixed(2); 
  return femalesPercentage;
};




