$(function() {
    $(document).ready(function() {
        var text = document.getElementById("typeStyle");
    
        var typewriter = new Typewriter(text, {
            loop: true
        });
    
        typewriter.typeString(`DaeHyun's Portfolio!`)
            .pauseFor(25000)
            .start();
    });
})

