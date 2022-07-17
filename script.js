const jokes = document.querySelector('.jokes');
const nextBtn = document.querySelector('.btn');
const createJokes = () =>{
    setHeader = {
        headers: {
            Accept: 'application/json',
        },
    };

    fetch('https://icanhazdadjoke.com/',setHeader)
    .then((res) =>res.json())
    .then((data) => (jokes.innerHTML = data.joke))
    .catch((error)=> console.log(error));
};

nextBtn.addEventListener('click', createJokes);
createJokes();