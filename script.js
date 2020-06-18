 window.addEventListener('DOMContentLoaded', function() {
 	const products = document.querySelectorAll('.product-list__item');
 	const productsList = Array.from(products);

 	let totalPrice = 0;

 	productsList.map(function(product) {
 		const addToCartButton = product.querySelector('.add-to-cart');

 		addToCartButton.addEventListener('click', function(event) {
 			event.preventDefault();

 			const productPrice = Number(addToCartButton.dataset.productPrice);

 			totalPrice = totalPrice + productPrice;
 			

 			const cartValue = document.querySelector('.total-price');
 			cartValue.innerHTML = totalPrice + 'грн';
 		});
 	});
 });