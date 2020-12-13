const classNames = {
    cell: 'cell',
    cellContent: 'cell-content',
    red: 'red',
    black: 'black',
    playerName: 'playerName'
  }
  
  const user = {
    red: "RED", 
    black: "BLACK"
  }
  
  
  const winningArrays = [
      [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
      [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
      [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
      [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
      [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
      [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
      [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
      [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
      [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
      [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
      ];
  
  function calculateWinner(chosenIndex) {
      const winningRanges = winningArrays[chosenIndex];
  
      for(let i=0; i < winningArrays.length; i++){
          const currentEntry = cellValues[chosenIndex];
          const firstOption = cellValues[winningArrays[i][0]];
          const secondOption = cellValues[winningArrays[i][1]];
          const thirdOption = cellValues[winningArrays[i][2]];
          const fourthOption = cellValues[winningArrays[i][3]];
  
          
  
      
  
          if(firstOption === "RED" && 
          secondOption === "RED" &&
          thirdOption === "RED" &&
          fourthOption === "RED"
          ) {
              winningUser = currentEntry;
              return true;
          } else if (firstOption === "BLACK" && 
          secondOption === "BLACK" &&
          thirdOption === "BLACK" &&
          fourthOption === "BLACK"
          ) {
              winningUser = currentEntry;
              return true;
          } 
  
      }
  
      if (numberOfTurnsLeft === 0) {
          winningUser = draw;
          winningCombo = [];
          return true;
      }
      return false;
  };
  
  
  let cellValues = ['', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', ''
  ,'color','color','color','color','color','color','color'
  ];
  
  
  
  let redIsNext = true;
  let winningUser = undefined;
  let numberOfTurnsLeft =42;
  let draw = true;
  
  const cells = document.querySelectorAll(`.${classNames.cell}`);
  const modalOverlay = document.querySelector('.modal-overlay');
  const winnerDetails = document.querySelector('.winner-container > span');
  const newGameButton = document.querySelector('.new-game-button');
  
  
  function showModal () {
      if (winningUser === draw) {
          winnerDetails.innerHTML = "DRAW";
      } else {
      winnerDetails.innerHTML = `${winningUser} WINS!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  `;
  
      }
      modalOverlay.style.display = 'flex';
  
  };
  
  cells.forEach((c, i) => {
    c.addEventListener('click', () => {
  
      if (!cellValues[i] && cellValues[i + 7].length > 0 && winningUser === undefined) {
  
      cellValues[i] = redIsNext ? user.red : user.black; 
      redIsNext = !redIsNext;
      numberOfTurnsLeft--;
              
  
      if(calculateWinner(i)) {
          showModal();
      }
  
      const cellContent = c.querySelector(`.${classNames.cellContent}`);
      let playerName = c.querySelector(`.${classNames.playerName}`);
  
  
      
           
      if (!redIsNext) {
              cellContent.classList.add(classNames.red);
              playerName.innerHTML = cellValue[i];
              playerName.classList.add(classNames.populated)
  
  
              
  
      } else {
              cellContent.classList.add(classNames.black)
              
      } 
  }
  
      
  
    });
  });
  
  function restartGame() {
  
   cellValues = ['', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', ''
  ,'color','color','color','color','color','color','color'
  ];
    
  redIsNext = true;
  winningUser = undefined; 
  numberOfTurnsLeft =42; 
  draw = true;
  
  cells.forEach((c,i) => {
      const cellContent= c.querySelector(`.${classNames.cellContent}`);
      // cellContent.innerHTML = cellValue[i];
      cellContent.classList.remove(classNames.red);
      cellContent.classList.remove(classNames.black);
  
      c.classList.remove(classNames.winner);
  });  
  
  modalOverlay.style.display = 'none';
  
  }
  
  newGameButton.addEventListener('click', () => {
      restartGame();
  });
  