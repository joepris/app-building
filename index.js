document.querySelector('#contact form')?.addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Thanks for reaching out! We will get back to you soon.');
	this.reset();
});
