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
        imgRequest.setRequestHeader('Authorization', 'Client-ID ID 0701f0b1783271f9cca2a565d73614c7363b41b404aa21d8f649ef598ed94357');
        // attach onload, onerror handling function 
        imgRequest.onload = addImage;
        // imgRequest.onerror = function() { console.log("Some Error Happened."); }
        imgRequest.send();
        
    });

    function addImage() {
        // handle response (this.responseText)
        const data = JSON.parse(this.responseText);
        let firstImage = data.results;
        console.log(firstImage);

        // responseContainer.insertAdjacentHTML('afterbegin', `<figure>
        //     <img src="${firstImage.urls.small}" alt="${firstImage.user.name}">
        //     <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        //     </figure>`);
    }

})();