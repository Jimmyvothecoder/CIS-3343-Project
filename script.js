// functions for the search icon to appear 
const searchIcon = document.querySelector('.search-icon');
const searchIForm = document.querySelector('.search-form');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

searchIcon.addEventListener('click', () => {
    searchIForm.classList.add('active');
    cartItemsContainer.classList.remove('active');
    navbar.classList.remove('active');
});

menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
    searchIForm.classList.remove('active');
    cartItemsContainer.classList.remove('active');
});

// functions for the cart icon to appear
const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.querySelector('.cart-items-container');

cartIcon.addEventListener('click', () => {
    cartItemsContainer.classList.add('active');
    searchIForm.classList.remove('active');
    navbar.classList.remove('active');
});

window.onscroll = ()=>{
    cartItemsContainer.classList.remove('active');
    searchIForm.classList.remove('active');
    navbar.classList.remove('active');
}