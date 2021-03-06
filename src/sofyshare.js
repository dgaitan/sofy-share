(function( $ ){

    'use strict';

    var shareLinks = {
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
        twitter: 'https://twitter.com/home?status=',
        google: 'https://plus.google.com/share?url=',
        linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url='
    };

    var Sofy = function ( options, el ) {

        var defaults = {
            facebookUrl: shareLinks.facebook,
            twitterUrl: shareLinks.twitter,
            googleUrl: shareLinks.google,
            linkedinUrl: shareLinks.linkedin,
            networkData: 'network',
            urlData: 'url',
            windowWidth: 350,
            windowHeight: 550
        };

        var settings = $.extend({}, defaults, options);

        if ( el.length > 0 ) {

            el.on('click', function(e){
                e.preventDefault();
                //debugger;

                var socialNetwork = $( this ).data( settings.networkData );
                var shareUrl = $( this ).data( settings.urlData );

                if ( socialNetwork == 'facebook' ) {
                    $( this ).attr( 'href', settings.facebookUrl + shareUrl );
                } else if ( socialNetwork == 'google' ) {
                    $( this ).attr( 'href', settings.googleUrl + shareUrl );
                } else if ( socialNetwork == 'twitter' ) {
                    $( this ).attr( 'href', settings.twitterUrl + shareUrl );
                } else if ( socialNetwork == 'linkedin' ) {
                    $( this ).attr( 'href', settings.linkedinUrl + shareUrl );
                } else {
                    console.log('Dont support the current social network :(');
                }

                var linkRef = $( this ).attr( 'href' );
                var windowSize = 'height=' + settings.windowHeight + ',width=' + settings.windowWidth + ',resizable=1';

                window.open(linkRef, socialNetwork, windowSize.toString());

            });
        }

    };

    $.fn.sofyShare = function ( options ) {

        return Sofy( options, $(this) );

    };

})( jQuery );