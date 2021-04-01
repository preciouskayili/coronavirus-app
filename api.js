// Results
const result = document.getElementById("result");
result.style.display = "none";
const searchResults = document.getElementById("searchResults");
/*Form element for event listener*/
const getCases = document.getElementById("country");
/*Submit button for form*/
const getCasesButton = document.getElementById("button");
/*Spinner element*/
const spinner = document.getElementById("spinner");
/*Flag icon to be disabled and replaced with the real flag when data is fetched*/
const flagIcon = document.querySelector("#flagIcon");
/*Error element*/
const error = document.querySelector("#error");

/*DOM elements to be filled with JSON data*/
const cases = document.querySelector("#cases");
const recovered = document.querySelector("#recovered");
const deaths = document.querySelector("#deaths");
const country = document.querySelector("#country");
const flag = document.querySelector("#flag");

/*Submit event listener*/
getCases.addEventListener("submit", (e) => {
	e.preventDefault();

	/*Value of form input field*/
	const input = document.getElementById("countrySelect").value;

	/*Api endpoint with user input as query*/
	const url = `https://corona.lmao.ninja/v2/countries/${input}`;

	/*Spinner to be disabled*/
	const spinner = document.getElementById("spinner");
	/*Button to stop displaying and spinner takes over*/
	getCasesButton.style.display = "none";
	spinner.style.display = "block";

	/*Get data from the api endpoint*/
	fetch(url)
		/*Return the data gotten from the API*/
		.then((response) => {
			getCasesButton.style.display = "block";
			flagIcon.style.display = "none";

			spinner.style.display = "none";
			return response.json();
		})

		/*Insert data into DOM elements*/
		.then((data) => {
			cases.innerHTML = data.cases.toLocaleString("en-US");
			recovered.innerHTML = data.recovered.toLocaleString("en-US");
			deaths.innerHTML = data.deaths.toLocaleString("en-US");

			result.style.display = "block";
			searchResults.innerHTML = `"${input}"`;
			flag.style.display = "flex";
			flag.src = `${data.countryInfo.flag}`;
		})

		/*Incase API process breaks down get the error and display to the user*/
		.catch((error) => {
			cases.innerHTML = "Unable to get data";
			recovered.innerHTML = "Unable to get data";
			deaths.innerHTML = "Unable to get data";
			flag.style.display = "none";
			result.innerHTML = "Unable to get data";
			error.innerHTML = "Sorry you entered an invalid country";

			getCasesButton.style.display = "block";

			spinner.style.display = "none";
			flagIcon.style.display = "block";
		});

	/*End of event listner*/
});
