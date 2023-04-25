import {filterByMovies, sortMoviesByDateNewestToOldest, sortMoviesByDateOldestToNewest, filterCharactersBySpeciesAndGender, filterLocationsByClimate, 
  releasedPercentage, IsaoPercentage, femaleCharactersPercentage} from './data.js';

const directorSelect = document.getElementById("directorSelect");
if (directorSelect) {
  directorSelect.addEventListener("change", () => {
    filterByMovies(directorSelect.value);
    //console.log(directorSelect.value);
  });
}

const sortByDateNOButton = document.getElementById("sortMoviesByDateNewestOldest");
if (sortByDateNOButton) {
  sortByDateNOButton.addEventListener("click", () => {
    filterByMovies(directorSelect.value); 
    sortMoviesByDateNewestToOldest();
  });
}

const sortByDateONButton = document.getElementById("sortMoviesByDateOldestNewest");
if (sortByDateONButton) {
  sortByDateONButton.addEventListener("click", () => {
    filterByMovies(directorSelect.value);
    sortMoviesByDateOldestToNewest();
  });
}

const buttonRefresh = document.getElementById("refresh");
if (buttonRefresh) {
  buttonRefresh.addEventListener("click",()=>{
    history.go(0);
  });
}

const genderSelect = document.getElementById("genderSelect");
if (genderSelect) {
  genderSelect.addEventListener("change", () => {
    const genderSelection = genderSelect.value;
    const specieSelection = document.getElementById("charactersSpecieSelect").value;
    filterCharactersBySpeciesAndGender(specieSelection, genderSelection);
  });
}

const specieSelect = document.getElementById("charactersSpecieSelect");
if (specieSelect) {
  specieSelect.addEventListener("change", () => {
    const specieSelection = specieSelect.value;
    const genderSelection = document.getElementById("genderSelect").value;
    filterCharactersBySpeciesAndGender(specieSelection, genderSelection);
  });
}

const climateSelect = document.getElementById("climateSelect");
if (climateSelect) {
  climateSelect.addEventListener("change", () => {
    const climateSelection = climateSelect.value;
    filterLocationsByClimate(climateSelection);
  });
}

function openModal(id) {
  if (openModal) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add("modal-open");
  }
}

function closeModal() {
  if (closeModal) {
    document.querySelector(".modal").classList.remove('open');
    document.body.classList.remove("modal-open");
  }
}

if (closeModal) {
  window.addEventListener("load", function() {
    const closeModalElement = document.querySelector(".close-modal");
    const openModalElement = document.getElementById("1a");

    if (closeModalElement) {
      closeModalElement.addEventListener("click", () => {
        closeModal();
      });
    }

    if (openModalElement) {
      openModalElement.addEventListener("click", () => {
        openModal("history-modal");
      });
    }
  });
}

function openModale(id) {
  document.getElementById(id).classList.add("open");
  document.body.classList.add("modal-open");
}
function closeModale(id) {
  document.getElementById(id).classList.remove("open");
  document.body.classList.remove("modal-open");
}
window.addEventListener("load", function () {
  const btnsClose = document.querySelectorAll(".close-modal");
  btnsClose.forEach((btn) => {
    btn.addEventListener("click", function() {
      closeModale(btn.parentElement.parentElement.id)
    });
  });
  const btnModals = document.querySelectorAll(".btn-modal");
  btnModals.forEach((btn) => {
    btn.addEventListener("click", function () {
      openModale(btn.getAttribute("modal"))
    });
  });
});

const btnP11 = document.getElementById("p11");
if (btnP11) {
  btnP11.addEventListener("click", () => {
    const result = releasedPercentage();
    const r11 = document.getElementById("r11");

    const showElements = document.querySelectorAll(".show");
    showElements.forEach(element => {
      element.style.display = 'none';
    });

    r11.innerHTML = 'The percentage of movies released on 1995 is ' + result + '%';
    r11.style.display = 'block';
  });
}

const btnP21 = document.getElementById("p21");
if (btnP21) {
  btnP21.addEventListener("click", () => {
    const result = IsaoPercentage();
    const r21 = document.getElementById("r21");

    const showElements = document.querySelectorAll(".show");
    showElements.forEach(element => {
      element.style.display = 'none';
    });

    r21.innerHTML = 'The percentage of movies directed by Isao Takahata is ' + result + '%';
    r21.style.display = 'block';
  });
}

const btnP31 = document.getElementById("p31");
if (btnP31) {
  btnP31.addEventListener("click", () => {
    const result = femaleCharactersPercentage();
    const r31 = document.getElementById("r31");

    const showElements = document.querySelectorAll(".show");
    showElements.forEach(element => {
      element.style.display = 'none';
    });

    r31.innerHTML = 'The percentage of female characteres is ' + result + '%';
    r31.style.display = 'block';
  });
}