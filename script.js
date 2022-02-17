
// ==========BURGER============================
const hamburger = document.querySelector('.hamburger');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.list-nav').cloneNode(1);
const body = document.body;
const page = document.querySelector('.main');
// const head = document.querySelector('header');
function openMenu () {
	hamburger.classList.toggle('open');
	popup.classList.toggle('active');
	body.classList.toggle('noscroll');
	page.classList.toggle('opacity-page');
	// head.classList.toggle('opacity-page');
	fillPopup();
}
function fillPopup() {
	popup.append(menu);
}
function closeMenu (event) {
		if (event.target.classList.contains('nav-link')) {
			hamburger.classList.remove('open');
			popup.classList.remove('active');
			body.classList.remove('noscroll');
			page.classList.remove('opacity-page');
			// head.classList.remove('opacity-page');
		}
}
hamburger.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);

// =======PHOTOS======================================
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const portfolioImages = document.querySelectorAll('.portfolio-photos-img');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
function preloadSummerImages() {
	seasons.forEach((item) => {
		for(let i = 1; i <= 6; i++) {
    	const img = new Image();
    	img.src = `./assets/img/${item}/${i}.jpg`;
  		}
		}
	)	
}
preloadSummerImages();

function changeImage(event) {
	let currentSeason = event.target.dataset.season;
	portfolioBtns.forEach((el) => el.classList.remove('active'));
	event.target.classList.add('active');
	if(event.target.classList.contains('portfolio-btn')) {
			portfolioImages.forEach((img, index) => {
				img.src=`./assets/img/${currentSeason}/${index + 1}.jpg`;
			}
		)	
	}
}
portfolioBtns.forEach((el) => el.addEventListener('click', changeImage));

// =======LIGHT THEME======================

const themes = ['skills', 'portfolio', 'video', 'price'];
const ligthBtn = document.querySelector('.ligth');
const ligthSections = document.querySelectorAll('.change-ligth');
const ligthText = document.querySelectorAll('.ligth-text');
const navLinksColor = menu.querySelectorAll('.nav-link');
let theme = 'dark';

ligthBtn.addEventListener('click', changeColor)


function changeColor () {
	ligthSections.forEach((item) => {
		item.classList.toggle('ligth-theme');
	});
	ligthText.forEach((item) => {
		item.classList.toggle('text-theme');
	});
	popup.classList.toggle('ligth-theme');
	navLinksColor.forEach((item) => {
		item.classList.toggle('text-theme')
	});
	hamburger.classList.toggle('text-theme');
	ligthBtn.classList.toggle('ligth-mode');	
}

// =======TRANSLATE========================

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
		'price-item-1': 'Standard',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-item-2': 'Premium',
		'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-item-3': 'Gold',
		'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
		'e-mail': 'E-mail',
		'phone': 'Phone',
		'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
		'price-item-1': 'Стандартный',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
		'price-item-2': 'Премиальный',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
		'price-item-3': 'Золотой',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
		'e-mail': 'Адрес почты',
		'phone': 'Телефон',
		'message': 'Сообщение'
  }
}

const enLng = document.querySelector('.en-switch');
const ruLng = document.querySelector('.ru-switch');
const buttonsLng = document.querySelectorAll('.lng-switch');

function getTranslate (lang) {
	const elemForTrans = document.querySelectorAll('[data-i18n]');
	elemForTrans.forEach((el) => {
		if (el.placeholder) {
			el.placeholder = i18Obj[lang][el.dataset.i18n];
			el.textContent = '';
		}
		el.textContent = i18Obj[lang][el.dataset.i18n]
	})
	langLocalStorage = lang;
}

function activeButton(event) {
	buttonsLng.forEach((el) => el.classList.remove('_active'));
	event.target.classList.add('_active');
}

enLng.addEventListener('click', () => {getTranslate('en')});
ruLng.addEventListener('click', () => {getTranslate('ru')});
buttonsLng.forEach((el) => el.addEventListener('click', activeButton))

// ================LOCAL STORAGE============================

let langLocalStorage = 'en';


function setLocalStorage() {
	if (ligthBtn.classList.contains('ligth-mode')) {
		theme = 'ligth';
	}
	localStorage.setItem('lang', langLocalStorage);
	localStorage.setItem('theme', theme);
}

window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
	if (localStorage.getItem('lang')) {
		const langLocalStorage = localStorage.getItem('lang');
		getTranslate(langLocalStorage);
	}
	if (localStorage.getItem('theme')) {
		const theme = localStorage.getItem('theme');
		if (theme === 'ligth') {	
			changeColor();
		}
	}
}

window.addEventListener('load', getLocalStorage)