const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');

let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetGame() {
  dead = 0;
  lost = 0;
  deadElement.textContent = dead;
  lostElement.textContent = lost;
}

function onClickHole(index) {
  const hole = getHole(index);

  if (hole.classList.contains('hole_has-mole')) {
    dead++; 
  } else {
    lost++; 
  }

  deadElement.textContent = dead;
  lostElement.textContent = lost;

  if (dead === 10) {
    alert('Вы победили!');
    resetGame();
  } else if (lost === 5) {
    alert('Вы проиграли!');
    resetGame();
  }
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = () => onClickHole(i);
}