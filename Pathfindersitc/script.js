document.querySelector('.loader').style.display = 'flex';
setTimeout(() => {
	document.querySelector('.loader').style.display = 'none';
	document.querySelector('.main').style.display = 'block';
}, 2000);

//const containers =
//{document.querySelectorAll('.skill');

//window.addEventListener('scroll', () => {
	//containers.forEach((skill) => {
		//const top = skill.offsetTop;
		//const height = skill.offsetHeight;
		//if (window.scrollY + window.innerHeight >= top && window.scrollY <= top + height) {
			//skill.classList.add('scroll-reveal');
		//}
	//});
//});