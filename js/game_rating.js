window.onload = function() {
    let form = document.getElementById('rating_form');

    form.onsubmit = function(event) {
        // Get form elements
        let message = document.getElementById('message');
        let pos = document.getElementById('pos');
        let neg = document.getElementById('neg');
        let lang = document.getElementById('lang');

       if (message.value.trim() === '') {
           message.classList.add('error');
           event.preventDefault(); // Prevent form submission
       } else {
           message.classList.remove('error');
       }

       if (!pos.checked && !neg.checked) {
           document.getElementById('for_pos').classList.add('error');
           document.getElementById('for_neg').classList.add('error');
           event.preventDefault(); // Prevent form submission
       } else {
           document.getElementById('pos').classList.remove('error');
           document.getElementById('neg').classList.remove('error');
       }

       if (lang.value === 'none') {
           lang.classList.add('error');
           event.preventDefault(); // Prevent form submission
       } else {
           lang.classList.remove('error');
       }
    };
};