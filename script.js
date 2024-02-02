const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const timer = setInterval(() => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    hr < 10 ? (hour.innerText = '0' + hr) : (hour.innerText = hr);
    min < 10 ? (minutes.innerText = '0' + min) : (minutes.innerText = min);
    second < 10 ? (seconds.innerText = '0' + second) : (seconds.innerText = second);
});
