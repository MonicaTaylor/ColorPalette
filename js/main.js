
let changeColor;
let firstColor;
let secondColor;
let thirdColor;


document.querySelector('button').addEventListener('click', randomColor)

function randomColor() {
fetch('https://x-colors.herokuapp.com/api/random')
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      firstColor = data.hex
      document.querySelector('.first-color').innerText = firstColor;
      document.getElementById("first-color").style.backgroundColor = firstColor;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
fetch('https://x-colors.herokuapp.com/api/random')
  .then(res => res.json()) 
  .then(data => {
    console.log(data)
    secondColor = data.hex
    document.querySelector('.second-color').innerText = secondColor;
    document.getElementById("second-color").style.backgroundColor = secondColor;
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
fetch('https://x-colors.herokuapp.com/api/random')
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      thirdColor = data.hex
      document.querySelector('.third-color').innerText = thirdColor;
      document.getElementById("third-color").style.backgroundColor = thirdColor;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
