app.controller('myController', function ($scope) {

    $scope.films = [
        { "id": 1, "fname": "Film 1", "fyear": "2020", "category": "Aksiyon" },
        { "id": 2, "fname": "Film 2", "fyear": "2023", "category": "Aksiyon" },
        { "id": 3, "fname": "Film 3", "fyear": "2018", "category": "Aksiyon" },

        { "id": 4, "fname": "Zootropolis", "fyear": "2017", "category": "Animasyon" },
        { "id": 5, "fname": "Cars", "fyear": "2018", "category": "Animasyon" },
        { "id": 6, "fname": "Frozen", "fyear": "2023", "category": "Animasyon" },

        { "id": 7, "fname": "Interstaller", "fyear": "2011", "category": "Bilim Kurgu" },
        { "id": 8, "fname": "Tenet", "fyear": "2010", "category": "Bilim Kurgu" },
        { "id": 9, "fname": "Dune", "fyear": "2024", "category": "Bilim Kurgu" },

    ];


    $scope.genres = ['Aksiyon', 'Animasyon', 'Bilim Kurgu'];

    $scope.selectedGenre = '';

    $scope.filterFilms = function () {
        if ($scope.selectedGenre === '') {
            $scope.filteredFilms = $scope.films;
        } else {
            $scope.filteredFilms = $scope.films.filter(function (film) {
                return film.category === $scope.selectedGenre;
            });
        }
    };


    // $scope.getSelectedFilmId = function (x) {

    //     if (x.selected)
    //         return x.id;
    // }
    $scope.showButtons = function () {
        $scope.filteredFilms.forEach(function (film) {
            film.buttonShow = film.selected;
            if (film.selected) {
                $scope.selectedFilmId = film.id;
            }
        });
    };

    $scope.rent = function (filmId) {
        // Seçilen filmi bul
        var selectedFilm = $scope.filteredFilms.find(function (film) {
            return film.id === filmId;
        });

        // Seçilen film kategorisine göre fiyatı belirle
        switch (selectedFilm.category) {
            case 'Aksiyon':
                selectedFilm.price = 50;
                break;
            case 'Animasyon':
                selectedFilm.price = 30;
                break;
            case 'Bilim Kurgu':
                selectedFilm.price = 40;
                break;
            default:
                selectedFilm.price = 0; // Eğer kategori belirtilmemişse fiyatı sıfıra ayarla
        }

        // Sepete eklemek için filmi sepete ekle
        var rentalItem = {
            filmId: filmId,
            filmName: selectedFilm.fname,
            category: selectedFilm.category,
            rentalPrice: selectedFilm.price
        };

        $scope.rentalItems = []; 
        // Sepete ekleme işlemi
        if (!$scope.rentalItems) {
            $scope.rentalItems = []; // Sepet boşsa yeni bir dizi oluştur
        }
        $scope.rentalItems.push(rentalItem);
    };


    $scope.buy = function (filmId) {

    }


});