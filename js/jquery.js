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
        $( 'html, body' ).animate( { scrollTop : 0 }, 3000 );
        return false;
    });
})

//link about
$(function() {
    $( '#about' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 200 }, 1000 );
        return false;
    });
})

//link skill
$(function() {
    $( '#skill' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 1000 }, 1000 );
        return false;
    });
})

//link project 
$(function() {
    if(window.innerWidth > 768) {
        $( '#project' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 1500 }, 1000 );
            return false;
        });
    } else {
        $( '#project' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 3000 }, 1000 );
            return false;
        });
    }
})

//link contact
$(function() {
    $( '#contact' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 8000 }, 3000 );
        return false;
    });
})

