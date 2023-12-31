const info = document.getElementById('info');
const mail = document.getElementById('mail');

let a, b, c, d, e;

const showInfo = () => {
	a = mail.value;
	b = Array.from(a);
	c = b.length;
	d = b.includes('@');
	e = b.includes('.');
	c === 0
		? (info.innerText = 'Enter an email address')
		: d && e
		? (info.innerText = 'Check your email please')
		: (info.innerText = 'Please enter a valid email address');
};

const hideInfo = () => (info.innerText = ' ');
