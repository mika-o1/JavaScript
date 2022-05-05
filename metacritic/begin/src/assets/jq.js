import $ from 'jquery'

$(document).ready(function () {
    var arr = [
        {
            "title": "Citizen Kane",
            "date": "September 4, 1941",
            "desc": "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.",
            "rate": 100,
            "img": "https://static.metacritic.com/images/products/movies/5/1c4da52a6f2335836a21271ec4a6f6b3-98.jpg",
            "mustsee": false
        },
        {
            "title": "The Godfather",
            "date": "March 11, 1972",
            "desc": "Francis Ford Coppola's epic features Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family. Director Coppola paints a chilling portrait of the Sicilian clan's rise and near fall from power in America, masterfully balancing the story between the Corleone's family life and the ugly crime business in which they are engaged. Based on Mario Puzo's best-selling novel and featuring career-making performances by Al Pacino, James Caan and Robert Duvall, this searing and brilliant film garnered ten Academy Award nominations, and won three including Best Picture of 1972. [Paramount Pictures]",
            "rate": 100,
            "img": "https://static.metacritic.com/images/products/movies/3/47c2b1f35087fc23c5ce261bbc3ad9e0-98.jpg",
            "mustsee": true
        },
        {
            "title": "Rear Window",
            "date": "September 1, 1954",
            "desc": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "rate": 100,
            "img": "https://static.metacritic.com/images/products/movies/9/0d63e9ade174d351943b09982a5022fe-98.jpg",
            "mustsee": false
        }
    ];
    console.log(arr);
    console.log(arr[0].title);

    $.each(arr, function(index, value) {
        //структура
        $('.home').append('<div class="movie-' + index + '">' + '<h1>' + '</h1>' + '<small></small>' + '<img class="ava">' + '<img class="must-img">' + '</div>');
        //значения
        $('.home .movie-' + index + " h1").append(value.title);
        $('.home .movie-' + index + " small").append(value.date);
        $('.home .movie-' + index + " img.ava").attr("src", value.img);
        if (value.mustsee === true) {
            $('.home .movie-' + index + " img.must-img").attr("src", "https://www.metacritic.com/images/icons/mc-mustsee-sm.svg");
        } else {
            console.log("Фильм с индексом: " + index + ' не рекомендуется к просмотру')
        }
    });
});