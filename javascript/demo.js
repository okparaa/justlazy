(function init() {

    // example 1
    Justlazy.registerLazyLoadByClass("load-if-visible-placeholder", {
        onloadCallback: function() {
            this.parentNode.classList.remove("justlazy-spinner");
        }
    });

    // example 2
    var placeholdersExample2 = document.querySelectorAll('.load-with-threshold-placeholder');
    for (var i = 0; i < placeholdersExample2.length; ++i) {
        Justlazy.registerLazyLoad(placeholdersExample2[i], {
            threshold: 300
        });
    }

    // example 3
    document.getElementById("custom-event-btn").onclick = function() {
        var imgPlaceholder = document.getElementById("custom-event-placeholder");
        Justlazy.lazyLoad(imgPlaceholder);

        return false;
    };

    // example 4
    document.getElementById("srcset-btn").onclick = function() {
        var imgPlaceholder = document.getElementById("srcset-placeholder");
        Justlazy.lazyLoad(imgPlaceholder);

        return false;
    };
})();
