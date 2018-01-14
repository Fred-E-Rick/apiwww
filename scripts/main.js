document.addEventListener('keydown', function(event) {
    if(event.keyCode == 70) {
        window.location.replace("http://fred-e-rick.tk/f");
    } 
    if(!event.keyCode == 70) {
        window.location.replace("https://fred-e-rick.tk/not-f");
    }
    
});