const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

const fetchLocation = (location) => {
    fetch(`/weather?address=${location}`)
        .then((res) => res.json())
        .then(({ error, location, forecast }) => {
            if (error) {
                return messageOne.textContent = error;
            }
            messageOne.textContent = location;
            messageTwo.textContent = forecast;
        })
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetchLocation(location);
})