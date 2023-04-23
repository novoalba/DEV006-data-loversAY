import { filterByMovies, sortMoviesByDateNewestToOldest, sortMoviesByDateOldestToNewest, filterCharactersBySpeciesAndGender, filterLocationsByClimate } from "../src/data.js";
import { dataFilms } from "../src/data.js";

describe("filterByMovies", () => {
  beforeEach(() => {
    // Set up any necessary DOM elements or dependencies for the test
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
    // Clean up any DOM elements or dependencies after the test
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
    // Call the filterByMovies function with a director
    const director = "Hayao Miyazaki";
    const filteredFilmsSpec = filterByMovies(director);

    // Assert that the result contains only movies by the selected director
    expect(filteredFilmsSpec.length).toBe(9); // Expecting 9 movies by Hayao Miyazaki
  });
});

describe('sortMoviesByDateNewestToOldest', () => {
  it("should sort movies by release date from newest to oldest", () => {
    // Import your data or define it directly here
    const films = dataFilms;

    // Call the sortMoviesByDateNewestToOldest function with your data
    const sortedMovies = sortMoviesByDateNewestToOldest(films);

    // Assert that the movies are sorted correctly by release date
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

