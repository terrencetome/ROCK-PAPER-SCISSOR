let userScore = 0;
let computerScore = 0;
//catching the doom
const userScore_span = document.querySelector('.user-score');
const computerScore_span = document.querySelector('.computer-score');
const scoreBoard_div = document.querySelector('.score-board'); 
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p' , 's'];
    const radomNumber =(Math.floor(Math.random() * 3));
    return choices[radomNumber];
}


function convertToWord(letter){
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow');}, 300)
}

function lose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} losses to ${convertToWord(computerChoice)}${smallCompWord} . You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow');}, 300)
}

function draw( userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord} . It's a draw`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow');}, 300)
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
      case 'rs':
      case 'pr':
      case 'sp':
      win(userChoice, computerChoice);
      break;

      case 'rp':
      case 'ps':
      case 'sr':
      lose( userChoice, computerChoice);
      break;

      case 'rr':
      case 'pp':
      case 'ss':
      draw( userChoice, computerChoice);
      break;
  }  
} 


function main(){
    rock_div.addEventListener('click', function(){
       game('r'); 
    })
    
    paper_div.addEventListener('click', function(){
       game('p');
    })
    
    scissors_div.addEventListener('click', function(){
        game('s');
    })
    
}main();

