var Vensterobj = (function(){
    
    var $window = $(window);
    var $Venster = $('<div class="Venster modaal-style"/>');
    var $VensterInd = $('<div class="VensterInd"/>');
    var $Sluiter = $('<span class="sluiter">&#10005;</span>');
    
    $Venster.append($VensterInd);
    
    return {
        centreren: function(){
            // Opdrachten centreren
            var links = Math.max($window.width()-$VensterInd.outerWidth(), 0) / 2;
            var boven = Math.max($window.height()-$VensterInd.outerHeight(), 0) / 2;
            $VensterInd.css({left: links, top: boven});
        },
        openen: function(instellingen){
            // Opdrachten openen
            $VensterInd.append(instellingen.inhoud, $Sluiter);
            $VensterInd.css({width: instellingen.breedte+'px' || 'auto', 
                              height: instellingen.hoogte+'px' || 'auto'})
                .on('click', function(e){
                    e.stopPropagation();
            });
            $Venster.appendTo('body')
                .on('click', Vensterobj.sluiten);
            Vensterobj.centreren();
            $Sluiter.on('click', Vensterobj.sluiten);
            $window.on('resize', Vensterobj.centreren);
        },
        sluiten: function(){
            // Opdrachten sluiten
            $VensterInd.empty()
                .off('click', Vensterobj.sluiten);
            $Venster.detach();
            $window.off('resize', Vensterobj.centreren);
        }
    }
}());