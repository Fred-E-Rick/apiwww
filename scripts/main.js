document.addEventListener('keydown', function(event) {
    if(event.keyCode == 70) {
        window.location.href = "../f";
    } 
    if(event.keyCode != 70) {
        window.location.href = "../not-f";
    }
    
});
