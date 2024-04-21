// Function to extract query parameter from URL
function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

// Function to set image based on query parameter
function setImage() {
    const imageParam = getQueryParam('image');
   //TODO zmenit cenu pripadne farbu pri payment
    switch(imageParam) {
        case 'nfs':
            document.getElementById('game').src = '../images/nfs.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/nfs2.jpg');");
            document.getElementById('title').innerText = 'Need for Speed';
            /*
            document.getElementById('left').src = '../images/nfs2';
            document.getElementById('right').src = '../images/nfs2.jpg';
            */
            break;
        case 'amogus':
            document.getElementById('game').src = '../images/sus.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/sussy_bussy.gif');");
            document.getElementById('title').innerText = 'Amogus';
            break;
        case 'pokemon':
            document.getElementById('game').src = '../images/pikachu.png';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/pokemon_bg.jpg');");
            document.getElementById('title').innerText = 'Pokemon: Stop';
            break;
        case 'gta':
            document.getElementById('game').src = '../images/gta.png';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/gtaa.png');");
            document.getElementById('title').innerText = 'GTA VI';
            break;
        case 'enshrouded':
            document.getElementById('game').src = '../images/enshrouded.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/enshrouded_wp.jpeg');");
            document.getElementById('title').innerText = 'Enshrouded';
            break;
        case 'bg3':
            document.getElementById('game').src = '../images/bg3.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/bgwp.jpg');");
            document.getElementById('title').innerText = 'Baldur\'s Gate 3';
            break;    
        case 'ror2':
            document.getElementById('game').src = '../images/ror2tn.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/ror2g.jpg');");
            document.getElementById('title').innerText = 'Risk of Rain 2';
            break;   
        case '../images/enshrouded.jpg':
            document.getElementById('game').src = '../images/enshrouded.jpg';
            document.querySelector('style').textContent = document.querySelector('style').textContent.replace("background-image: url('../images/gta.jpg');", "background-image: url('../images/enshrouded_wp.jpeg');");
            document.getElementById('title').innerText = 'Enshrouded';
            break;   
    }
}

// Call setImage function when the page loads
window.onload = setImage;

// Function to redirect to pay.html with image parameter
function redirectToPay(image) {
    // when being redirected from the homepage
    if (image === 'gta') {
        window.location.href = `html/pay.html?image=${image}`;
    }
    // when being redirected from the game's respective page
    else(
    window.location.href = `../html/pay.html?image=${image}`);
}
