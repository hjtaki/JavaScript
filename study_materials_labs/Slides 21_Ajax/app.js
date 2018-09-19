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
		const imgRequest = new XMLHttpRequest();
		imgRequest.open("GET", `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
		imgRequest.setRequestHeader('Authorization','Client-ID 0701f0b1783271f9cca2a565d73614c7363b41b404aa21d8f649ef598ed94357');
		// attach onload, onerror handling function 
		imgRequest.onload = addImage;
		imgRequest.onerror = function() { console.log("Some Error Happened."); }
		imgRequest.send();
		
		// send a request with the keyword to nytimes.com
		const articleRequest = new XMLHttpRequest();
		articleRequest.open("GET", "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${seachedForarticleRequest.o}&api");
		articleRequest.setRequestHeader('Authorization','Client-ID 8ad84cb55e574fb1a5be8ad081cb29c6');
		// attach onload, onerror handling function 
		articleRequest.onload = addArticles;
		articleRequest.onerror = function() { console.log("Some Error Happened."); }
		articleRequest.send();


	});

	function addArticles() {
		// articles
		// parse data
		const data = JSON.parse(this.responseText);
		const firstImage = data.response.doc.map(function(article){


		})
		responseContainer.insertAdjacentHTML('beforeend', `<figure>
			<img src="${firstImage.urls.small}" alt="${firstImage.user.name}">
			<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
			</figure>`);



	}

	function addImage() {
		// handle response (this.responseText)
		const data = JSON.parse(this.responseText);
		const firstImage = data.results[0];

		responseContainer.insertAdjacentHTML('afterbegin', `<figure>
			<img src="${firstImage.urls.small}" alt="${firstImage.user.name}">
			<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
			</figure>`);
	}

})();

// Here's your API Key for the Article Search API: 8ad84cb55e574fb1a5be8ad081cb29c6




//  // NYtimes 
//  parse , title- link and contents- using loop 

//  function  called map


// const map1 = array1.map(x => '<a href=${x.web_url}<h2>${x.headline}</h2></a>')

// let arr1=[1,2,3,4,5]
// arr1.map(function(3){
//     returne*2;
// }

// console.log(arr1)


// let arr1=[1,2,3,4,5]
// arr1.map(e => e * 2);


// console.log(arr1)



// let doc =[
// {"web_url" : "http..."
// "2":"4"
// "3":"5"}
// ,
// {"web_url" : "http..."
// "2":"4"
// "3":"5"}];

// let arr3 = doc.map(e=> '$(e.web_url)')
// console.log(arr3)
// --> retrun all url



// let doc =[
// {"web_url" : "http..."
// "2":"4"
// "3":"5"}
// ,
// {"web_url" : "http..."
// "headline":"4"
// "3":"5"}];

// let arr3 = doc.map(e=> '<a href='$(e.web_url)'> ${e.headline)}</a>');
// for (let i =0; i <arr.lenth; i++)

// responseContainer.insertAdjacentHTML('beforend,arr[i]')
// console.log(arr3)
// --> retrun all url

// // or
// let arr3 = doc.map(e=> '<a href='$(e.web_url)'> ${e.headline)}</a>');
// let wholeHTML = arr.join('');
// responseContainer.insertAdjacentHTML('beforend',<ul>${wholeHTML}</ul>)




