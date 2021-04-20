// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


// Weather
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=c3bc945d43d9f371f5aa4021b1429b40&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
// Show Time
function showTime() {
  let days = ['Воскресенье', 'Понедельник', 'Ввторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let nameMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let today = new Date(),
    weekDAY = days[today.getUTCDay()],
    numberDay = today.getDate(),
    month = nameMonth[today.getMonth()],
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


  // Output Time
  time.innerHTML = `${weekDAY}<span>,</span>${numberDay}<span> </span>${month}<span>,</span>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour >= 6 && hour < 12) {
    // Morning
    greeting.textContent = 'Доброе утро, ';
    getImage();
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    greeting.textContent = 'Добрый день, ';
    getImage();
  } else if (hour >= 18 && hour < 24) {
    // Evening
    greeting.textContent = 'Добрый вечер, ';
    getImage();
    document.body.style.color = 'white';
  } else {
    // Night
    greeting.textContent = 'Доброй ночи, ';
    getImage();
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Введите имя]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[введите цель]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}
//background

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}

let i = 0;
function getImage() {
  let today = new Date(),
    hour = today.getHours();
  if (hour >= 6 && hour < 12) {
    const base = 'assets/images/morning/';
    const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
    const index = i % images.length;
    const imageSrc = base + images[index];
    viewBgImage(imageSrc);
  } else
  if (hour >= 12 && hour < 18) {
    const base = 'assets/images/day/';
    const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
    const index = i % images.length;
    const imageSrc = base + images[index];
    viewBgImage(imageSrc);
  } else if (hour >= 18 && hour < 24) {
    const base = 'assets/images/evening/';
    const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
    const index = i % images.length;
    const imageSrc = base + images[index];
    viewBgImage(imageSrc);
  } else {
    const base = 'assets/images/night/';
    const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
     const index = i % images.length;
    const imageSrc = base + images[index];
    viewBgImage(imageSrc);
  }
  i++;
  setTimeout(getImage, 3600000);
}
function getImage1() {
    const base = 'assets/images/allday/';
    const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg'];
    const index = i % images.length;
    const imageSrc = base + images[index];
    viewBgImage(imageSrc);
   i++;
  btn.disabled = true;
  setTimeout(function () { btn.disabled = false }, 1000);
}
const btn = document.querySelector('.btn');
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
async function getQuote() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
btn.addEventListener('click', getQuote);
btn.addEventListener('click', getImage1);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();