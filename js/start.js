function submitForm(event) {
	event.preventDefault();
	let name = document.getElementById('exampleFormControlTextarea1').value;
	sessionStorage.setItem('name', name);
	location.href = 'https://thedipsmeister18.github.io/Quiz-Site/';
	console.log(name);
}
