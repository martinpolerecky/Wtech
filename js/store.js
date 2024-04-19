

// Function to fetch JSON data
function fetchData() {
    return fetch('/js/games.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to create and append div elements
function createDivs(data) {
    var baseStoreDiv = document.querySelector('.base_store_div'); // Get the base div

    // Loop through each object in the JSON array
    data.forEach(function(item) {
        // Create a new div element for the store
        var storeDiv = document.createElement('div');
        storeDiv.classList.add('store_div'); // Add class 'store_div' to the new div

        // Create an <a> tag for the title and image
        var aTag = document.createElement('a');
        aTag.href = item.html_path;
        storeDiv.appendChild(aTag);

        // Create a <div> for the image
        var imgDiv = document.createElement('div');
        aTag.appendChild(imgDiv);

        // Create an <img> element
        var img = document.createElement('img');
        img.classList.add('store_img');
        img.src = item.img_path;
        img.alt = item.title + ' thumbnail';
        imgDiv.appendChild(img);

        // Create a <a> tag for the title
        var titleTag = document.createElement('a');
        titleTag.classList.add('title');
        titleTag.href = item.html_path;
        titleTag.textContent = item.title;
        storeDiv.appendChild(titleTag);

        // Create a <p> tag for the rating
        var ratingPara = document.createElement('p');
        ratingPara.classList.add('rating');
        var strong = document.createElement('strong');
        strong.textContent = item.ratings;
        ratingPara.appendChild(strong);
        storeDiv.appendChild(ratingPara);

        // Create a <button> for the price
        var buyButton = document.createElement('button');
        buyButton.classList.add('buy_button');
        buyButton.textContent = item.price;
        storeDiv.appendChild(buyButton);

        // Create a <div> for the tags
        var tagContainer = document.createElement('div');
        tagContainer.classList.add('wishlist_tag_container');
        storeDiv.appendChild(tagContainer);

        // Loop through each tag and create a button for it
        item.tags.forEach(function(tag) {
            var tagButton = document.createElement('button');
            tagButton.classList.add('tag_button');
            tagButton.textContent = tag;
            tagContainer.appendChild(tagButton);
        });

        // Append the store div to the base div
        baseStoreDiv.appendChild(storeDiv);
    });
}

// Attach fetchData to the window.onload event
window.onload = function() {
    fetchData()
        .then(data => {
            createDivs(data); // Call the createDivs function with the fetched data
        });
};