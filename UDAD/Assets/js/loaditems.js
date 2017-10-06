function loadIndicators(amount) {
    document.write('<ol class="carousel-indicators">');
    for (var i=0; i < amount; i++)
    {
        if (i == 0)
        {
            document.write('<li data-slide-to="' + i + '" data-target="#carousel-ud" class="active"></li>');
        }else {
            document.write('<li data-slide-to="' + i + '" data-target="#carousel-ud"></li>');
        }
    }
	document.write('</ol>');
}

function getComm(amount){
    $.getJSON("Assets/json/commercial.js", function(json){
        $.each(json, function(index, value){
            if (index == 0){
                $(".carousel-inner").append($('<div class="item active"><img class="img-center" alt="' + value.caption + '" src="http://urbanodesignanddevelopment.com/Assets/ud-images/commercial/' + value.src + '"><div class="carousel-caption"><h3><span class="conan">' + value.caption + '</span></h3></div></div>'));
            }else{
                 $(".carousel-inner").append($('<div class="item"><img class="img-center" alt="' + value.caption + '" src="http://urbanodesignanddevelopment.com/Assets/ud-images/commercial/' + value.src + '"><div class="carousel-caption"><h3><span class="conan">' + value.caption + '</span></h3></div></div>'));
            }
        })
    })
}

function getRes(amount){
    $.getJSON("Assets/json/residential.js", function(json){
        $.each(json, function(index, value){
            if (index == 0){
                $(".carousel-inner").append($('<div class="item active"><img class="img-center" alt="' + value.caption + '" src="http://urbanodesignanddevelopment.com/Assets/ud-images/residential/' + value.src + '"><div class="carousel-caption"><h3><span class="conan">' + value.caption + '</span></h3></div></div>'));
            }else{
                 $(".carousel-inner").append($('<div class="item"><img class="img-center" alt="' + value.caption + '" src="http://urbanodesignanddevelopment.com/Assets/ud-images/residential/' + value.src + '"><div class="carousel-caption"><h3><span class="conan">' + value.caption + '</span></h3></div></div>'));
            }
        })
    })
}