"use strict";

// Տնային աշխատանք 16

// 1․ գլխավոր օբջեքթի մեջ ստեղծել showMyDB մեթոդ, որը կստուգի privat - ը, եթե լինի false ապա գլխավոր օբջեքթը չպետք ա կոնսոլ լինի, եթե true ապա պետք ա կոնսոլ լինի

// 2․ գլխավոր օբջեքթի մեջ ստեղծել yourFavoriteGenres մեթոդ, որի մեջ յուզեռը պետք ա երեք անգամ պատասխանի այց հարցին՝« Ձեր նախընտրելի ժանրը» ու կողքից գրվի հարցի թիվը, 
//այսինքն առաջին հարցը կլինի 1, երկրորդ հարցը կլինի 2, երրորդ հարցը կլինի 3, ու էդ ամեն ինչը պետք ա գրեք genres անունով զանգվածի մեջ

// 3․ պետք ա ներկայիս կոդը օպտիմիզացնեք ու ձեր ստեղծած մեթոդները դնեք ստուգման տակ, որպեսզի յուզեռը չկարողանաք ոչ քենսլ անի, ոչ դատարկ վալյու ուղարկի ոչ էլ 20 ից շատ տառ

// 4. numberOfFilms - ը պետք ա լինի ՄԻԱՅՆ ԹԻՎ, եթե թիվ չի while -ով էնքան անել, որ յուզեռը թիվ գրի

function calculateNumOfFilms() {
    const numberOfFilm = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
    if (typeof(numberOfFilm) === "number") {
        if (numberOfFilm === 0 || numberOfFilm <= 0 || numberOfFilm === " ") {
            console.log("Տեղի է ունեցել անհայտ խնդիր");
            calculateNumOfFilms();
        } else {
            if (+numberOfFilm < 10) {
                console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
                return numberOfFilm;
            } else if (numberOfFilm < 30) {
                console.log("Դուք ֆիլմի սիրահար եք");
                return numberOfFilm;
            } else if (numberOfFilm >= 30) {
                console.log("Դուք Կինոման եք !!!");
                return numberOfFilm;
            }
        }
    }
}
const numberOfFilms = calculateNumOfFilms();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB() {
        if (this.privat === false) {
            console.log("Տվյալների բազան փակ է");
        } else {
            console.log(this);
        }
    },
    yourFavoriteGenres() {
        for (let i = 1; i <= 3; i++) {
            let favoriteGebres = prompt("Ձեր նախընտրելի ժանրը");
            if (favoriteGebres === null || favoriteGebres === "" || favoriteGebres.length > 20) {
                i--;
            } else {
                this.genres.push(`${i}:${favoriteGebres}`);
            }

        }
    }
};


personalMovieDB.showMyDB();
personalMovieDB.yourFavoriteGenres();
console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
    const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
    const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("OK");
    } else {
        console.log("ERROR");
        i--;
    }
}

console.log(personalMovieDB);