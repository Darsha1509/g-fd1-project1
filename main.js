(function () {
     var containers = document.querySelectorAll('.menu-container');
     containers.forEach(function (item) {
        item.querySelector('.menu-item').addEventListener('click', function () {
           containers.classList.toggle('menu-container__opened');
        });
    })();
})();