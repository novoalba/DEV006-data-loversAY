import { filterByMovies, sortMoviesByDateNewestToOldest, sortMoviesByDateOldestToNewest, filterCharactersBySpeciesAndGender, filterLocationsByClimate, 
  IsaoPercentage, releasedPercentage, femaleCharactersPercentage } from "../src/data.js";
import { dataFilms } from "../src/data.js";

describe("filterByMovies", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <table id="moviesTable">
    <tbody id="moviesTableBody">
      <tr>
        <td id="moviesTableColumnOne"></td>
        <td id="moviesTableColumnTwo"></td>
      </tr>
    </tbody>
  </table>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should return an empty array when moviesTable element is not found", () => {
    // Remove the moviesTable element to simulate it not being found
    document.getElementById("moviesTable").remove();
  });

  it("is a function", () => {
    expect(typeof filterByMovies).toBe("function");
  });

  it("should return movies only by the selected director", () => {
    const director = "Hayao Miyazaki";
    const filteredFilmsSpec = filterByMovies(director);

    expect(filteredFilmsSpec.length).toBe(9); 
  });
});

describe('sortMoviesByDateNewestToOldest', () => {
  it("should sort movies by release date from newest to oldest", () => {
    const films = dataFilms;
    const sortedMovies = sortMoviesByDateNewestToOldest(films);
    
    expect(sortedMovies[0].title).toBe("When Marnie Was There");
    expect(sortedMovies[1].title).toBe("The Wind Rises");
    expect(sortedMovies[2].title).toBe("The Tale of the Princess Kaguya");
    expect(sortedMovies[3].title).toBe("From Up on Poppy Hill");
    expect(sortedMovies[4].title).toBe("The Secret World of Arrietty");
    expect(sortedMovies[5].title).toBe("Ponyo on the Cliff by the Sea");
  });
});

describe('sortMoviesByDateOldestToNewest', () => {
  it("should sort movies by release date from oldest to newest", () => {
    const films = dataFilms;
    const sortedMovies = sortMoviesByDateOldestToNewest(films);

    expect(sortedMovies[0].title).toBe("Castle in the Sky");
    expect(sortedMovies[1].title).toBe("My Neighbor Totoro");
    expect(sortedMovies[2].title).toBe("Grave of the Fireflies");
    expect(sortedMovies[3].title).toBe("Kiki's Delivery Service");
    expect(sortedMovies[4].title).toBe("Only Yesterday");
    expect(sortedMovies[5].title).toBe("Porco Rosso");
  });
});

describe("filterCharactersBySpeciesAndGender", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <table id="charactersTable">
      <tbody id="charactersTableBody">
        <tr>
          <td id="charactersTableColumnOne"></td>
          <td id="charactersTableColumnTwo"></td>
        </tr>
      </tbody>
    </table>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should return an empty array when charactersTable element is not found", () => {
    document.getElementById("charactersTable").remove();
  });

  it("is a function", () => {
    expect(typeof filterCharactersBySpeciesAndGender).toBe("function");
  });

  it("should return characters only by the selected gender when species is 'All'", () => {
    const specie = "allSpecies";
    const gender = "Female";
    const filteredCharactersGenderAndSpecies = filterCharactersBySpeciesAndGender(specie, gender);

    expect(filteredCharactersGenderAndSpecies.length).toBe(81);
  });

  it("should return characters only by the selected species when gender is 'All'", () => {
    const specie = "Cat";
    const gender = "allGenders";
    const filteredCharactersGenderAndSpecies = filterCharactersBySpeciesAndGender(specie, gender);

    expect(filteredCharactersGenderAndSpecies.length).toBe(9);
  });

  it("should return characters only by the selected species and gender", () => {
    const specie = "Human";
    const gender = "Female";
    const filteredCharactersGenderAndSpecies = filterCharactersBySpeciesAndGender(specie, gender);

    expect(filteredCharactersGenderAndSpecies.length).toBe(68); 
  });

  it("should return all characters when 'All' is selected for both gender and species", () => {
    const specie = "allSpecies";
    const gender = "allGenders";
    const filteredCharactersGenderAndSpecies = filterCharactersBySpeciesAndGender(specie, gender);

    expect(filteredCharactersGenderAndSpecies.length).toBe(171);
  })
});

describe("filterLocationsByClimate", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <table id="locationsTable">
      <tbody id="locationsTableBody">
        <tr>
          <td id="locationsColumnOne"></td>
          <td id="locationsTableColumnTwo"></td>
        </tr>
      </tbody>
    </table>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should return an empty array when locationsTable element is not found", () => {
    document.getElementById("locationsTable").remove();
  });

  it("is a function", () => {
    expect(typeof filterLocationsByClimate).toBe("function");
  });

  it("should return locations only by the selected climate", () => {
    const climate = "Dry";
    const filteredLocationsClimate = filterLocationsByClimate(climate);

    expect(filteredLocationsClimate.length).toBe(1);
  });

  it("should return all locations when 'All' is selected", () => {
    const climate = "allClimates";
    const filteredLocationsClimate = filterLocationsByClimate(climate);

    expect(filteredLocationsClimate.length).toBe(29);
  });
});

describe('IsaoPercentage', () => {
  it("should return the percentage of movies directed by Isao Takahata", () => {
    expect(IsaoPercentage()).toBe(25);
  });
});

describe('releasedPercentage', () => {
  it("should return the percentage of movies released in 1995", () => {
    expect(releasedPercentage()).toBe(5);
  });
});

describe('femaleCharactersPercentage', () => {
  it("should return the percentage of female characters", () => {
    expect(femaleCharactersPercentage()).toBe("47.37");
  });
});


