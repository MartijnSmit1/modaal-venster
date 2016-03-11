$(document).ready( function() {
    var goku1 = $('#natsu1').detach();
    var goku2 = $('#gray2').detach();
    var goku3 = $('#jellal3').detach();
    
    
    // Events bij de thumbs : modaal venster openen met de pasende inhoud erin
    $('#natsuThumb1').on('click', function(){
        Vensterobj.openen({inhoud: goku1, breedte: 600});
    });
    
    $('#grayThumb2').on('click', function(){
        Vensterobj.openen({inhoud: goku2, breedte: 600});
    });
    
    $('#jellalThumb3').on('click', function(){
        Vensterobj.openen({inhoud: goku3, breedte: 600});
    });
});