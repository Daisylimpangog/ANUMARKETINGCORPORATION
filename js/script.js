// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    searchBtn.addEventListener('click', () => {
        // Toggle the search input field
        searchInput.classList.toggle('d-none');
        searchInput.focus();
    });

    // Optional: Close search on outside click
    document.addEventListener('click', function (event) {
        if (!searchBtn.contains(event.target) && !searchInput.contains(event.target)) {
            searchInput.classList.add('d-none');
        }
    });
});
