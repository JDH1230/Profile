// typing effect
$(function() {
    $(document).ready(function() {
        var text = document.getElementById("typeStyle");
    
        var typewriter = new Typewriter(text, {
            loop: true
        });
    
        typewriter.typeString(`DaeHyun's Portfolio!`)
            .pauseFor(250000)
            .start();
    });
})

//scroll-top 
$(function() {
    $( '.top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
        return false;
    });
})
