var fetchAPI = function(target, destination) {
    fetch(target).then(function(response){
        response.text().then(function(text){
            document.querySelector(destination).innerHTML = text;
        });
    });
}