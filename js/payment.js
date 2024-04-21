// Function to extract query parameter from URL
function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

// Function to set image, price, title (and color if needed) based on query parameter
function setImage() {
    const imageParam = getQueryParam('image');
    switch(imageParam) {
        case 'nfs':
            document.getElementById('game').src = '../images/nfs.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/nfs2.jpg');");
            document.getElementById('price').innerText = '4.99€';
            document.getElementById('title').innerText = 'Need for Speed';
            document.getElementById('title').style.color = 'white';
            document.getElementById('price').style.color = 'white';
            break;
        case 'amogus':
            document.getElementById('game').src = '../images/sus.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/sussy_bussy.gif');");
            document.getElementById('price').innerText = '4.99€';
            document.getElementById('title').innerText = 'Amogus';
            break;
        case 'pokemon':
            document.getElementById('game').src = '../images/pikachu.png';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/pokemon_bg.jpg');");
            document.getElementById('price').innerText = '4.99€';
            document.getElementById('title').innerText = 'Pokemon: Stop';
            document.getElementById('title').style.color = 'white';
            document.getElementById('price').style.color = 'white';
            break;
        case 'enshrouded':
            document.getElementById('game').src = '../images/enshrouded.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/enshrouded_wp.jpeg');");
            document.getElementById('price').innerText = '29.99€';
            document.getElementById('title').innerText = 'Enshrouded';
            break;
        case 'bg3':
            document.getElementById('game').src = '../images/bg3.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/bgwp.jpg');");
            document.getElementById('price').innerText = '49.99€';
            document.getElementById('title').innerText = 'Baldur\'s Gate 3';
            document.getElementById('title').style.color = 'white';
            document.getElementById('price').style.color = 'white';
            break;    
        case 'ror2':
            document.getElementById('game').src = '../images/ror2tn.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/ror2gp.jpg');");
            document.getElementById('price').innerText = '39.99€';
            document.getElementById('title').innerText = 'Risk of Rain 2';
            document.getElementById('title').style.color = 'white';
            document.getElementById('price').style.color = 'white';
            break;
    }
}

// Call setImage function when the page loads
window.onload = setImage;

// Function to redirect to pay.html with image parameter
function redirectToPay(image) {

    window.location.href = `../html/pay.html?image=${image}`;
}
