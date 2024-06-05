let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});
function fetchData(page) {
    fetch(`http://localhost:8080/api/tutorials=${page}`)
      .then(response => response.json())
      .then(data => {
        const product = data.items;
        const productList = document.getElementById('coffee-list');
        productList.innerHTML = ''; // Clear previous movies

        // Loop through movies and create HTML elements
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
  
          const image = document.createElement('img');
          image.src = product.poster_url;
          image.alt = product.name;
  
          const name = document.createElement('h2');
          title.textContent = product.name;
  
          const salePrice = document.createElement('p');
          year.textContent = 'Price: ' + product.price;
  
          productCard.appendChild(image);
          productCard.appendChild(name);
          productCard.appendChild(price);
  
          productCard.addEventListener('click', () => {
            fetchMovieDetails(product.slug);
          });
  
          productList.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }




  function fetchData(page) {
    fetch(`https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
      .then(response => response.json())
      .then(data => {
        const movies = data.items;
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Clear previous movies
        
        // Loop through movies and create HTML elements
        movies.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
  
          const image = document.createElement('img');
          image.src = movie.poster_url;
          image.alt = movie.name;
  
          const title = document.createElement('h2');
          title.textContent = movie.name;
  
          const year = document.createElement('p');
          year.textContent = 'Year: ' + movie.year;
  
          movieCard.appendChild(image);
          movieCard.appendChild(title);
          movieCard.appendChild(year);
  
          movieCard.addEventListener('click', () => {
            fetchMovieDetails(movie.slug);
          });
  
          movieList.appendChild(movieCard);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }