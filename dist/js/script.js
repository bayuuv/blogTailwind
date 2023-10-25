//start: Navbar
document.querySelector('.navbar-show').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar').classList.add('show-menu')
})
document.querySelectorAll('.navbar-hide, .navbar-overlay').forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('.navbar').classList.remove('show-menu')
    })
})
//end: Navbar

document.querySelector('.search-show').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.search-modal').classList.remove('hidden')
    document.getElementById('.search').focus()
})
document.querySelector('.search-hide').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.search-modal').classList.add('hidden')
})

//start: Categories
new Swiper('.swiper-category', {
    slidesPerView: 'auto',
    spaceBetween: 24,
});