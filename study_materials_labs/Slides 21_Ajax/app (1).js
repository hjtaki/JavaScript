'use strict';
(function(){
	// html loads
	const form = document.querySelector("#search-form");
	const searchField = document.querySelector("#search-keyword");
	const responseContainer = document.querySelector("#response-container");
	let searchedForText;

	form.addEventListener('submit', function(e) {
		// get the keyword
		e.preventDefault();
		responseContainer.innerHTML = '';
		searchedForText = searchField.value;
		
		// send a request with the keyword to unsplash.com
		// const imgRequest = new XMLHttpRequest();
		// imgRequest.open("GET", `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
		// imgRequest.setRequestHeader('Authorization', 'Client-ID 97a1403756e7aa58b0c721072bac11ac52fabed328745fd7be7928d647a96f84');
		// // attach onload, onerror handling function 
		// imgRequest.onload = addImage;
		// imgRequest.onerror = function() { console.log("Some Error Happened."); }
		// imgRequest.send();

		$.ajax({
			url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
			headers: {
				Authorization: 'Client-ID 97a1403756e7aa58b0c721072bac11ac52fabed328745fd7be7928d647a96f84'
			}
		}).done(addImage)
		.fail(function(err) { console.log(err + " Error Happened."); });

		
		// send a request with the keyword to nytimes.com
		// RESTful web service (stateless)
		const articleRequest = new XMLHttpRequest();
		// Template (ES 6)
		articleRequest.open("GET", `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=ed5b1c2f23f547789f804a206a630f6e`);
		articleRequest.onload = addArticles;
		articleRequest.onerror = function() { console.log("Some Error Happened."); }
		articleRequest.send();


	});

	function addImage(data) {
		// handle response (this.responseText)
		// const data = JSON.parse(this.responseText);
		console.log(data);
		let htmlContent = "";
		if (data && data.results && data.results.length > 1) {
			const firstImage = data.results[0];
			htmlContent = `<figure>
			<img src="${firstImage.urls.small}" alt="${firstImage.user.name}">
			<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
			</figure>`;
		} else {
			htmlContent = "<h1>No images available.</h1>";
		}	
		responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
	}

	function addArticles() {
		const data = JSON.parse(this.responseText);
		const articlesHTML = data.response.docs.map(function(article){
			return `<li>
						<h2><a href="${article.web_url}">${article.headline.main}</a></h2>
						<p>${article.snippet}</p>
					</li>`
		});
		responseContainer.insertAdjacentHTML('beforeend', `<ul>${articlesHTML.join('')}</ul>`);
	}

	

})();


