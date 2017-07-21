(function() {
'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){
        //Пишем свой код 
        //alert('HTML загружен');

        // $.when( $.get('https://restcountries.eu/rest/v2/lang/ru') )
        // .then(function(countries) {
        //     var countLength = Lazy(countries).length();
        //     return countLength;
        // }).then(function(countLength) {
        //     console.log(countLength); // 9
        // })
        // .fail(function(xhr, textStatus, errorThrown) {
        // })
        // .always(function(xhr, textStatus) {
        // });

        $.when( ['USA', 'Canada', 'Mexico'] )
        .then(function(countries) {
            var countLength = Lazy(countries).length();
            return countLength;
        }).then(function(countLength) {
            console.log(countLength); // 9
        })
        .fail(function(xhr, textStatus, errorThrown) {
        })
        .always(function(xhr, textStatus) {
        });
    }

}());

// Lazy([1, 2, 4])       // instanceof Lazy.ArrayLikeSequence
// Lazy({ foo: "bar" })  // instanceof Lazy.ObjectLikeSequence
// Lazy("hello, world!") // instanceof Lazy.StringLikeSequence
// Lazy()                // sequence: []
// Lazy(null)            // sequence: []


// Lazy([1, 2, 3, 4, 5]).slice(2, 4)  // sequence: [3, 4]

// Lazy({ "uno": 1, "dos": 2 }).assign({ "tres": 3 }) // sequence: { uno: 1, dos: 2, tres: 3 }

// Lazy("bah bah\tblack  sheep").split(/\s+/) // sequence: ["bah", "bah", "black", "sheep"]

//         Lazy.generate(Math.random)
//             .map(function(e) { return Math.floor(e * 1000) + 1; })
//             .uniq()
//             .take(30)
//             .each(function(e) { console.log(e); });