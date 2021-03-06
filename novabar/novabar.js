jQuery(document).ready( function($) {

    function novabar_toggle_usermenu() {
        console.log( "Toggling!" );
        var style = document.getElementById( 'novabar-user' ).style;
        style.display = ( style.display != 'none' ? 'none' : '' );
        return false;
    }
    var uid = null;
    if ( document.cookie && document.cookie != '' ) {
        var cookies = document.cookie.split( ';' );
        for ( var i = 0 ; i < cookies.length ; i++ ) {
            var c = $.trim( cookies[i] );
            if ( c.substring( 0, 11 ) != 'AuthCookie=' ) { continue; }
            uid = decodeURIComponent( c.substring( 12 ) ).split( '!' )[1];
            break;
        }
    }
    var sections = [ "About", "Blog", "Wiki", "Calendar" ]; // Groups
    if ( uid ) {
        sections = sections.concat( [ "CMS" ] );
    }

    var loc = window.location.pathname.split( '/' )[1];

    var tb = '';
    tb += '<div id="novabar-container">';
    tb += '<div id="novabar">';
    tb += '<h3><a href="/">';
    //tb += '<img src="/images/NOVALabs-small.png" border="0" />';
    tb += 'Nova Labs</a></h3>';
    tb += '<ul>';

    for ( var i = 0 ; i < sections.length ; i++ ) {
        var Sec = sections[ i ];
        var sec = Sec.toLowerCase();
        if ( loc == sec ) {
            tb += '<li class="novabar-active">';
        } else {
            tb += '<li>';
        }

        tb += '<a href="/' + sec + '/">' + Sec + '</a>';

        tb += '</li>';
    }

    tb += '</ul>';

    if ( uid ) {
        tb += '<ul style="float:right">';
        //  tb += '<li><a href="/person/' + uid + '">' + uid + '</a></li>';
        tb += '<li><a href="/account/index.html">My Account</a></li>';
        tb += '<li><a href="https://www.nova-labs.org/auth/LOGOUT">Log Out</a></li>';
        tb += '</ul>';
    } else {
        //tb += '<form action="/auth/LOGIN" style="float:right">';
        //tb += '<input type="text" name="username" placeholder="Username">';
        //tb += '<input type="password" name="password" placeholder="Password">';
        //tb += '<button class="novabar-button" type="submit">Sign in</button>';
        //tb += '</form>';
        tb += '<ul style="float:right">';
        tb += '<li><a href="https://www.nova-labs.org/auth/register.html">Register</a></li>';
        tb += '<li><a href="https://www.nova-labs.org/auth/login.html?target=' + location.href + '">Log In</a></li>';
        tb += '</ul>';
    }

    //tb += '</div></div></div>';
    tb += '</div></div>';

    $(tb).appendTo( 'body' );

/*
    $( '#novabar-user' ).click( function(e) {
        $(this).find( 'ul' ).toggle();
        e.preventDefault();
    } );
*/
} );
