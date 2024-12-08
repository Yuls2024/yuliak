
//     window.addEventListener('resize', function () {
//         if (window.innerWidth > 605) {
//             const mobileMenu = document.getElementById('openMenu');
//             if (mobileMenu) {
//                 mobileMenu.style.display = 'none';
//                 window.location.hash = ''; // Remove the hash from the URL
//             }
//         }
//     });



// document.getElementById('hamburger').addEventListener('click', function(event){
//     event.preventDefault();
//     document.getElementById('openMenu').classList.toggle('hide');   
// })

document.getElementById('hamburger').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('openMenu').classList.toggle('hide');
})