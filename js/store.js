
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

function createDivs(data) {
    var baseStoreDiv = document.querySelector('.base_store_div'); // Get the base div

    data.forEach(function(item) {
        // Create a new div element for the store
        var storeDiv = document.createElement('div');
        storeDiv.classList.add('store_div'); // Add class 'store_div' to the new div

        var aTag = document.createElement('a');
        aTag.href = item.html_path;
        storeDiv.appendChild(aTag);

        var imgDiv = document.createElement('div');
        aTag.appendChild(imgDiv);

        var img = document.createElement('img');
        img.classList.add('store_img');
        img.src = item.img_path;
        img.alt = item.title + ' thumbnail';
        imgDiv.appendChild(img);

        var titleTag = document.createElement('a');
        titleTag.classList.add('title');
        titleTag.href = item.html_path;
        titleTag.textContent = item.title;
        storeDiv.appendChild(titleTag);

        var ratingPara = document.createElement('p');
        ratingPara.classList.add('rating');
        var strong = document.createElement('strong');
        strong.textContent = item.ratings;
        ratingPara.appendChild(strong);
        storeDiv.appendChild(ratingPara);

        var buyButton = document.createElement('button');
        buyButton.classList.add('buy_button');
        buyButton.textContent = item.price;
        storeDiv.appendChild(buyButton);

        var tagContainer = document.createElement('div');
        tagContainer.classList.add('wishlist_tag_container');
        storeDiv.appendChild(tagContainer);

        item.tags.forEach(function(tag) {
            var tagButton = document.createElement('button');
            tagButton.classList.add('tag_button');
            tagButton.textContent = tag;
            tagContainer.appendChild(tagButton);
        });

        baseStoreDiv.appendChild(storeDiv);
    });
}

window.onload = function() {
    fetchData()
        .then(data => {
            createDivs(data); // Call the createDivs function with the fetched data
        });
};